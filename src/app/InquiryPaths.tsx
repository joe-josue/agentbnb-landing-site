"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, GitFork, Handshake, Send, X } from "lucide-react";

const repoUrl = "https://github.com/joe-josue/AgentBNB";

const paths = [
  {
    id: "advisory",
    label: "Implementation",
    title: "Inquire for Assisted Setup & Advisory",
    body: "Accepting custom setup for serious inquirers looking to apply AgentBNB to their properties. Reach out with as much detail as you can so we can kickoff exploration.",
    cta: "Inquire for Setup",
    icon: Handshake,
  },
  {
    id: "stack-tour",
    label: "Open source",
    title: "Run the Stack, Contribute, Donate.",
    body: "AgentBNB runs an open source component shared from real implementation. Savvy users can run the stack themselves, developers are open to contribute, and donating to allow continuous development goes a long way.",
    href: repoUrl,
    cta: "See GitHub Repo",
    icon: GitFork,
  },
];

type SubmitState =
  | { status: "idle"; message: null }
  | { status: "submitting"; message: null }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function InquiryPaths() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: null,
  });
  const emailId = useId();
  const messageId = useId();
  const modalRoot = typeof document === "undefined" ? null : document.body;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const company = String(formData.get("company") ?? "");

    setSubmitState({ status: "submitting", message: null });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message, company }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error ?? "The inquiry could not be sent.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: "Sent. I’ll review the details and reply by email.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The inquiry could not be sent.",
      });
    }
  }

  return (
    <>
      <div className="path-grid" id="paths" aria-label="Explore AgentBNB">
        <button
          className="path-card"
          type="button"
          onClick={() => {
            if (document.body.classList.contains("copy-edit-mode")) {
              return;
            }

            setSubmitState({ status: "idle", message: null });
            setIsOpen(true);
          }}
        >
          <div className="path-meta">
            <span data-copy-id={`paths.${paths[0].id}.label`}>
              {paths[0].label}
            </span>
            <Handshake aria-hidden="true" size={15} />
          </div>
          <h2 data-copy-id={`paths.${paths[0].id}.title`}>{paths[0].title}</h2>
          <p data-copy-id={`paths.${paths[0].id}.body`}>{paths[0].body}</p>
          <span className="card-link">
            <span data-copy-id={`paths.${paths[0].id}.cta`}>
              {paths[0].cta}
            </span>
            <ArrowUpRight aria-hidden="true" size={14} />
          </span>
        </button>

        <a
          className="path-card"
          href={paths[1].href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="path-meta">
            <span data-copy-id={`paths.${paths[1].id}.label`}>
              {paths[1].label}
            </span>
            <GitFork aria-hidden="true" size={15} />
          </div>
          <h2 data-copy-id={`paths.${paths[1].id}.title`}>{paths[1].title}</h2>
          <p data-copy-id={`paths.${paths[1].id}.body`}>{paths[1].body}</p>
          <span className="card-link">
            <span data-copy-id={`paths.${paths[1].id}.cta`}>
              {paths[1].cta}
            </span>
            <ArrowUpRight aria-hidden="true" size={14} />
          </span>
        </a>
      </div>

      {isOpen && modalRoot
        ? createPortal(
            <div
              className="inquiry-modal-shell"
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsOpen(false);
                }
              }}
            >
              <section
                aria-labelledby="inquiry-title"
                aria-modal="true"
                className="inquiry-modal"
                role="dialog"
              >
                <button
                  aria-label="Close inquiry form"
                  className="inquiry-close"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  <X aria-hidden="true" size={17} />
                </button>

                <p className="inquiry-kicker">AgentBNB setup inquiry</p>
                <h2 id="inquiry-title">Tell me what you want to operate.</h2>
                <p className="inquiry-intro">
                  Share the property context, number of rentals, current tools,
                  and what you want AgentBNB to handle.
                </p>

                <form className="inquiry-form" onSubmit={submitInquiry}>
                  <div className="inquiry-honeypot" aria-hidden="true">
                    <label>
                      Company
                      <input name="company" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <label htmlFor={emailId}>
                    Email
                    <input
                      autoComplete="email"
                      autoFocus
                      id={emailId}
                      inputMode="email"
                      maxLength={180}
                      name="email"
                      placeholder="you@example.com"
                      required
                      type="email"
                    />
                  </label>

                  <label htmlFor={messageId}>
                    Inquiry details
                    <textarea
                      id={messageId}
                      maxLength={4000}
                      name="message"
                      placeholder="Tell me about the property, number of units, current workflow, and what you want to improve."
                      required
                      rows={7}
                    />
                  </label>

                  <div className="inquiry-actions">
                    <button
                      className="inquiry-submit"
                      disabled={submitState.status === "submitting"}
                      type="submit"
                    >
                      <Send aria-hidden="true" size={15} />
                      {submitState.status === "submitting"
                        ? "Sending..."
                        : "Send Inquiry"}
                    </button>
                    <a
                      className="inquiry-mailto"
                      href="https://cal.com/joejosue"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book a Call
                    </a>
                  </div>

                  {submitState.message ? (
                    <p
                      className="inquiry-status"
                      data-status={submitState.status}
                    >
                      {submitState.message}
                    </p>
                  ) : null}
                </form>
              </section>
            </div>,
            modalRoot,
        )
        : null}
    </>
  );
}
