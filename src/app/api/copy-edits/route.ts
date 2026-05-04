import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const editsPath = path.join(process.cwd(), "src/content/copy-edits.json");

type CopyEditsFile = {
  version: number;
  updatedAt: string | null;
  edits: Record<string, string>;
};

function isEditMap(value: unknown): value is Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return Object.values(value).every((entry) => typeof entry === "string");
}

async function readEdits(): Promise<CopyEditsFile> {
  try {
    const contents = await fs.readFile(editsPath, "utf8");
    const parsed = JSON.parse(contents) as unknown;

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      "edits" in parsed &&
      isEditMap((parsed as { edits?: unknown }).edits)
    ) {
      const parsedRecord = parsed as {
        edits: Record<string, string>;
        updatedAt?: unknown;
      };

      return {
        version: 1,
        updatedAt:
          typeof parsedRecord.updatedAt === "string"
            ? parsedRecord.updatedAt
            : null,
        edits: parsedRecord.edits,
      };
    }

    if (isEditMap(parsed)) {
      return {
        version: 1,
        updatedAt: null,
        edits: parsed,
      };
    }
  } catch {
    return {
      version: 1,
      updatedAt: null,
      edits: {},
    };
  }

  return {
    version: 1,
    updatedAt: null,
    edits: {},
  };
}

export async function GET() {
  return NextResponse.json(await readEdits());
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Copy editing is only available in local development." },
      { status: 403 },
    );
  }

  const body = (await request.json().catch(() => null)) as
    | { edits?: unknown }
    | null;

  if (!isEditMap(body?.edits)) {
    return NextResponse.json(
      { error: "Expected an edits object with string values." },
      { status: 400 },
    );
  }

  const file: CopyEditsFile = {
    version: 1,
    updatedAt: new Date().toISOString(),
    edits: body.edits,
  };

  await fs.mkdir(path.dirname(editsPath), { recursive: true });
  await fs.writeFile(editsPath, `${JSON.stringify(file, null, 2)}\n`, "utf8");

  return NextResponse.json({ ok: true, ...file });
}
