import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Martijn de Vries",
    location: "Amsterdam",
    rating: 5,
    text: "CV-ketel kapot op vrijdagavond, InstaMonteur was de volgende ochtend al aanwezig. Snel, netjes en een eerlijke prijs. Absoluut aanrader!",
  },
  {
    name: "Sandra Bakker",
    location: "Amstelveen",
    rating: 5,
    text: "Geweldig bedrijf! Ze hebben onze complete badkamer opnieuw aangesloten. Vriendelijk, professioneel en het werk is perfect afgeleverd.",
  },
  {
    name: "Rob Janssen",
    location: "Haarlem",
    rating: 5,
    text: "Lekkage in het weekend? Geen probleem voor InstaMonteur. Binnen een uur waren ze er. Super service!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Klantreviews
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mt-2 mb-4">
            Wat onze klanten zeggen
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Stars count={5} />
            <span className="font-semibold text-foreground">4.9</span>
            <span>gemiddelde beoordeling · 120+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Stars count={t.rating} />
                <p className="text-foreground/80 text-sm leading-relaxed mt-4 mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
