"use client";

import { useEffect, useState } from "react";

type EditMap = Record<string, string>;

type Status = "idle" | "dirty" | "saving" | "saved" | "error";

function normalizeEdits(payload: unknown): EditMap {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return {};
  }

  const record = payload as Record<string, unknown>;
  const source =
    record.edits && typeof record.edits === "object" && !Array.isArray(record.edits)
      ? (record.edits as Record<string, unknown>)
      : record;

  return Object.fromEntries(
    Object.entries(source).filter((entry): entry is [string, string] => {
      return typeof entry[1] === "string";
    }),
  );
}

export function CopyEditor() {
  const [enabled, setEnabled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [drafts, setDrafts] = useState<EditMap>({});
  const [editableCount, setEditableCount] = useState(0);
  const [message, setMessage] = useState("Click any highlighted text to edit.");

  useEffect(() => {
    let isMounted = true;

    queueMicrotask(() => {
      if (!isMounted) {
        return;
      }

      const params = new URLSearchParams(window.location.search);
      setEnabled(params.get("copyedit") === "1");
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let isMounted = true;
    const cleanups: Array<() => void> = [];

    document.documentElement.classList.add("copy-edit-mode");

    const blockLinks = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");

      if (link && !link.closest(".copy-editor-panel")) {
        event.preventDefault();
      }
    };

    document.addEventListener("click", blockLinks, true);
    cleanups.push(() => document.removeEventListener("click", blockLinks, true));

    async function hydrateCopy() {
      const response = await fetch("/api/copy-edits", { cache: "no-store" });
      const savedEdits = normalizeEdits(await response.json());
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-copy-id]"),
      );
      const nextDrafts: EditMap = {};

      elements.forEach((element) => {
        const copyId = element.dataset.copyId;

        if (!copyId) {
          return;
        }

        if (!element.dataset.copyOriginal) {
          element.dataset.copyOriginal = element.textContent ?? "";
        }

        const savedText = savedEdits[copyId];

        if (savedText) {
          element.textContent = savedText;
          nextDrafts[copyId] = savedText;
        } else {
          nextDrafts[copyId] = element.textContent ?? "";
        }

        element.contentEditable = "true";
        element.spellcheck = true;
        element.tabIndex = 0;
        element.dataset.copyEditing = "true";

        const updateDraft = () => {
          setDrafts((currentDrafts) => ({
            ...currentDrafts,
            [copyId]: element.textContent ?? "",
          }));
          setStatus("dirty");
          setMessage("Unsaved local copy edits.");
        };

        const keepPlainText = (event: ClipboardEvent) => {
          const text = event.clipboardData?.getData("text/plain");

          if (!text) {
            return;
          }

          event.preventDefault();
          document.execCommand("insertText", false, text);
        };

        const finishLineOnEnter = (event: KeyboardEvent) => {
          if (event.key !== "Enter") {
            return;
          }

          event.preventDefault();
          element.blur();
        };

        element.addEventListener("input", updateDraft);
        element.addEventListener("paste", keepPlainText);
        element.addEventListener("keydown", finishLineOnEnter);

        cleanups.push(() => {
          element.removeEventListener("input", updateDraft);
          element.removeEventListener("paste", keepPlainText);
          element.removeEventListener("keydown", finishLineOnEnter);
          element.contentEditable = "false";
          element.removeAttribute("spellcheck");
          element.removeAttribute("tabindex");
          delete element.dataset.copyEditing;
        });
      });

      if (!isMounted) {
        return;
      }

      setDrafts(nextDrafts);
      setEditableCount(elements.length);
      setStatus("idle");
      setMessage(`${elements.length} editable text fields loaded.`);
    }

    hydrateCopy().catch(() => {
      if (!isMounted) {
        return;
      }

      setStatus("error");
      setMessage("Could not load saved copy edits.");
    });

    return () => {
      isMounted = false;
      cleanups.forEach((cleanup) => cleanup());
      document.documentElement.classList.remove("copy-edit-mode");
    };
  }, [enabled]);

  async function saveDrafts() {
    setStatus("saving");
    setMessage("Saving copy edits locally...");

    try {
      const response = await fetch("/api/copy-edits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ edits: drafts }),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      setStatus("saved");
      setMessage("Saved to src/content/copy-edits.json.");
    } catch {
      setStatus("error");
      setMessage("Save failed. Keep this dev server running and try again.");
    }
  }

  function exitEditor() {
    const url = new URL(window.location.href);
    url.searchParams.delete("copyedit");
    window.location.href = url.toString();
  }

  if (!enabled) {
    return null;
  }

  return (
    <aside
      className="copy-editor-panel"
      data-collapsed={collapsed}
      aria-live="polite"
    >
      <div className="copy-editor-header">
        <span>Copy editor</span>
        <div>
          <strong data-state={status}>{status}</strong>
          <button
            type="button"
            onClick={() => setCollapsed((current) => !current)}
            aria-expanded={!collapsed}
          >
            {collapsed ? "Expand" : "Collapse"}
          </button>
        </div>
      </div>
      {!collapsed ? (
        <>
          <p>{message}</p>
          <div className="copy-editor-actions">
            <button
              type="button"
              onClick={saveDrafts}
              disabled={status === "saving"}
            >
              Save
            </button>
            <button type="button" onClick={() => window.location.reload()}>
              Reload saved
            </button>
            <button type="button" onClick={exitEditor}>
              Exit
            </button>
          </div>
          <small>{editableCount} fields on this page</small>
        </>
      ) : null}
    </aside>
  );
}
