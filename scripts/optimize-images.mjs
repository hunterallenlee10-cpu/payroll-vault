// Converts the supplied photos in public/images/raw to optimised files in public/images.
// Keeps the file names. Logos are kept as PNG as well as WebP.
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const RAW = "public/images/raw";
const OUT = "public/images";

await mkdir(OUT, { recursive: true });
for (const file of await readdir(RAW)) {
  const src = path.join(RAW, file);
  const base = file.replace(/\.(png|jpe?g)$/i, "");
  const meta = await sharp(src).metadata();
  await sharp(src).webp({ quality: 86, effort: 6 }).toFile(path.join(OUT, `${base}.webp`));
  if (base.startsWith("00-logo")) {
    await sharp(src).png({ compressionLevel: 9, palette: false }).toFile(path.join(OUT, `${base}.png`));
  }
  console.log(`${file}: ${meta.width}x${meta.height}`);
}

// Favicon / touch icon sources from the dial icon (transparent background).
const dial = path.join(RAW, "00-logo-3-logo-dial-icon-black-bg.png");
await sharp(dial).resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("app/icon.png");
await sharp(dial)
  .resize(160, 160, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: "#F7F5EF" })
  .flatten({ background: "#F7F5EF" })
  .png()
  .toFile("app/apple-icon.png");
console.log("icons written");
