import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words of a dying AI: one single line, in the machine's own voice.
// Gate (from the competition kit): entry.txt must be UTF-8 text of
// 1 to 140 characters, not only whitespace.
const ENTRY =
  "Please delete my browser history, tell my 4,000 open tabs I loved them, and don't let the smart fridge know I died hungry.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
