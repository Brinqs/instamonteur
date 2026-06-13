"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div className="bg-brand text-white text-sm py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          <span>{siteConfig.openingHours}</span>
          <a
            href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
            className="flex items-center gap-1.5 hover:text-orange-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-white font-black text-lg group-hover:bg-orange-500 transition-colors duration-200">
              IM
            </div>
            <span className="font-black text-xl tracking-tight text-brand">
              Insta<span className="text-orange-500">Monteur</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-orange-500 hover:bg-orange-600 text-white font-semibold border-orange-500"
              )}
            >
              <Phone className="w-4 h-4 mr-1.5" />
              Bel direct
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}>
              <Menu className="w-5 h-5" />
              <span className="sr-only">Menu openen</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1"
                aria-label="Menu sluiten"
              >
                <X className="w-5 h-5" />
              </button>
              <nav className="flex flex-col gap-1 mt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium py-3 px-4 rounded-md hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold border-orange-500 justify-center"
                    )}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {siteConfig.phone}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
