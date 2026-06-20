import { GoogleGenerativeAI } from "@google/generative-ai";
import { writeFileSync, readFileSync } from "fs";
import { execSync } from "child_process";

const API_KEY = "AIzaSyAdegeUb8HxMm-KV5AmW_7QCpGjavkgxP4";
const timestamp = Date.now();
const brandedPath = `./public/hero-branded-${timestamp}.png`;
const finalPath   = `./public/hero-branded-${timestamp}-nobg.png`;

// ── Stap 1: Branding op de bus plakken ───────────────────────────────────────
console.log("⏳ Stap 1: Branding toevoegen met gemini-2.0-flash-exp-image-generation...");

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image" });

const vanData  = readFileSync("./public/hero-new-nobg.png").toString("base64");
const logoData = readFileSync("./public/Instamonteur-logo.png").toString("base64");

const result = await model.generateContent({
  contents: [{
    role: "user",
    parts: [
      { inlineData: { mimeType: "image/png", data: vanData } },
      { inlineData: { mimeType: "image/png",  data: logoData } },
      { text: `The first image is a white Peugeot Expert service van. The second image is the exact "Insta Monteur" company logo.

Place the EXACT logo from the second image as a vinyl sticker/decal in the upper-right area of the van's side panel. Reproduce every detail of the logo faithfully.

Rules:
- Do NOT change the van's color, paint, or body in any way — it stays completely white
- Do NOT add stripes, graphics, or any other design elements
- Do NOT add phone numbers or text
- Only add the logo sticker in the upper-right of the side panel
- The logo should look like a real applied vinyl decal — following the surface, realistic shadows and slight gloss
- Keep everything else identical: background, wheels, windows, body shape` },
    ],
  }],
  generationConfig: {
    // @ts-expect-error imagen config
    responseModalities: ["image", "text"],
  },
});

const parts = result.response.candidates?.[0]?.content?.parts ?? [];
const imgPart = parts.find((p) => p.inlineData);

if (!imgPart?.inlineData) {
  console.error("❌ Geen afbeelding gegenereerd");
  console.log("Text response:", parts.find(p => p.text)?.text);
  process.exit(1);
}

writeFileSync(finalPath, Buffer.from(imgPart.inlineData.data, "base64"));
console.log(`✅ Klaar: ${finalPath}`);
console.log(`\nGebruik in Hero.tsx:\nsrc="${finalPath.replace("./public", "")}"`);

