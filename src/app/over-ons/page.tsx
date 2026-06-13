import type { Metadata } from "next";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Leer meer over InstaMonteur – uw betrouwbare installatiebedrijf met meer dan 15 jaar ervaring in de regio.",
  alternates: {
    canonical: `${siteConfig.url}/over-ons`,
  },
};

const values = [
  {
    icon: Award,
    title: "Vakmanschap",
    description: "Wij investeren continu in de opleiding van onze monteurs.",
  },
  {
    icon: Users,
    title: "Klantgericht",
    description: "Uw tevredenheid staat centraal. Wij luisteren naar uw wensen.",
  },
  {
    icon: Clock,
    title: "Betrouwbaar",
    description: "We zijn er wanneer we zeggen er te zijn. Altijd op tijd.",
  },
  {
    icon: CheckCircle,
    title: "Transparant",
    description: "Eerlijke prijzen, geen verborgen kosten. Altijd een duidelijke offerte.",
  },
];

const team = [
  { name: "Jan Pieters", role: "Eigenaar & Hoofd Installateur", initials: "JP" },
  { name: "Kevin Smit", role: "CV-ketel Specialist", initials: "KS" },
  { name: "Ahmed El Amrani", role: "Elektricien", initials: "AE" },
  { name: "Thomas van Dijk", role: "Loodgieter", initials: "TV" },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Over ons</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Meer dan 15 jaar lang uw betrouwbare partner voor alle installaties.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Ons verhaal
              </span>
              <h2 className="text-3xl font-black text-brand mt-2 mb-5">
                Begonnen als eenmanszaak, uitgegroeid tot dé installateur in de regio
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                InstaMonteur is in 2009 opgericht door Jan Pieters met een eenvoudig doel: eerlijk,
                vakkundig en snel installatiework leveren voor particulieren en bedrijven.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inmiddels bestaat ons team uit meer dan 8 gecertificeerde monteurs en hebben wij
                meer dan 500 tevreden klanten geholpen. Van een simpele reparatie tot complete
                renovatieprojecten — wij zijn er voor u.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wij werken uitsluitend met gecertificeerde materialen en houden ons aan alle
                geldende normen en regelgeving. U kunt altijd rekenen op kwaliteit met garantie.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2009", label: "Opgericht" },
                { value: "500+", label: "Projecten" },
                { value: "8", label: "Monteurs" },
                { value: "4.9★", label: "Gemiddeld" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-black text-brand mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-brand">Onze kernwaarden</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 text-center border border-border">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-brand mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand mb-3">Ons team</h2>
            <p className="text-muted-foreground">Ervaren professionals klaar voor u</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl">
                  {member.initials}
                </div>
                <div className="font-semibold text-foreground text-sm">{member.name}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
