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

const flatStyle = `Style: modern 2D flat illustration, bold graphic design. Dark navy blue (#0f2840) as dominant color for buildings and structures. Orange (#f97316) as accent color for highlights, windows, and details. Cream/off-white (#f5f0e8) for sky and background fill. Clean flat shapes, no gradients, no shadows, graphic silhouette style like a travel poster. No people, no text, no watermarks. Wide landscape composition filling the entire frame edge to edge.`;

const images = [
  {
    filename: "stad-rotterdam-2d.png",
    aspectRatio: "16:9",
    prompt: `2D flat illustration of the Rotterdam skyline. The iconic Erasmus Bridge with its asymmetric swan-neck pylon dominates the scene, with modern high-rise buildings in the background. The Maas river reflects below. Navy blue buildings and bridge, orange accent lights and reflections, warm cream sky. Fills the entire frame. ${flatStyle}`,
  },
  {
    filename: "stad-dordrecht-2d.png",
    aspectRatio: "16:9",
    prompt: `2D flat illustration of Dordrecht, Netherlands. The tall Grote Kerk (Onze-Lieve-Vrouwekerk) tower dominates the skyline, surrounded by traditional Dutch canal houses along the waterfront. Water in the foreground reflecting the buildings. Navy blue buildings, orange window details, warm cream sky. Fills the entire frame. ${flatStyle}`,
  },
  {
    filename: "stad-delft-2d.png",
    aspectRatio: "16:9",
    prompt: `2D flat illustration of Delft, Netherlands. The tall slender tower of the Nieuwe Kerk rises above the classic Dutch canal houses along the Markt. A canal with a bridge in the foreground. Navy blue buildings, orange window accents, warm cream sky. Fills the entire frame. ${flatStyle}`,
  },
  {
    filename: "stad-schiedam-2d.png",
    aspectRatio: "16:9",
    prompt: `2D flat illustration of Schiedam, Netherlands. Multiple very tall traditional Dutch windmills (the tallest in the world) dominate the skyline, with classic Dutch buildings below. Navy blue windmills and buildings, orange sails and accents, warm cream sky. Fills the entire frame. ${flatStyle}`,
  },
  {
    filename: "stad-vlaardingen-2d.png",
    aspectRatio: "16:9",
    prompt: `2D flat illustration of Vlaardingen, Netherlands. Traditional Dutch herring fishing boats in the historic harbor, with the old church tower visible behind rows of canal houses. Calm water in the foreground. Navy blue boats and buildings, orange hull accents and windows, warm cream sky. Fills the entire frame. ${flatStyle}`,
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
