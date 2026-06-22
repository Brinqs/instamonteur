import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Leaf, Thermometer, Droplets, ShieldCheck } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Warmtepomp Installatie & Onderhoud | Insta Monteur",
  description:
    "Insta Monteur is uw specialist voor warmtepomp installatie en onderhoud in Rotterdam en omgeving. Duurzaam, professioneel en met vaste tarieven.",
  alternates: {
    canonical: `${siteConfig.url}/warmtepomp`,
  },
};

const stats = [
  { value: "A+++", label: "Energielabel" },
  { value: "Snel", label: "Ter plaatse" },
  { value: "500+", label: "Klanten" },
  { value: "30%", label: "Energiebesparing" },
];

const cards = [
  {
    icon: Leaf,
    title: "Duurzaam alternatief",
    description: "Gebruik van hernieuwbare energiebronnen",
  },
  {
    icon: Thermometer,
    title: "Lagere energiekosten",
    description: "Bespaar op je energierekening",
  },
  {
    icon: Droplets,
    title: "Hybride systeem",
    description: "Werkt samen met uw bestaande cv-ketel",
  },
  {
    icon: ShieldCheck,
    title: "Professionele installatie",
    description: "Gecertificeerde monteurs, garantie op werk",
  },
];

const faqs = [
  {
    question: "Wat zijn de voordelen van een warmtepomp?",
    answer:
      "Een warmtepomp is een duurzaam alternatief voor traditionele verwarmingssystemen, omdat het gebruik maakt van hernieuwbare energiebronnen. Het kan bijdragen aan lagere energierekeningen en minder CO2-uitstoot.",
  },
  {
    question: "Kan ik mijn bestaande verwarmingssysteem vervangen door een warmtepomp?",
    answer:
      "Ja, het is mogelijk om een bestaand verwarmingssysteem te vervangen door een warmtepomp, maar dit is afhankelijk van uw specifieke situatie. Het is verstandig om een professionele adviseur te raadplegen om te bepalen of een warmtepomp geschikt is voor uw woning en welk type het beste past bij uw behoeften.",
  },
  {
    question: "Is een warmtepomp geschikt voor mijn woning?",
    answer:
      "Of een warmtepomp geschikt is voor uw woning, hangt af van verschillende factoren, zoals de grootte en isolatie van uw woning, het beschikbare budget en uw persoonlijke voorkeuren. Insta Monteur kan u helpen om te bepalen welk systeem het beste past bij uw situatie.",
  },
  {
    question: "Hoe onderhoud ik mijn warmtepomp?",
    answer:
      "Een warmtepomp vereist weinig onderhoud, maar het is belangrijk om regelmatig het filter schoon te maken en de werking van het systeem te laten controleren door een professionele onderhoudsmonteur. Dit kan de levensduur van de warmtepomp verlengen en de efficiëntie van het systeem behouden.",
  },
];

export default function WarmtepompPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-[120px] pb-16 lg:pb-24 relative overflow-x-clip">
        <div
          className="absolute inset-y-0 right-0 flex items-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-black leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(8rem, 20vw, 18rem)", letterSpacing: "-0.04em", color: "rgba(15,40,120,0.04)" }}
          >
            WARMTEPOMP
          </span>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <AnimateIn variant="fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Rotterdam en omgeving · Ma–Vr 08:00–17:00
              </span>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={100}>
            <h1
              className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Warmtepomp
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-8">
              Wanneer u op zoek bent naar een duurzaam verwarmingssysteem, kunt u denken aan een
              warmtepomp. Insta Monteur voorziet u van een vrijblijvende offerte voor installatie
              van een warmtepomp op basis van duurzame energiebronnen.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2.5 bg-brand text-white font-bold px-7 py-4 rounded-full hover:bg-orange-500 transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand text-brand font-bold px-7 py-4 rounded-full hover:bg-brand hover:text-white transition-colors text-base"
              >
                Offerte aanvragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={380}>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 pt-8 border-t border-border">
              {["Binnen 1 uur ter plaatse", "Vaste tarieven", "Eerlijk en transparant"].map((usp) => (
                <span key={usp} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {usp}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats balk */}
      <section className="bg-brand py-12 relative overflow-hidden">
        <span
          className="lg:hidden absolute top-2 -left-1 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 24vw, 8rem)", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.04)" }}
        >
          INSTA
        </span>
        <span
          className="lg:hidden absolute bottom-2 -right-8 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 24vw, 8rem)", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.04)" }}
        >
          MONTEUR
        </span>
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
                <div
                  className="font-black text-white mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}
                >
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

      {/* Intro + icon cards */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <AnimateIn variant="fadeIn">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                  Duurzame verwarming
                </span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2
                  className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Duurzaam.<br />
                  Efficiënt.<br />
                  <span className="text-orange-500">Toekomstproof.</span>
                </h2>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={200}>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Wij zijn een installatiebedrijf in Rotterdam en omgeving dat zich actief richt op
                  duurzame ontwikkelingen binnen ons vakgebied. Als allround installatiebedrijf
                  willen wij bijdragen aan het verduurzamen van huizen en bedrijven door het
                  aanbieden van warmtepompen en andere duurzame oplossingen. Onze installateurs zijn
                  werkzaam in Rotterdam en directe omgeving: Dordrecht, Delft, Schiedam en Vlaardingen.
                </p>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={280}>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-8 inline-flex items-center gap-2 text-brand font-bold text-lg group"
                >
                  <span className="underline underline-offset-4 group-hover:text-orange-500 transition-colors">
                    Bel direct: {siteConfig.phone}
                  </span>
                  <span className="text-orange-500 text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </AnimateIn>
            </div>

            {/* Right: icon cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <AnimateIn key={card.title} variant="fadeUp" delay={i * 80}>
                    <div className="p-5 border border-border rounded-2xl hover:border-orange-200 hover:bg-orange-50/40 transition-all group h-full">
                      <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                        <Icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-brand text-sm mb-1">{card.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{card.description}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content: Werking warmtepomp */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Hoe werkt het?
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Werking warmtepomp
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Een warmtepomp werkt volgens het principe van warmteoverdracht. Het haalt warmte uit de
              omgeving en gebruikt dit om uw huis te verwarmen of om water op te warmen voor
              bijvoorbeeld sanitair gebruik. Het is mogelijk om warmte uit verschillende bronnen te
              halen, zoals de buitenlucht, de bodem of grondwater.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content: Soorten warmtepompen */}
      <section className="bg-[#f7f7f5] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Overzicht
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Welke soorten warmtepompen zijn er?
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Op de markt zijn diverse warmtepompsystemen beschikbaar. Een aarde/water warmtepomp
              haalt de benodigde warmte uit de aarde, terwijl een water/water systeem dit uit
              grondwater haalt. Een lucht/water warmtepomp maakt gebruik van de buitenlucht om de
              woning te verwarmen.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={240}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Het juiste type voor u hangt af van verschillende factoren, zoals uw budget, het
              beoogde gebruik en de beschikbare ruimte. Het is verstandig om een professionele
              adviseur te raadplegen om te bepalen welk systeem het beste bij uw situatie past.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f7f5] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
            {/* Left label */}
            <div>
              <AnimateIn variant="fadeIn">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                  Veelgestelde vragen
                </span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2
                  className="font-black text-brand mt-4 leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  Heeft u een vraag?
                </h2>
              </AnimateIn>
            </div>
            {/* Right: questions */}
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <AnimateIn key={faq.question} variant="fadeUp" delay={i * 80}>
                  <div className="border border-border rounded-2xl p-6">
                    <h3 className="font-bold text-brand mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20 overflow-hidden relative">
        <div
          className="absolute right-4 top-1/4 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-black text-orange-400/30 whitespace-nowrap leading-none"
            style={{ fontSize: "clamp(14rem, 40vw, 32rem)", letterSpacing: "-0.05em" }}
          >
            SNEL
          </span>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimateIn variant="fadeLeft">
              <h2
                className="font-black text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Warmtepomp<br />
                installateur<br />
                <span className="text-brand">nodig?</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={150}>
              <div className="flex flex-col gap-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Neem direct contact op of vraag een vrijblijvende offerte aan. Wij zijn Ma t/m Zo
                  bereikbaar op werkdagen van 08:00 tot 17:00.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2.5 bg-brand text-white font-bold px-7 py-4 rounded-full hover:bg-brand/90 transition-colors text-base"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-brand font-bold px-7 py-4 rounded-full hover:bg-white/90 transition-colors text-base"
                  >
                    Offerte aanvragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
