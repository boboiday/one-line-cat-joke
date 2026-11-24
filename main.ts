import { mkdirSync, writeFileSync } from "node:fs";

const line = "I bought Mochi a $60 cat bed; he sleeps in the box it came in, on my laptop, directly on the keyboard — his review, one paw on Enter: 'five stars, would ignore again.'";

if (line.length < 1 || line.length > 200 || line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
