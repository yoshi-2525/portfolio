// Converts PNG/JPEG images under src/imports to WebP next to the original.
// Usage: pnpm optimize-images
// Images wider than MAX_WIDTH are scaled down; existing up-to-date WebP files are skipped.
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "../src/imports");
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) yield full;
  }
}

let before = 0;
let after = 0;
for await (const src of walk(ROOT)) {
  const dest = src.replace(/\.(png|jpe?g)$/i, ".webp");
  const srcStat = await stat(src);
  const destStat = await stat(dest).catch(() => null);
  if (destStat && destStat.mtimeMs >= srcStat.mtimeMs) continue;

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);

  const out = (await stat(dest)).size;
  before += srcStat.size;
  after += out;
  console.log(`${path.relative(ROOT, src)}: ${kb(srcStat.size)} -> ${kb(out)}`);
}

if (before > 0) console.log(`total: ${kb(before)} -> ${kb(after)}`);
else console.log("all images are up to date");

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}
