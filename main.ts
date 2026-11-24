import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The voicemail from my own number says I should not come home, and it was recorded tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
