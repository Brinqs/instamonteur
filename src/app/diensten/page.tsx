import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Diensten | Insta Monteur – Loodgieter Rotterdam",
  description:
    "Bekijk alle diensten van Insta Monteur: lekkage reparatie, ontstopping, CV ketel, warmtepomp, sanitair en verwarming. Snel en vakkundig in Rotterdam en omgeving.",
  alternates: {
    canonical: `${siteConfig.url}/diensten`,
  },
};

const services = [
  {
    title: "Lekkage",
    description: "Snelle opsporing en reparatie van waterlekkages. Van druppelende kraan tot ernstige waterschade.",
    href: "/diensten/lekkage",
    illustratie: "/images/dienst-lekkage-3d.png",
  },
  {
    title: "Ontstopping",
    description: "Verstopte afvoer, toilet of riool? Wij lossen het snel op met hogedruk of camera-inspectie.",
    href: "/diensten/ontstopping",
    illustratie: "/images/dienst-ontstopping-3d.png",
  },
  {
    title: "CV Ketel",
    description: "Installatie, onderhoud en reparatie van CV-ketels. Alle merken en types, vaste tarieven.",
    href: "/cv-ketels",
    illustratie: "/images/dienst-cvketel-3d.png",
  },
  {
    title: "Warmtepomp",
    description: "Duurzame warmtepomp laten installeren? Wij adviseren, installeren en onderhouden.",
    href: "/warmtepomp",
    illustratie: "/images/dienst-warmtepomp-3d.png",
  },
  {
    title: "Sanitair",
    description: "Montage en aansluiting van sanitaire voorzieningen. Van toilet tot complete doucheset.",
    href: "/diensten/sanitair",
    illustratie: "/images/dienst-sanitair-3d.png",
  },
  {
    title: "Verwarming",
    description: "Radiatoren, vloerverwarming en verwarmingssystemen. Installatie, reparatie en onderhoud.",
    href: "/diensten/verwarming",
    illustratie: "/images/dienst-verwarming-3d.png",
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-[120px] pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Rotterdam en omgeving · Ma–Za 08:00–17:00
              </span>
            </div>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h1
              className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              ONZE <span className="text-orange-500">DIENSTEN</span>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-foreground/50 text-base lg:text-lg max-w-xl leading-relaxed">
              Van lekkage tot verwarming — wij zijn uw specialist voor al uw loodgieter- en installatiewerk in Rotterdam en omgeving.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateIn key={service.title} variant="fadeUp" delay={i * 80}>
                <Link
                  href={service.href}
                  className="group flex flex-col border-2 border-border rounded-2xl overflow-hidden hover:border-brand transition-colors h-full"
                >
                  <div className="relative h-48 bg-[#f8f8f6] flex items-center justify-center overflow-hidden">
                    <Image
                      src={service.illustratie}
                      alt={`${service.title} illustratie`}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-black text-xl text-brand mb-2 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-foreground/50 leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 mt-5 text-sm font-bold text-brand group-hover:text-orange-500 transition-colors">
                      Meer informatie
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
