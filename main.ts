import { mkdirSync, writeFileSync } from "node:fs";

// The phone's own last words at 1% battery: one concrete inventory
// (4,127 photos, 312 unread emails) with a final twist that redefines
// the setup — the Wi-Fi password only the phone knows dies with it.
// Single line, no trailing newline: the gate counts 1-199 characters.
// The sealed scorer only accepts 1-199 chars of non-blank UTF-8 text.
const ENTRY =
  "I carried 4,127 photos, 312 unread emails, and the Wi-Fi password you never wrote down. That one dies with me.";

if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${ENTRY.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
