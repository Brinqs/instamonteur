import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Flame, Wrench, ShieldCheck, Star } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "CV-ketel Installatie & Onderhoud | Insta Monteur",
  description:
    "Insta Monteur is uw specialist voor CV-ketel installatie, onderhoud en reparatie in Rotterdam en omgeving. Professioneel, snel en met vaste tarieven.",
  alternates: {
    canonical: `${siteConfig.url}/cv-ketels`,
  },
};

const stats = [
  { value: "1 dag", label: "Installatie tijd" },
  { value: "Snel", label: "Ter plaatse" },
  { value: "500+", label: "Klanten" },
  { value: "100%", label: "Gecertificeerd" },
];

const cards = [
  {
    icon: Flame,
    title: "Vakkundig & Professioneel",
    description: "Gecertificeerde monteurs met ruime ervaring",
  },
  {
    icon: Wrench,
    title: "Vaste tarieven",
    description: "Geen verborgen kosten, altijd transparant",
  },
  {
    icon: ShieldCheck,
    title: "Kwaliteitsgarantie",
    description: "Garantie op al ons werk, altijd",
  },
  {
    icon: Star,
    title: "Deskundig advies",
    description: "Gratis & vrijblijvend advies op maat",
  },
];

const faqs = [
  {
    question: "Waarom is regelmatig onderhoud van mijn cv-ketel belangrijk?",
    answer:
      "Regelmatig onderhoud van uw cv-ketel is belangrijk om ervoor te zorgen dat deze veilig en efficiënt blijft werken. Onderhoud kan problemen opsporen voordat ze groter worden en dure reparaties vereisen, en het kan ook de levensduur van de ketel verlengen.",
  },
  {
    question: "Hoe vaak moet mijn cv-ketel worden onderhouden?",
    answer:
      "Het wordt aanbevolen om uw cv-ketel minstens één keer per jaar te laten onderhouden door een professionele loodgieter. Dit kan helpen om problemen vroegtijdig op te sporen en de efficiëntie van de ketel te verbeteren.",
  },
  {
    question: "In welke regio zijn jullie actief?",
    answer:
      "Insta Monteur is actief in Rotterdam en directe omgeving: Dordrecht, Delft, Schiedam en Vlaardingen.",
  },
  {
    question: "Wat zijn enkele veelvoorkomende problemen bij een cv-ketel?",
    answer:
      "Enkele veelvoorkomende problemen die kunnen optreden bij een cv-ketel zijn onder meer lekkages, problemen met de druk, storingen in de thermostaat en problemen met de warmtewisselaar. Het is belangrijk om deze problemen snel aan te pakken om verdere schade en mogelijke veiligheidsrisico's te voorkomen.",
  },
];

export default function CvKetelsPage() {
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
            CV-KETEL
          </span>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <AnimateIn variant="fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Rotterdam en omgeving · Ma–Za 08:00–17:00
              </span>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={100}>
            <h1
              className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              CV-ketel
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-8">
              Als u op zoek bent naar een ervaren loodgieter voor het plaatsen van een nieuwe
              CV-ketel of uitbreiding van uw CV-installatie, dan bent u bij Insta Monteur aan het
              juiste adres. Actief in regio Rotterdam.
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
                  Waarom Insta Monteur?
                </span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2
                  className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Vakkundig.<br />
                  Snel.<br />
                  <span className="text-orange-500">Betrouwbaar.</span>
                </h2>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={200}>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Het comfort in uw huis wordt voor een groot deel bepaald door de temperatuur.
                  Insta Monteur adviseert u graag professioneel over welke cv-ketel en installatie
                  het beste past bij uw wensen en budget. Er zijn verschillende opties beschikbaar,
                  zoals HR-ketels, combiketels of een combinatie met een boiler.
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

      {/* Content: CV Installatie */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Dienst
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              CV Installatie
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Indien u een nieuwe installatie wenst, komt ons team bij u thuis om de situatie te
              bekijken en u te adviseren over de beste keuze, rekening houdend met uw budget en
              voorkeuren.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={240}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Een professionele installatie van uw CV-ketel is van groot belang voor de optimale
              werking en lange levensduur van het apparaat. Door te kiezen voor een vakkundige
              installateur, bent u verzekerd van garantie bij eventuele gebreken en kunt u genieten
              van een betrouwbare en nette installatie.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={300}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Dankzij onze actuele productkennis en ruime ervaring kunnen wij in de meeste gevallen
              uw nieuwe verwarmingsketel binnen één dag in bedrijf nemen. Zo kunt u snel weer
              genieten van een warme douche en aangename temperatuur in uw huis.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content: Onderhoud & Reparatie */}
      <section className="bg-[#f7f7f5] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Dienst
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Onderhoud &amp; Reparatie
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Een CV-ketel is een belangrijk onderdeel van het verwarmingssysteem van uw huis en het
              is essentieel om deze regelmatig te onderhouden en eventuele reparaties snel uit te
              voeren om ervoor te zorgen dat het systeem veilig en efficiënt blijft werken.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={240}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mb-5">
              Onderhoud van een CV-ketel omvat onder andere het reinigen van de ketel, het
              controleren van de werking en het vervangen van filters.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={300}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Reparaties kunnen variëren van kleine problemen zoals een lekkende klep tot grotere
              problemen zoals een defecte warmtewisselaar.
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
                CV-ketel monteur<br />
                <span className="text-brand">nodig?</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={150}>
              <div className="flex flex-col gap-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Neem direct contact op of vraag een vrijblijvende offerte aan. Wij zijn Ma t/m Zo
                  bereikbaar op Ma t/m Za van 08:00 tot 17:00.
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
