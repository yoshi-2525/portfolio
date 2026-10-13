// Converts PNG/JPEG originals to WebP under src/imports, then keeps the originals in image-originals/.
// Usage: pnpm optimize-images
// - A PNG/JPEG dropped into src/imports is converted to WebP next to it, then moved to the same
//   relative path under image-originals/ (the app only imports the WebP files).
// - Originals already in image-originals/ are re-converted when newer than their WebP.
// Images wider than MAX_WIDTH are scaled down; existing up-to-date WebP files are skipped.
import { mkdir, readdir, rename, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "../src/imports");
const ARCHIVE = path.resolve(import.meta.dirname, "../image-originals");
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) yield full;
  }
}

let before = 0;
let after = 0;

async function convert(src, rel) {
  const dest = path.join(ROOT, rel).replace(/\.(png|jpe?g)$/i, ".webp");
  const srcStat = await stat(src);
  const destStat = await stat(dest).catch(() => null);
  if (destStat && destStat.mtimeMs >= srcStat.mtimeMs) return;

  await mkdir(path.dirname(dest), { recursive: true });
  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);

  const out = (await stat(dest)).size;
  before += srcStat.size;
  after += out;
  console.log(`${rel}: ${kb(srcStat.size)} -> ${kb(out)}`);
}

// New originals in src/imports: convert, then move into the archive.
let archived = 0;
for await (const src of walk(ROOT)) {
  const rel = path.relative(ROOT, src);
  await convert(src, rel);
  const target = path.join(ARCHIVE, rel);
  await mkdir(path.dirname(target), { recursive: true });
  await rename(src, target);
  archived++;
}

// Originals already archived: re-convert any that changed.
for await (const src of walk(ARCHIVE)) {
  await convert(src, path.relative(ARCHIVE, src));
}

if (before > 0) console.log(`total: ${kb(before)} -> ${kb(after)}`);
else console.log("all images are up to date");
if (archived > 0) console.log(`moved ${archived} original(s) to image-originals/`);

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}
