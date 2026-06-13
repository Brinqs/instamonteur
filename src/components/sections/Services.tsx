import Link from "next/link";
import { ArrowRight, Flame, Zap, Droplets, Wind, Wrench, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Flame,
    title: "CV-ketel & verwarming",
    description:
      "Installatie, reparatie en onderhoud van CV-ketels en verwarmingssystemen. Alle merken en types.",
    href: "/diensten/cv-ketel",
    badge: "Populair",
  },
  {
    icon: Zap,
    title: "Elektra & bedrading",
    description:
      "Groepen, stopcontacten, verlichting en complete elektrische installaties door gecertificeerde elektriciens.",
    href: "/diensten/elektra",
    badge: null,
  },
  {
    icon: Droplets,
    title: "Loodgieterswerk",
    description:
      "Van lekkage reparatie tot het plaatsen van sanitair. Snel en netjes uitgevoerd.",
    href: "/diensten/loodgieterswerk",
    badge: null,
  },
  {
    icon: Wind,
    title: "Airconditioning",
    description:
      "Plaatsing en onderhoud van airconditioningssystemen voor woning en bedrijf.",
    href: "/diensten/airconditioning",
    badge: "Zomer deal",
  },
  {
    icon: Wrench,
    title: "Ventilatie (WTW)",
    description:
      "Installatie van mechanische ventilatie en warmteterugwinsystemen voor een gezond binnenklimaat.",
    href: "/diensten/ventilatie",
    badge: null,
  },
  {
    icon: Clock,
    title: "Spoedservice 24/7",
    description:
      "Storing of lekkage? Wij zijn dag en nacht bereikbaar voor spoedklussen. U bent nooit in de kou.",
    href: "/diensten/spoed",
    badge: "24/7",
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Wat wij doen
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mt-2 mb-4">
            Onze diensten
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wij zijn uw totaaloplossing voor alle installaties in huis of bedrijf.
            Vakkundig, snel en met garantie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group border-border hover:border-orange-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
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
                  <h3 className="font-bold text-lg text-brand mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
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
  );
}
