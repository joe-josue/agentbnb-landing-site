import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const cwd = process.cwd();
const sourcePath = process.env.AGENTBNB_VERSION_HISTORY_SOURCE
  ? path.resolve(process.env.AGENTBNB_VERSION_HISTORY_SOURCE)
  : path.resolve(cwd, "../AgentBNB/docs/version-history.json");
const mirrorPath = path.resolve(cwd, "src/content/version-history.json");

function normalizeJson(value) {
  return `${JSON.stringify(JSON.parse(value), null, 2)}\n`;
}

const [sourceRaw, mirrorRaw] = await Promise.all([
  readFile(sourcePath, "utf8"),
  readFile(mirrorPath, "utf8"),
]);

const source = normalizeJson(sourceRaw);
const mirror = normalizeJson(mirrorRaw);

if (source !== mirror) {
  console.error("Version history mirror is out of sync.");
  console.error(`Source: ${sourcePath}`);
  console.error(`Mirror: ${mirrorPath}`);
  process.exit(1);
}

console.log("Version history mirror is in sync.");
