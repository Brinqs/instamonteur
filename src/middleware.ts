import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("www.")) {
    const nonWwwHost = host.slice(4);
    const url = request.nextUrl.clone();
    url.host = nonWwwHost;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
