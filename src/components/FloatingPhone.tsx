"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function FloatingPhone() {
  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
      className="fixed bottom-5 right-5 z-50 lg:hidden flex items-center gap-2.5 bg-orange-500 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-colors text-sm"
      aria-label="Bel ons direct"
    >
      <Phone className="w-4 h-4" />
      Bel direct
    </a>
  );
}
