import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const vanPath  = path.join(process.cwd(), "public", "hero-new-nobg.png");
  const logoPath = path.join(process.cwd(), "public", "Instamonteur-logo.png");

  const vanData  = readFileSync(vanPath).toString("base64");
  const logoData = readFileSync(logoPath).toString("base64");

  const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image" });

  const result = await model.generateContent({
    contents: [{
      role: "user",
      parts: [
        { inlineData: { mimeType: "image/png", data: vanData } },
        { inlineData: { mimeType: "image/png",  data: logoData } },
        { text: prompt },
      ],
    }],
    generationConfig: {
      // @ts-expect-error imagen config
      responseModalities: ["image", "text"],
    },
  });

  const parts = result.response.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p: { inlineData?: { mimeType: string; data: string } }) => p.inlineData);

  if (!imgPart?.inlineData) {
    return NextResponse.json({ error: "Geen afbeelding gegenereerd" }, { status: 500 });
  }

  return NextResponse.json({
    mimeType: imgPart.inlineData.mimeType,
    data: imgPart.inlineData.data,
  });
}
