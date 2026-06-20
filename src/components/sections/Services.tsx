import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const services = [
  {
    title: "Spoed loodgieter",
    description: "Directe service bij storingen en lekkages. Snel ter plaatse op werkdagen.",
    href: "/contact",
  },
  {
    title: "Lekkage repareren",
    description: "Detectie en snelle reparatie van waterlekkages, van druppelende kraan tot ernstige schade.",
    href: "/contact",
  },
  {
    title: "Warmtepomp installatie",
    description: "Installatie en onderhoud van warmtepompen. Duurzaam verwarmen met een gecertificeerde installateur.",
    href: "/contact",
  },
  {
    title: "Installateur sanitair",
    description: "Montage en aansluiting van alle sanitaire voorzieningen. Van toilet tot doucheset.",
    href: "/contact",
  },
  {
    title: "CV-ketel installateur",
    description: "Montage, onderhoud en reparatie van CV-ketels. Alle merken en types.",
    href: "/contact",
  },
];

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 mb-4">
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
              INSTALLATEUR NODIG?<br />WIJ ZIJN ER <span className="text-orange-500">SNEL.</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-0" />

        {/* Service list */}
        <div>
          {services.map((service, i) => (
            <AnimateIn key={service.title} variant="fadeUp" delay={i * 80}>
            <Link
              href={service.href}
              className="group grid lg:grid-cols-[220px_1fr_auto] gap-4 lg:gap-8 py-7 border-b border-border hover:bg-orange-50/50 -mx-6 px-6 transition-colors items-center"
            >
              <span className="font-black text-5xl text-border group-hover:text-orange-200 transition-colors leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-black text-xl lg:text-2xl text-brand group-hover:text-orange-500 transition-colors mb-1 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-border group-hover:border-orange-500 group-hover:bg-orange-500 flex items-center justify-center transition-all shrink-0">
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </div>
            </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
