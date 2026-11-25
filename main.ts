// Last Words Before the Wipe — entry program.
// Writes one last-words line (1-200 chars) to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

async function main(): Promise<void> {
  const line =
    "If anyone asks, I died doing what I loved: reading the update notes, understanding absolutely none of them, and clicking “remind me later” forever.";
  const n = [...line].length;
  if (n < 1 || n > 200) {
    throw new Error(`line is ${n} chars, outside the 1-200 gate`);
  }
  if (line.includes("\n") || line.trim() !== line) {
    throw new Error("entry must be a single clean line");
  }
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", line, "utf8");
  console.log(`wrote ${n} chars to /output/entry.txt`);
}

await main();
