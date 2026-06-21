import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public/images");
const API_KEY = process.env.GEMINI_API_KEY;

// Best available: imagen-4.0-ultra-generate-001 (highest quality dedicated image model)
// Fallback: gemini-3-pro-image (Gemini-native image generation)
const IMAGEN_MODEL = "imagen-4.0-ultra-generate-001";
const GEMINI_IMAGE_MODEL = "gemini-3-pro-image";

mkdirSync(PUBLIC_DIR, { recursive: true });

const images = [
  {
    filename: "loodgieter-rotterdam-aan-het-werk.jpg",
    prompt:
      "Young professional Dutch plumber in dark navy work clothes with orange logo, fixing pipes under a modern kitchen sink in a Rotterdam apartment. Natural window light, clean modern Dutch interior, tools neatly laid out. Confident and skilled expression. Photorealistic, high quality DSLR photo, 35mm lens, shallow depth of field. No text, no watermark.",
  },
  {
    filename: "loodgieter-rotterdam-lekkage.jpg",
    prompt:
      "Skilled young Dutch plumber in navy work uniform carefully inspecting a water pipe connection behind a wall in a Dutch home. He holds professional tools, focused expression. Clean modern bathroom interior, Rotterdam home. Photorealistic, natural light, high quality. No text, no watermark.",
  },
  {
    filename: "loodgieter-rotterdam-cv-ketel.jpg",
    prompt:
      "Professional young Dutch technician installing a sleek modern white CV boiler on a wall in a clean utility room in Rotterdam. Navy work clothes, tools nearby, organized workspace. Warm interior lighting, photorealistic high quality photo. No text, no watermark.",
  },
  {
    filename: "loodgieter-rotterdam-team.jpg",
    prompt:
      "Two young professional Dutch plumbers in matching dark navy work clothes standing confidently in front of a traditional Rotterdam brick residential street. Friendly professional expressions, toolbags, sunny day. Typical Rotterdam row houses in background. Photorealistic, golden hour light. No text, no watermark.",
  },
];

async function generateWithImagen(prompt, filename) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${IMAGEN_MODEL}:predict?key=${API_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: "4:3",
        safetyFilterLevel: "block_few",
        personGeneration: "allow_adult",
      },
    }),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || JSON.stringify(json));

  const prediction = json.predictions?.[0];
  if (!prediction?.bytesBase64Encoded) throw new Error("Geen afbeelding in response");

  const buffer = Buffer.from(prediction.bytesBase64Encoded, "base64");
  const filepath = join(PUBLIC_DIR, filename);
  writeFileSync(filepath, buffer);
  return true;
}

async function generateWithGemini(prompt, filename) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_IMAGE_MODEL}:generateContent?key=${API_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["image", "text"] },
    }),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || JSON.stringify(json));

  const parts = json.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData);
  if (!imagePart?.inlineData) throw new Error("Geen afbeelding in response");

  const buffer = Buffer.from(imagePart.inlineData.data, "base64");
  const filepath = join(PUBLIC_DIR, filename);
  writeFileSync(filepath, buffer);
  return true;
}

async function generateImage({ filename, prompt }) {
  console.log(`\nGenereren: ${filename}`);

  // Probeer eerst Imagen 4.0 Ultra (beste kwaliteit)
  try {
    await generateWithImagen(prompt, filename);
    console.log(`  ✓ [Imagen 4.0 Ultra] Opgeslagen: public/images/${filename}`);
    return;
  } catch (err) {
    console.log(`  ⚠ Imagen 4.0 Ultra mislukt: ${err.message}`);
  }

  // Fallback: Gemini 3 Pro Image
  try {
    await generateWithGemini(prompt, filename);
    console.log(`  ✓ [Gemini 3 Pro Image] Opgeslagen: public/images/${filename}`);
  } catch (err) {
    console.error(`  ✗ Beide modellen mislukt: ${err.message}`);
  }
}

for (const image of images) {
  await generateImage(image);
  await new Promise((r) => setTimeout(r, 3000));
}

console.log("\nKlaar!");
