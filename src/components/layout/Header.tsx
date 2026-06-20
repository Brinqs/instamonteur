"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, X, Home } from "lucide-react";
import { navigation, siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Main nav — verbergt bij scrollen */}
        <div
          className={cn(
            "bg-white border-b border-border transition-all duration-300 overflow-hidden",
            scrolled ? "h-0 opacity-0" : "h-[72px] opacity-100"
          )}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-between h-[72px]">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Instamonteur-logo.png"
                  alt="Insta Monteur"
                  width={160}
                  height={48}
                  className="h-40 w-auto object-contain"
                  priority
                />
              </Link>
              <div className="hidden lg:flex items-center gap-4">
                <span className="text-sm text-muted-foreground font-medium">Ma–Vr 08:00–17:00</span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-orange-500 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {siteConfig.phone}
                </a>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Menu openen"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Subheader — altijd zichtbaar */}
        <div className={cn(
          "hidden lg:block bg-brand transition-shadow duration-300 shadow-[0_8px_32px_rgba(15,40,120,0.7)] [clip-path:inset(0_0_-40px_0)]",
          scrolled && "shadow-[0_8px_32px_rgba(15,40,120,0.7)]"
        )}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={cn("flex items-center justify-between transition-all duration-300", scrolled ? "h-14" : "h-11")}>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-white hover:text-white/80 transition-colors shrink-0">
                  <Home className="w-5 h-5" />
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs font-semibold text-white hover:text-white/80 transition-colors uppercase tracking-wider"
                  >
                    {item.label}
                  </Link>
                ))}
                <span className="text-white/20">|</span>
                {[
                  { label: "Loodgieter", href: "/loodgieter" },
                  { label: "CV-ketels", href: "/cv-ketels" },
                  { label: "Warmtepomp", href: "/warmtepomp" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn("text-xs font-semibold hover:text-white transition-colors uppercase tracking-wider", scrolled ? "text-white" : "text-white/70")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {scrolled && (
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-4 py-1.5 rounded-full text-xs hover:bg-orange-400 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  {siteConfig.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-border">
              <Image src="/Instamonteur-logo.png" alt="Insta Monteur" width={120} height={36} className="h-8 w-auto object-contain" />
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-bold text-base py-3 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 bg-brand text-white font-bold py-3.5 rounded-full w-full text-sm hover:bg-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
