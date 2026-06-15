import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { data, mimeType } = await req.json();
  const ext = mimeType.includes("png") ? "png" : "jpg";
  const filename = `hero-branded-${Date.now()}-nobg.${ext}`;
  const filePath = path.join(process.cwd(), "public", filename);

  writeFileSync(filePath, Buffer.from(data, "base64"));

  return NextResponse.json({ ok: true, filename });
}
