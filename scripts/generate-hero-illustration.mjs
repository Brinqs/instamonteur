import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public/images");
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Geen GEMINI_API_KEY gevonden in environment");
  process.exit(1);
}

const sharedStyle = `Style: modern flat-shaded 3D isometric illustration, identical to a high-end SaaS product illustration. Dark navy blue (#0f2840) as dominant color, orange (#f97316) accents. Bold silhouettes, smooth surfaces, no textures, subtle drop shadow beneath objects. Pure white background. No people, no text, no watermarks.`;

const images = [
  {
    filename: "hero-warmtepomp-3d.png",
    aspectRatio: "3:4",
    prompt: `Modern 3D isometric illustration. A stylized Dutch brick townhouse in dark navy blue (#0f2840) with an orange (#f97316) front door and white window frames. A modern white heat pump unit stands beside the house. The house has a simple pitched roof in dark navy. Centered portrait composition with generous white space. ${sharedStyle}`,
  },
  {
    filename: "erasmusbrug-3d.png",
    aspectRatio: "3:4",
    prompt: `Modern 3D isometric illustration. The iconic Rotterdam Erasmus Bridge rendered in dark navy blue (#0f2840). The asymmetric single pylon ("swan neck") is clearly recognizable, with cable-stay wires fanning outward. Orange (#f97316) accent details on the cables and deck edge. The bridge is shown from a slight isometric angle. Centered portrait composition with generous white space. ${sharedStyle}`,
  },
];

async function generate(prompt, filename, aspectRatio) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-ultra-generate-001:predict?key=${API_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio,
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
  console.log(`✓ Opgeslagen: public/images/${filename}`);
}

for (const img of images) {
  console.log(`Genereren: ${img.filename}...`);
  try {
    await generate(img.prompt, img.filename, img.aspectRatio);
  } catch (err) {
    console.error(`✗ Mislukt: ${err.message}`);
  }
  await new Promise((r) => setTimeout(r, 3000));
}
