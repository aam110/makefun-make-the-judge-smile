import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Smile: a small good thing that happened today —
// a baker's kindness, one concrete detail and one turn.
const line =
  "The baker slipped a still-warm roll into my bag and whispered, ‘for the road’ — I’d only asked for directions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
