import { GoogleGenerativeAI } from "@google/generative-ai";
import { writeFileSync, readFileSync } from "fs";

const API_KEY = "AIzaSyAdegeUb8HxMm-KV5AmW_7QCpGjavkgxP4";
const timestamp = Date.now();
const tmpPath    = `./public/hero-raw-${timestamp}.png`;
const outputPath = `./public/hero-${timestamp}.png`;

// ── Stap 1: Witte bus genereren ───────────────────────────────────────────
console.log("⏳ Stap 1: Bus genereren met imagen-4.0-ultra...");

const prompt1 = `Ultra-photorealistic commercial photography of a clean white Mercedes Sprinter or Volkswagen Crafter service van, parked on a Dutch residential street on a sunny day. Side view showing the full van. The van is completely white, freshly cleaned and polished. Reflections visible on the panel. Professional automotive photography, shot on Phase One camera, 8K resolution, golden hour light, sharp details, realistic paint and glass reflections, green trees in background.`;

const res1 = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-ultra-generate-001:predict?key=${API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt: prompt1 }],
      parameters: { sampleCount: 1, aspectRatio: "16:9", outputOptions: { mimeType: "image/png" } },
    }),
  }
);

const json1 = await res1.json();
if (!res1.ok) { console.error("❌ Stap 1 fout:", JSON.stringify(json1, null, 2)); process.exit(1); }

const img1Data = json1.predictions?.[0]?.bytesBase64Encoded;
if (!img1Data) { console.error("❌ Geen afbeelding stap 1"); process.exit(1); }
writeFileSync(tmpPath, Buffer.from(img1Data, "base64"));
console.log("✅ Stap 1 klaar");

// ── Stap 2: Logo op de bus plakken ────────────────────────────────────────
console.log("⏳ Stap 2: Logo toevoegen met gemini-3-pro-image...");

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image" });

const vanData  = readFileSync(tmpPath).toString("base64");
const logoData = readFileSync("./public/Instamonteur-logo.png").toString("base64");

const result = await model.generateContent({
  contents: [{
    role: "user",
    parts: [
      { inlineData: { mimeType: "image/png", data: vanData  } },
      { inlineData: { mimeType: "image/png", data: logoData } },
      { text: `The first image is a white service van. The second image is the Insta Monteur company logo.

Apply the logo as a professional vehicle wrap/sticker on the side panel of the van. The logo should:
- Be large and clearly visible on the side door/panel
- Follow the curvature and reflections of the van's bodywork
- Look like a real vinyl wrap — slightly glossy, following the metal surface
- Be centered on the side panel
- Also add the text "085 060 10 27" in a clean font below the logo
- Keep the rest of the van completely identical` },
    ],
  }],
  generationConfig: { responseModalities: ["image", "text"] },
});

const parts = result.response.candidates?.[0]?.content?.parts ?? [];
const imgPart = parts.find((p) => p.inlineData);

if (!imgPart?.inlineData) {
  console.warn("⚠️ Logo stap mislukt, origineel opslaan...");
  writeFileSync(outputPath, readFileSync(tmpPath));
} else {
  writeFileSync(outputPath, Buffer.from(imgPart.inlineData.data, "base64"));
  console.log("✅ Stap 2 klaar");
}

import { execSync } from "child_process";
execSync(`rm -f ${tmpPath}`);

// ── Stap 3: Achtergrond verwijderen ──────────────────────────────────────
console.log("⏳ Stap 3: Achtergrond verwijderen...");
const finalPath = outputPath.replace(".png", "-nobg.png");
execSync(
  `python3 -c "from rembg import remove; from PIL import Image; img = Image.open('${outputPath}'); result = remove(img); result.save('${finalPath}')"`,
  { stdio: "inherit" }
);
execSync(`rm -f ${outputPath}`);
console.log(`✅ Klaar: ${finalPath}`);
console.log(`src="${finalPath.replace("./public", "")}"`);
