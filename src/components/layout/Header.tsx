"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const steden = [
  { naam: "Rotterdam", href: "/loodgieter-rotterdam", illustratie: "/images/stad-rotterdam-2d.png", beschrijving: "Onze thuisbasis — actief in alle Rotterdamse wijken." },
  { naam: "Dordrecht", href: "/loodgieter-dordrecht", illustratie: "/images/stad-dordrecht-2d.png", beschrijving: "Snel ter plaatse in Dordrecht en directe omgeving." },
  { naam: "Delft", href: "/loodgieter-delft", illustratie: "/images/stad-delft-2d.png", beschrijving: "Vakkundige loodgieter actief in heel Delft." },
  { naam: "Schiedam", href: "/loodgieter-schiedam", illustratie: "/images/stad-schiedam-2d.png", beschrijving: "Betrouwbaar loodgieterswerk in Schiedam en omgeving." },
  { naam: "Vlaardingen", href: "/loodgieter-vlaardingen", illustratie: "/images/stad-vlaardingen-2d.png", beschrijving: "Uw loodgieter in Vlaardingen, altijd snel en eerlijk." },
];

const navLinks = [
  { label: "Loodgieter", href: "/loodgieter" },
  { label: "CV-ketels", href: "/cv-ketels" },
  { label: "Warmtepomp", href: "/warmtepomp" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [stedendropdown, setStedendropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setStedendropdown(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setStedendropdown(false), 150);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStedendropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300",
          scrolled ? "shadow-md border-b border-border h-[64px]" : "border-b border-border h-[80px]"
        )}
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="container mx-auto px-6 max-w-7xl h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/Instamonteur-logo.png"
                alt="Insta Monteur"
                width={300}
                height={100}
                className="h-32 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Steden dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href="/steden"
                  onClick={() => setStedendropdown(false)}
                  className="flex items-center gap-1 text-sm font-semibold text-foreground/60 hover:text-brand transition-colors"
                >
                  Steden
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", stedendropdown && "rotate-180")} />
                </Link>

                {stedendropdown && (
                  <div
                    className="fixed left-0 right-0 bg-white border-b border-border shadow-2xl z-50"
                    style={{ top: scrolled ? "63px" : "79px" }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="container mx-auto px-6 max-w-7xl">
                      <div className="flex gap-6 py-6">
                        {steden.map((stad) => (
                          <Link
                            key={stad.naam}
                            href={stad.href}
                            onClick={() => setStedendropdown(false)}
                            className="group flex flex-col gap-2 rounded-xl p-3 hover:bg-orange-50 transition-colors flex-1"
                          >
                            <div className="relative w-full h-24 rounded-lg overflow-hidden">
                              <Image
                                src={stad.illustratie}
                                alt={stad.naam}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                unoptimized
                              />
                            </div>
                            <span className="text-sm font-bold text-brand group-hover:text-orange-500 transition-colors">
                              {stad.naam}
                            </span>
                            <p className="text-xs text-foreground/50 leading-snug">{stad.beschrijving}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4 pb-8">
                        <Link
                          href="/steden"
                          onClick={() => setStedendropdown(false)}
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-orange-500 transition-colors"
                        >
                          Bekijk alle steden
                          <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-foreground/60 hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Phone + mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hidden lg:inline-flex items-center gap-2 bg-brand text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-orange-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.phone}
              </a>
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
            <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
              <p className="text-xs font-bold text-foreground/30 uppercase tracking-widest px-3 mb-1">Steden</p>
              {steden.map((stad) => (
                <Link
                  key={stad.href}
                  href={stad.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-sm py-2.5 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors text-brand"
                >
                  {stad.naam}
                </Link>
              ))}
              <div className="h-px bg-border my-3" />
              {navLinks.map((item) => (
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
