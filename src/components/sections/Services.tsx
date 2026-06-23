import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

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

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 mb-12">
          <AnimateIn variant="fadeIn" className="pt-1">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Onze diensten
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              LOODGIETER NODIG?<br />WIJ ZIJN ER <span className="text-orange-500">SNEL.</span>
            </h2>
          </AnimateIn>
        </div>

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
                  <h3 className="font-black text-xl text-brand mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
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
  );
}
