import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Wrench, Droplets, Waves, ShieldCheck } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Loodgieter Regio Zuid-Holland | Insta Monteur",
  description:
    "Insta Monteur is uw betrouwbare loodgieter in Zuid-Holland. Spoed, lekkage, leidingen en meer. Ma t/m Zo 24/7 bereikbaar.",
  alternates: {
    canonical: `${siteConfig.url}/loodgieter`,
  },
};

const stats = [
  { value: "20 min", label: "Reactietijd" },
  { value: "24/7", label: "Bereikbaar" },
  { value: "500+", label: "Klanten" },
  { value: "100%", label: "Gecertificeerd" },
];

const cards = [
  {
    icon: Wrench,
    title: "Leidingen aanleggen",
    description: "Netjes, lekvrij en veilig aangelegd",
  },
  {
    icon: Droplets,
    title: "Lekkage verhelpen",
    description: "Snel opsporen en adequaat oplossen",
  },
  {
    icon: Waves,
    title: "Afvoer ontstoppen",
    description: "Hogedruk en camera-inspectie",
  },
  {
    icon: ShieldCheck,
    title: "Spoed service",
    description: "Binnen 20 minuten ter plaatse",
  },
];

const faqs = [
  {
    question: "Waarom zou ik een loodgieter moeten inhuren?",
    answer:
      "Het inhuren van een loodgieter is belangrijk voor verschillende redenen. Loodgieters zijn opgeleid om problemen met water-, gas- en afvoersystemen op te lossen en hebben de nodige kennis en vaardigheden om het werk veilig en efficiënt uit te voeren. Bovendien kunnen kleine problemen met deze systemen snel escaleren tot grotere en duurdere problemen als ze niet snel worden opgelost.",
  },
  {
    question: "Kan ik zelf loodgieterswerk doen?",
    answer:
      "Hoewel er kleine klussen zijn die u zelf kunt uitvoeren, zoals het ontstoppen van een afvoer of het vervangen van een kraan, is het over het algemeen niet aan te raden om zelf ingewikkelder loodgieterswerk uit te voeren.",
  },
  {
    question: "In welke regio zijn jullie actief?",
    answer:
      "Insta Monteur is actief in geheel Zuid-Holland en de grote steden Rotterdam, Den Haag, Leiden, Gouda & Zoetermeer.",
  },
  {
    question: "Wat moet ik doen bij een lekkage?",
    answer:
      "Als je te maken hebt met een waterlek, is het belangrijk om zo snel mogelijk de schade te beperken. Draai de hoofdkraan dicht om verdere schade te voorkomen en probeer met emmers en handdoeken het water op te vangen. Probeer daarnaast de oorzaak van het lek te achterhalen. Voor het verhelpen van het lek is het raadzaam om een ervaren loodgieter in te schakelen.",
  },
];

export default function LoodgieterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-[180px] pb-16 lg:pb-24 relative overflow-x-clip">
        <div
          className="absolute inset-y-0 right-0 flex items-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-black leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(8rem, 20vw, 18rem)", letterSpacing: "-0.04em", color: "rgba(15,40,120,0.04)" }}
          >
            LOODGIETER
          </span>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <AnimateIn variant="fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Regio Zuid-Holland · Ma–Zo 24/7
              </span>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={100}>
            <h1
              className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Loodgieter
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-8">
              Als je op zoek bent naar een betrouwbare en ervaren loodgieter in Zuid-Holland, dan kun
              je terecht bij Insta Monteur. Snelle, kwalitatieve en langdurige oplossingen voor al uw
              sanitaire installaties, lekkages en afvoerproblemen.
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
              {["Binnen 20 minuten ter plaatse", "Vaste tarieven", "Eerlijk en transparant"].map((usp) => (
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
                  Onze loodgietersdiensten
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
                  Wij zijn een gerenommeerd bedrijf in Zuid-Holland en ons werkgebied strekt zich
                  uit tot Rotterdam, Den Haag, Leiden, Gouda &amp; Zoetermeer. Van een kleine
                  reparatie tot een complete installatie, wij leveren kwaliteit met garantie.
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

      {/* Content: Leidingen aanleggen */}
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
              Leidingen aanleggen
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Als loodgieter is het aanleggen van water- en gasleidingen een belangrijk specialisme.
              Het is van groot belang dat dit werk zorgvuldig en veilig gebeurt. Bij Insta Monteurs
              kun je erop vertrouwen dat de leidingen netjes, lekvrij en bovenal veilig worden
              aangelegd. Ook het verleggen en repareren van leidingen behoort tot onze expertise.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content: Lekkage verhelpen */}
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
              Lekkage verhelpen
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Als je last hebt van lekkages, is het zaak om snel te handelen om schade te voorkomen.
              Bij Insta Monteurs kun je terecht voor het opsporen en verhelpen van allerlei soorten
              lekkages. Onze ervaren loodgieters zijn in staat om het probleem snel te lokaliseren en
              adequaat op te lossen. Of het nu gaat om lekkages in water- of gasleidingen, daken of
              andere delen van het huis, wij staan voor je klaar.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content: Ontstoppen */}
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
              Ontstoppen afvoer en riool
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={180}>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Een verstopte afvoer of riool kan voor veel overlast zorgen en dient daarom snel
              verholpen te worden. Bij Insta Monteur hebben we de expertise en apparatuur om afvoeren
              en riolen vakkundig te ontstoppen. Onze loodgieters zijn in staat om diverse
              ontstoppingswerkzaamheden uit te voeren, zoals het reinigen van de afvoer of het riool
              met hogedrukreinigingstechnieken. Ook kunnen we bij hardnekkige verstoppingen gebruik
              maken van camera-inspectie om de oorzaak van het probleem te achterhalen.
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
            24/7
          </span>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimateIn variant="fadeLeft">
              <h2
                className="font-black text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Loodgieter<br />
                <span className="text-brand">nodig?</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={150}>
              <div className="flex flex-col gap-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Indien je met spoed een loodgieter nodig hebt, zal een ervaren spoed loodgieter
                  binnen 20 minuten op locatie zijn om het probleem vakkundig op te lossen. Wij zijn
                  Ma t/m Zo 24/7 bereikbaar.
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
