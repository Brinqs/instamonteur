import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Zap, Clock, ShieldCheck, Star } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Spoed Loodgieter | Snel ter Plaatse | Insta Monteur",
  description:
    "Spoed loodgieter nodig in Rotterdam en omgeving? Insta Monteur is snel ter plaatse voor lekkages, verstoppingen en wateroverlast. Bereikbaar op Ma t/m Za van 08:00 tot 17:00.",
  alternates: {
    canonical: `${siteConfig.url}/spoed-loodgieter`,
  },
};

const stats = [
  { value: "1 uur", label: "Responstijd" },
  { value: "Snel", label: "Ter plaatse" },
  { value: "9 steden", label: "Actief" },
  { value: "100%", label: "Gecertificeerd" },
];

const cards = [
  {
    icon: Zap,
    title: "Binnen 1 uur",
    description: "Wij zijn er snel bij in Rotterdam en omgeving",
  },
  {
    icon: Clock,
    title: "Snel ter plaatse",
    description: "Op werkdagen binnen 1 uur bij u in Rotterdam en omgeving",
  },
  {
    icon: ShieldCheck,
    title: "Gecertificeerde monteurs",
    description: "Vakkundig werk met garantie, altijd",
  },
  {
    icon: Star,
    title: "Vaste tarieven",
    description: "Geen verborgen kosten, ook niet bij spoed",
  },
];

const faqs = [
  {
    question: "Hoe snel zijn jullie ter plaatse bij een spoedgeval?",
    answer:
      "Bij een waterlekkage of andere urgente situatie zijn wij doorgaans binnen 1 uur bij u. Wij zijn actief in Rotterdam, Dordrecht, Delft, Schiedam en Vlaardingen en directe omgeving.",
  },
  {
    question: "Wanneer zijn jullie bereikbaar?",
    answer:
      "Insta Monteur is bereikbaar op Ma t/m Za van 08:00 tot 17:00. Bel ons voor een snelle afspraak of kom langs voor een vrijblijvend advies.",
  },
  {
    question: "Wat valt er onder spoedservice?",
    answer:
      "Spoedservice dekt alle acute problemen zoals lekkende leidingen, verstopte afvoeren, kapotte waterpompen, defecte warmwaterboilers, wateroverlast in huis en problemen met de cv-installatie die directe aandacht vereisen.",
  },
  {
    question: "Zijn de tarieven hoger bij spoed?",
    answer:
      "Wij hanteren transparante en vaste tarieven, ook bij spoedklussen. Vóór de werkzaamheden ontvangt u altijd een duidelijke prijsopgave zonder verborgen kosten.",
  },
  {
    question: "In welke steden zijn jullie actief?",
    answer:
      "Insta Monteur is actief in Rotterdam, Dordrecht, Delft, Schiedam en Vlaardingen en directe omgeving.",
  },
];

export default function SpoedLoodgieterPage() {
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
            SPOED
          </span>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <AnimateIn variant="fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Spoedservice · Binnen 1 uur ter plaatse
              </span>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={100}>
            <h1
              className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Spoed<br />loodgieter
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-8">
              Waterlekkage, verstopte afvoer of een andere acute loodgietersklus? Insta Monteur is
              snel ter plaatse en staat binnen 1 uur bij u in huis. Vakkundig en
              betrouwbaar in Rotterdam en omgeving.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2.5 bg-orange-500 text-white font-bold px-7 py-4 rounded-full hover:bg-orange-600 transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                Bel direct: {siteConfig.phone}
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
              {["Snel ter plaatse", "Binnen 1 uur ter plaatse", "Vaste tarieven ook bij spoed"].map((usp) => (
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
                  Waarom Insta Monteur?
                </span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2
                  className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Direct.<br />
                  Vakkundig.<br />
                  <span className="text-orange-500">Altijd.</span>
                </h2>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={200}>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Een waterlekkage of verstopte afvoer kan in korte tijd grote schade aanrichten.
                  Insta Monteur is de spoedloodgieter van Rotterdam: snel ter plaatse,
                  snel ter plaatse en altijd eerlijk over de kosten. Geen verrassingen achteraf.
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

      {/* Content: Wanneer spoed */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Wanneer bellen?
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Wanneer heeft u een<br />spoed loodgieter nodig?
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Sommige loodgietersproblemen kunnen niet wachten. Een lekkende waterleiding kan binnen
              enkele uren voor duizenden euro's aan waterschade zorgen. Ook een volledig verstopte
              riolering of een defecte boiler is een situatie die direct opgelost moet worden.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={240}>
            <ul className="text-muted-foreground leading-relaxed text-base max-w-3xl space-y-3 mb-5">
              {[
                "Lekkende waterleiding of buis",
                "Wateroverlast of overstroming in huis",
                "Verstopte afvoer of toilet",
                "Defecte warmwaterboiler of cv-ketel",
                "Kapotte watermeter of afsluiter",
                "Lekkage na een vorstperiode",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={300}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Twijfelt u of uw situatie spoed is? Bel ons gewoon. Wij beoordelen gratis de urgentie
              en geven u direct advies over de beste aanpak.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content: Werkgebied */}
      <section className="bg-[#f7f7f5] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Werkgebied
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Actief in<br />Rotterdam en omgeving
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Insta Monteur biedt spoedservice in Rotterdam, Dordrecht, Delft, Schiedam en Vlaardingen. Dankzij onze strategische ligging in de regio zijn wij doorgaans binnen 1 uur bij u.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={240}>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Rotterdam", "Dordrecht", "Delft", "Schiedam", "Vlaardingen"].map((stad) => (
                <Link
                  key={stad}
                  href={`/steden/${stad.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 rounded-full border border-border text-sm font-medium text-brand hover:border-orange-400 hover:text-orange-500 transition-colors"
                >
                  {stad}
                </Link>
              ))}
            </div>
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
                Spoed loodgieter<br />
                <span className="text-brand">nodig?</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={150}>
              <div className="flex flex-col gap-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Bel direct of vraag een vrijblijvende offerte aan. Wij zijn bereikbaar op Ma t/m Za van 08:00 tot 17:00 en staan snel bij u in Rotterdam en omgeving.
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
