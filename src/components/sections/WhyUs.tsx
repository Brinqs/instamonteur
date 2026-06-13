import { Shield, Award, Clock, ThumbsUp, MapPin, Banknote } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Gecertificeerd & verzekerd",
    description: "Alle monteurs zijn gecertificeerd en ons werk is volledig verzekerd.",
  },
  {
    icon: Clock,
    title: "Snel ter plaatse",
    description: "In de meeste gevallen zijn wij binnen 2 uur bij u. Spoed = prioriteit.",
  },
  {
    icon: Banknote,
    title: "Vaste eerlijke prijs",
    description: "Geen verborgen kosten. U krijgt altijd vooraf een duidelijke offerte.",
  },
  {
    icon: Award,
    title: "15 jaar ervaring",
    description: "Meer dan 500 tevreden klanten en jarenlange vakkennis.",
  },
  {
    icon: MapPin,
    title: "Lokale specialist",
    description: "Wij kennen de regio en zijn altijd dichtbij voor service en nazorg.",
  },
  {
    icon: ThumbsUp,
    title: "Kwaliteitsgarantie",
    description: "Op al ons werk geven wij garantie. Niet goed? Wij lossen het op.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Waarom ons kiezen?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mt-2 mb-4">
            Dé installateur in uw regio
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wij onderscheiden ons door kwaliteit, snelheid en eerlijkheid. Dat is onze belofte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex gap-4 p-6 bg-white rounded-2xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-brand mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
