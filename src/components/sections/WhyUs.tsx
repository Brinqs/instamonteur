import { Banknote, Award, MessageSquare, Clock, MapPin, Shield } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { AnimateIn } from "@/components/AnimateIn";

const stats = [
  { value: "20 min", label: "Gemiddelde responstijd" },
  { value: "24/7", label: "Ma t/m Zo bereikbaar" },
  { value: "500+", label: "Tevreden klanten" },
  { value: "100%", label: "Vakkundig gecertificeerd" },
];

const reasons = [
  { icon: Banknote, title: "Vaste tarieven", description: "Geen verborgen kosten. U weet van tevoren precies wat u betaalt." },
  { icon: Award, title: "Vakkundig & professioneel", description: "Alle monteurs zijn gecertificeerd en werken volgens de hoogste standaarden." },
  { icon: MessageSquare, title: "Heldere afspraken", description: "Eerlijke communicatie. Wat wij afspreken, dat doen wij ook." },
  { icon: Clock, title: "Binnen 20 minuten", description: "Bij spoed zijn wij razendsnel bij u. Dag en nacht beschikbaar." },
  { icon: MapPin, title: "Heel Zuid-Holland", description: "Rotterdam, Den Haag, Leiden, Gouda, Dordrecht, Delft, Schiedam en omgeving." },
  { icon: Shield, title: "Kwaliteitsgarantie", description: "Op al ons werk geven wij garantie. Niet tevreden? Wij lossen het op." },
];

export function WhyUs() {
  return (
    <>
      {/* Stats bar */}
      <section className="bg-brand py-14 relative overflow-hidden">
        {/* Mobile: INSTA linksboven */}
        <span
          className="lg:hidden absolute top-2 -left-1 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 24vw, 8rem)", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.04)" }}
        >
          INSTA
        </span>
        {/* Mobile: MONTEUR rechtsonder */}
        <span
          className="lg:hidden absolute bottom-2 -right-8 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 24vw, 8rem)", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.04)" }}
        >
          MONTEUR
        </span>
        {/* Desktop: originele layout */}
        <div
          className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none items-end gap-96"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)", letterSpacing: "-0.04em", color: "rgba(180,190,210,0.05)" }}
        >
          <span className="-translate-y-14">INSTA</span>
          <span className="translate-y-14">MONTEUR</span>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} variant="fadeUp" delay={i * 100} className="text-center">
                <div className="font-black text-white tracking-tight mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why us section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div className="flex flex-col justify-between">
              <div>
                <AnimateIn variant="fadeIn">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                    Waarom Insta Monteur?
                  </span>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={100}>
                  <h2
                    className="font-black text-brand mt-4 mb-8 leading-[0.9] tracking-tight"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                  >
                    Vakkundig.<br />
                    Snel.<br />
                    <span className="text-orange-500">Betrouwbaar.</span>
                  </h2>
                </AnimateIn>
                <AnimateIn variant="fadeUp" delay={200}>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                    In geheel Zuid-Holland staan wij klaar voor u. Van een kleine reparatie
                    tot een complete installatie, wij leveren kwaliteit met garantie.
                  </p>
                </AnimateIn>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-10 inline-flex items-center gap-2 text-brand font-bold text-lg group"
              >
                <span className="underline underline-offset-4 group-hover:text-orange-500 transition-colors">
                  Bel direct: {siteConfig.phone}
                </span>
                <span className="text-orange-500 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <AnimateIn key={r.title} variant="fadeUp" delay={i * 80}>
                  <div
                    className="p-5 border border-border rounded-2xl hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                      <Icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-brand text-sm mb-1">{r.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.description}</p>
                  </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
