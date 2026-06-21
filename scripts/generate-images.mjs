import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public/images");
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Geen GEMINI_API_KEY gevonden in .env.local");
  process.exit(1);
}

mkdirSync(PUBLIC_DIR, { recursive: true });

const images = [
  {
    filename: "loodgieter-rotterdam-huis.jpg",
    prompt:
      "A traditional Dutch brick terraced house in Rotterdam, sunny day, neat small front garden with green grass and a small white rectangular wooden sign on a short wooden stake planted in the grass. The sign is blank white, facing the camera. No people, no text on the sign. Clear blue sky, clean street, typical Rotterdam architecture with brick facade. Photorealistic, architectural photography, wide angle, sharp focus. No watermark.",
  },
  {
    filename: "loodgieter-rotterdam-lekkage.jpg",
    prompt:
      "Close-up of a leaking water pipe under a kitchen sink in a modern Dutch home interior. Water droplets visible on copper pipes, professional tools nearby, clean tidy cabinet. No people. Photorealistic, warm natural light, high detail. No watermark.",
  },
  {
    filename: "loodgieter-rotterdam-cv-ketel.jpg",
    prompt:
      "A modern white CV boiler mounted on a clean utility room wall in a Dutch Rotterdam home. Professional installation with neat copper pipes, pressure gauges visible. No people. Warm interior lighting, photorealistic, high quality. No watermark.",
  },
  {
    filename: "loodgieter-rotterdam-gereedschap.jpg",
    prompt:
      "Professional plumber tools neatly laid out on a white surface: pipe wrench, copper pipes, fittings, tape, level. Clean and organized. No people. Photorealistic, studio lighting, top-down view. No watermark.",
  },
];

async function generateWithImagen(prompt, filename) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-ultra-generate-001:predict?key=${API_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: "4:3",
        safetyFilterLevel: "block_few",
        personGeneration: "dont_allow",
      },
    }),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || JSON.stringify(json));

  const prediction = json.predictions?.[0];
  if (!prediction?.bytesBase64Encoded) throw new Error("Geen afbeelding in response");

  const buffer = Buffer.from(prediction.bytesBase64Encoded, "base64");
  writeFileSync(join(PUBLIC_DIR, filename), buffer);
}

for (const image of images) {
  console.log(`Genereren: ${image.filename}...`);
  try {
    await generateWithImagen(image.prompt, image.filename);
    console.log(`  ✓ Opgeslagen: public/images/${image.filename}`);
  } catch (err) {
    console.error(`  ✗ Mislukt: ${err.message}`);
  }
  await new Promise((r) => setTimeout(r, 3000));
}

console.log("\nKlaar!");
