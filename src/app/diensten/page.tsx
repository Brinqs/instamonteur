import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame, Zap, Droplets, Wind, Wrench, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Onze Diensten",
  description:
    "Bekijk alle installatiedienstens van InstaMonteur: CV-ketel, elektra, loodgieterswerk, airconditioning, ventilatie en 24/7 spoedservice.",
  alternates: {
    canonical: `${siteConfig.url}/diensten`,
  },
};

const services = [
  {
    icon: Droplets,
    title: "Loodgieter",
    description:
      "Van een druppelende kraan tot het volledig aanleggen van een badkamer. Wij lossen al uw sanitaire problemen snel op.",
    features: ["Lekkage reparatie", "Sanitair plaatsen", "Leidingen aanleggen", "Rioolontstopping"],
    href: "/loodgieter",
    badge: "Populair",
  },
  {
    icon: Flame,
    title: "CV-ketel & verwarming",
    description:
      "Installatie, onderhoud en reparatie van CV-ketels. Wij werken met alle merken: Remeha, Intergas, Nefit, Vaillant en meer.",
    features: ["Installatie nieuwe ketel", "Storing diagnose & reparatie", "Jaarlijks onderhoud", "Ketel vervangen"],
    href: "/cv-ketels",
    badge: null,
  },
  {
    icon: Wrench,
    title: "Warmtepomp",
    description:
      "Duurzaam verwarmen met een warmtepomp. Wij installeren lucht/water en hybride warmtepompen in geheel Zuid-Holland.",
    features: ["Lucht/water warmtepomp", "Hybride systemen", "Periodiek onderhoud", "Gratis advies"],
    href: "/warmtepomp",
    badge: null,
  },
  {
    icon: Clock,
    title: "Spoed loodgieter 24/7",
    description:
      "Lekkage of storing? Dag en nacht bereikbaar. Onze spoedmonteurs zijn binnen 20 minuten bij u in Zuid-Holland.",
    features: ["Dag & nacht bereikbaar", "Binnen 20 min ter plaatse", "Weekenden & feestdagen", "Vaste tarieven"],
    href: "/spoed-loodgieter",
    badge: "24/7",
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Onze diensten</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Van CV-ketel tot elektra — wij zijn uw totaaloplossing voor alle installaties.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group border-border hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/8 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6 text-brand group-hover:text-orange-500 transition-colors" />
                      </div>
                      {service.badge && (
                        <Badge className="bg-orange-100 text-orange-600 border-orange-200 text-xs">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <h2 className="font-bold text-xl text-brand mb-2">{service.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors"
                    >
                      Meer informatie
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
