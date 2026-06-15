import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp-image-generation" });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      // @ts-expect-error imagen config
      responseModalities: ["image", "text"],
    },
  });

  const parts = result.response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p: { inlineData?: { mimeType: string; data: string } }) => p.inlineData);

  if (!imagePart?.inlineData) {
    return NextResponse.json({ error: "Geen afbeelding gegenereerd" }, { status: 500 });
  }

  return NextResponse.json({
    mimeType: imagePart.inlineData.mimeType,
    data: imagePart.inlineData.data,
  });
}
