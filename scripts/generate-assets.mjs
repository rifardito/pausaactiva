import sharp from "sharp";
import { existsSync } from "node:fs";

const source = "public/img/logo.png";
const out = "public/img";

if (!existsSync(source)) {
  console.error("No se encuentra public/img/logo.png");
  process.exit(1);
}

// Logo optimizado para la web (mantiene transparencia)
await sharp(source)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(`${out}/logo-512.png`);

for (const size of [192, 512]) {
  await sharp(source)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(`${out}/icon-${size}.png`);
}

await sharp(source)
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(`${out}/apple-touch-icon.png`);

// Imagen para compartir en WhatsApp / redes (1200 x 630)
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f1f4e2"/>
  <circle cx="1120" cy="70" r="240" fill="#fecb9e" opacity="0.55"/>
  <circle cx="90" cy="620" r="220" fill="#67917d" opacity="0.18"/>
  <rect x="72" y="150" width="4" height="330" fill="#fecb9e"/>
  <text x="108" y="222" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="38" font-weight="700" fill="#4a6b58" letter-spacing="4">PAUSA ACTIVA · LOGROÑO</text>
  <text x="108" y="300" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="50" font-weight="700" fill="#334b1c">La mejor residencia es</text>
  <text x="108" y="362" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="50" font-weight="700" fill="#334b1c">el hogar que has creado.</text>
  <text x="108" y="436" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="27" fill="#4a6b58">Acompañamiento y bienestar para personas mayores</text>
  <text x="108" y="496" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="27" font-weight="700" fill="#334b1c">648 17 36 62 · pausaactiva.es</text>
</svg>
`;

const base = await sharp(Buffer.from(svg)).png().toBuffer();
const mark = await sharp(source).resize(260, 260, { fit: "contain" }).png().toBuffer();

await sharp(base)
  .composite([{ input: mark, left: 880, top: 185 }])
  .jpeg({ quality: 88 })
  .toFile(`${out}/og-image.jpg`);

console.log("Assets generados en", out);
