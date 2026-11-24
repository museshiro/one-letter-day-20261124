import { readFileSync, writeFileSync } from "node:fs";

// v2 (final): the letter X. Hidden word: "exhausted".
// X carries three connections at once: the sound of "ex-" in exhausted,
// the shape of a crossed-out day, and the X_X eyes of someone wiped out.
const LETTER = "X";

if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter A-Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
writeFileSync(`${outDir}/entry.txt`, LETTER + "\n");

const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (!/^[A-Z]\n$/.test(written)) {
  throw new Error("entry.txt must contain exactly one letter A-Z plus a newline");
}
