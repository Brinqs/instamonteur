import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public/images");
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Geen GEMINI_API_KEY gevonden");
  process.exit(1);
}

const STYLE =
  "3D isometric illustration, modern flat design, transparent background, isolated object, no background, PNG alpha channel, crisp clean render, no people, no text, no watermark, brand colors: deep navy blue (#0f2878) and bright orange (#f97316)";

const images = [
  {
    filename: "dienst-lekkage-3d.png",
    prompt: `${STYLE}. A burst copper water pipe spraying a dramatic arc of water, large splashing droplets and a puddle on the floor. The pipe is deep navy blue, the water spray has bright orange highlights, the puddle is light cyan/teal. Extra accent: mint green wet floor tiles underneath.`,
  },
  {
    filename: "dienst-ontstopping-3d.png",
    prompt: `${STYLE}. A cross-section of a drain pipe showing a blockage being cleared. A bright orange professional plunger pushing down into a navy blue pipe. Yellow-brown gunk blockage material visible inside, teal clean water flowing through the cleared section. Extra accent: lime green indicator showing clear flow.`,
  },
  {
    filename: "dienst-cvketel-3d.png",
    prompt: `${STYLE}. A modern wall-mounted CV boiler unit. Deep navy blue (#0f2878) rectangular body, bright orange flame indicator light and control dial on the front, warm copper/golden pipes coming out the bottom, small pressure gauge detail. Extra accent: soft red/warm glow from the flame indicator.`,
  },
  {
    filename: "dienst-warmtepomp-3d.png",
    prompt: `${STYLE}. A modern outdoor heat pump unit on a small concrete pad. Bright orange (#f97316) housing panels, deep navy blue (#0f2878) ventilation grille on top, soft teal swirling air flow lines rising from the unit. Extra accent: small mint green shrub beside the unit and a bright yellow sun in the corner.`,
  },
  {
    filename: "dienst-sanitair-3d.png",
    prompt: `${STYLE}. Modern bathroom sanitair: a white ceramic toilet, a white wall-mounted sink with a chrome faucet, a small round mirror above. Deep navy blue (#0f2878) accent wall tiles behind, a bright orange towel hanging on a rail. Extra accent: a small teal/green plant on the corner of the sink.`,
  },
  {
    filename: "dienst-verwarming-3d.png",
    prompt: `${STYLE}. A modern panel radiator mounted on a wall with heat waves rising above it. The radiator body is deep navy blue (#0f2878), bright orange and red heat wave lines float upward from the surface, a warm yellow glow emanates from the center. Extra accent: soft red thermometer icon beside it showing high temperature.`,
  },
];

async function generate(prompt, filename) {
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

  writeFileSync(join(PUBLIC_DIR, filename), Buffer.from(prediction.bytesBase64Encoded, "base64"));
}

for (const img of images) {
  console.log(`Genereren: ${img.filename}...`);
  try {
    await generate(img.prompt, img.filename);
    console.log(`  ✓ ${img.filename}`);
  } catch (err) {
    console.error(`  ✗ ${err.message}`);
  }
  await new Promise((r) => setTimeout(r, 3000));
}

console.log("\nKlaar!");
