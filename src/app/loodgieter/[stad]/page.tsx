import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, Wrench, Droplets, Waves, ShieldCheck, Star, CheckCircle } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

type CityData = {
  name: string;
  intro: string;
  about: string;
  werkgebied: string;
};

const cities: Record<string, CityData> = {
  rotterdam: {
    name: "Rotterdam",
    intro:
      "Als u op zoek bent naar een betrouwbare loodgieter in Rotterdam, dan bent u bij Insta Monteur aan het juiste adres. Onze deskundige loodgieters in Rotterdam hebben jarenlange ervaring en zijn uitgerust met de nieuwste technologieën.",
    about:
      "Bij Insta Monteur in Rotterdam bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Van lekkages opsporen en verhelpen tot het ontstoppen van afvoeren, het plaatsen van sanitair en het aanleggen van leidingen — wij staan voor u klaar.",
    werkgebied:
      "Wij zijn actief in Rotterdam en omstreken, waaronder Barendrecht, Spijkenisse, Schiedam, Capelle aan den IJssel, Ridderkerk en regio Rotterdam.",
  },
  dordrecht: {
    name: "Dordrecht",
    intro:
      "Op zoek naar een betrouwbare loodgieter in Dordrecht? Bij Insta Monteur bent u aan het juiste adres. Onze ervaren loodgieters in Dordrecht zijn snel bij u voor zowel spoed als reguliere klussen.",
    about:
      "Bij Insta Monteur in Dordrecht bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Van lekkages opsporen en verhelpen tot het ontstoppen van afvoeren en het aanleggen van leidingen — wij leveren kwaliteit met garantie.",
    werkgebied:
      "Wij zijn actief in Dordrecht en omstreken, waaronder Papendrecht, Zwijndrecht, Sliedrecht en regio Rotterdam.",
  },
  vlaardingen: {
    name: "Vlaardingen",
    intro:
      "Zoekt u een betrouwbare loodgieter in Vlaardingen? Insta Monteur staat snel voor u klaar. Onze vakkundige loodgieters in Vlaardingen lossen elk sanitair probleem snel en professioneel op.",
    about:
      "Bij Insta Monteur in Vlaardingen bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Of het nu gaat om een lekkage, een verstopte afvoer of nieuw sanitair — wij zorgen voor een snelle en nette oplossing.",
    werkgebied:
      "Wij zijn actief in Vlaardingen en omstreken, waaronder Schiedam, Maassluis, Hoek van Holland en regio Rotterdam.",
  },
  delft: {
    name: "Delft",
    intro:
      "Bent u op zoek naar een betrouwbare loodgieter in Delft? Insta Monteur is uw partner voor alle loodgieterswerk in Delft. Wij zijn snel ter plaatse en werken altijd met vaste, transparante tarieven.",
    about:
      "Bij Insta Monteur in Delft bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Van spoedklussen tot geplande installaties, onze monteurs in Delft werken netjes, vakkundig en klantgericht.",
    werkgebied:
      "Wij zijn actief in Delft en omstreken, waaronder Rotterdam, Schiedam, Pijnacker-Nootdorp en directe regio.",
  },
  schiedam: {
    name: "Schiedam",
    intro:
      "Op zoek naar een loodgieter in Schiedam? Insta Monteur is uw betrouwbare partner voor alle loodgieterswerk in Schiedam. Wij zijn snel ter plaatse en werken altijd transparant met vaste tarieven.",
    about:
      "Bij Insta Monteur in Schiedam bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Of het nu gaat om een lekkage, verstopte afvoer of nieuw sanitair — wij lossen het vakkundig op.",
    werkgebied:
      "Wij zijn actief in Schiedam en omstreken, waaronder Rotterdam, Vlaardingen, Maassluis en regio Rotterdam.",
  },
};

const stats = [
  { value: "1 uur", label: "Reactietijd" },
  { value: "Snel", label: "Ter plaatse" },
  { value: "500+", label: "Klanten" },
  { value: "100%", label: "Gecertificeerd" },
];

const usps = [
  { title: "Vakkundig & Professioneel", desc: "Gecertificeerde monteurs met jarenlange ervaring" },
  { title: "Duidelijke & Heldere Afspraken", desc: "Wij communiceren helder over planning en kosten" },
  { title: "Vaste Tarieven", desc: "Geen verborgen kosten, altijd transparant" },
  { title: "Werkzaam in Rotterdam en omgeving", desc: "Snel ter plaatse in de hele regio" },
  { title: "Deskundig Advies", desc: "Eerlijk advies op maat, gratis en vrijblijvend" },
  { title: "Gratis Offerte", desc: "Vrijblijvende offerte binnen 24 uur" },
];

const reviews = [
  { name: "Dirk", text: "Erg goed werk geleverd met het plaatsen van een nieuwe CV-ketel. Medewerkers waren klantgericht en hebben mee gedacht." },
  { name: "Kimberly", text: "Een afspraak maken kan lastig ivm drukte, maar echt een topper, vriendelijk en professioneel." },
  { name: "Ruben", text: "Medewerkers zijn aardig en vakkundig. Zeker aan te bevelen." },
  { name: "Daniel", text: "Ontzettend fijn geholpen! Professioneel en dachten mee met oplossingen." },
];

export async function generateStaticParams() {
  return Object.keys(cities).map((stad) => ({ stad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  const city = cities[stad];
  if (!city) return {};
  return {
    title: `Loodgieter ${city.name} | Insta Monteur`,
    description: `Betrouwbare loodgieter in ${city.name}. Insta Monteur is snel ter plaatse voor spoed en regulier loodgieterswerk in ${city.name} en omgeving. Vaste tarieven, gratis offerte.`,
    alternates: {
      canonical: `${siteConfig.url}/loodgieter-${stad}`,
    },
  };
}

export default async function LoodgieterStadPage({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const city = cities[stad];
  if (!city) notFound();

  const faqs = [
    {
      question: "Hoe duur is een loodgieter?",
      answer:
        `De kosten voor een loodgieter in ${city.name} zijn afhankelijk van de situatie en het type werkzaamheden. Bij Insta Monteur werken wij met vaste, transparante tarieven zonder verborgen kosten. Vraag vrijblijvend een offerte aan via onze website of bel ons direct.`,
    },
    {
      question: "Hoe kom ik aan een betrouwbare loodgieter?",
      answer:
        `Een betrouwbare loodgieter in ${city.name} vinden is eenvoudig via Insta Monteur. Wij zijn gecertificeerd, werken met vaste tarieven en hebben jarenlange ervaring in de regio. Onze klanten waarderen onze professionele aanpak en eerlijke communicatie.`,
    },
    {
      question: "Wat is jullie werkgebied?",
      answer: city.werkgebied,
    },
    {
      question: "Hoe snel kan een loodgieter bij mij thuis zijn?",
      answer:
        `Bij spoedgevallen in ${city.name} streven wij ernaar binnen 1 uur ter plaatse te zijn. Voor reguliere afspraken plannen wij een tijdstip dat u uitkomt. Wij zijn bereikbaar op werkdagen van 08:00 tot 17:00.`,
    },
    {
      question: "Moet ik een loodgieter inschakelen voor periodiek onderhoud?",
      answer:
        "Ja, periodiek onderhoud van uw water- en gasleidingen, verwarming en sanitair is sterk aan te raden. Regelmatig onderhoud voorkomt storingen, verlengt de levensduur van uw installaties en bespaart op de lange termijn kosten. Insta Monteur biedt onderhoudscontracten op maat.",
    },
  ];

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
            style={{ fontSize: "clamp(6rem, 16vw, 14rem)", letterSpacing: "-0.04em", color: "rgba(15,40,120,0.04)" }}
          >
            {city.name.toUpperCase()}
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
              Loodgieter {city.name}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-8">
              {city.intro}
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

      {/* USP sectie */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Waarom Insta Monteur?
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-12 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Uw loodgieter in {city.name}
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usps.map((usp, i) => (
              <AnimateIn key={usp.title} variant="fadeUp" delay={i * 60}>
                <div className="p-5 border border-border rounded-2xl hover:border-orange-200 hover:bg-orange-50/40 transition-all group h-full">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                    <CheckCircle className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-brand text-sm mb-1">{usp.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{usp.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Over ons in deze stad */}
      <section className="bg-[#f7f7f5] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn variant="fadeIn">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                  Loodgieter {city.name}
                </span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2
                  className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Vakkundig.<br />
                  Snel.<br />
                  <span className="text-orange-500">Betrouwbaar.</span>
                </h2>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={200}>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {city.about}
                </p>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={280}>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-brand font-bold text-lg group"
                >
                  <span className="underline underline-offset-4 group-hover:text-orange-500 transition-colors">
                    Bel direct: {siteConfig.phone}
                  </span>
                  <span className="text-orange-500 text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </AnimateIn>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Wrench, title: "Leidingen aanleggen", desc: "Netjes, lekvrij en veilig aangelegd" },
                { icon: Droplets, title: "Lekkage verhelpen", desc: "Snel opsporen en adequaat oplossen" },
                { icon: Waves, title: "Afvoer ontstoppen", desc: "Hogedruk en camera-inspectie" },
                { icon: ShieldCheck, title: "Spoedservice", desc: "Binnen 1 uur ter plaatse" },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <AnimateIn key={card.title} variant="fadeUp" delay={i * 80}>
                    <div className="p-5 border border-border rounded-2xl bg-white hover:border-orange-200 hover:bg-orange-50/40 transition-all group h-full">
                      <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                        <Icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-brand text-sm mb-1">{card.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Gewaardeerd door onze klanten
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2
              className="font-black text-brand mt-4 mb-12 leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Wat onze klanten zeggen
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, i) => (
              <AnimateIn key={review.name} variant="fadeUp" delay={i * 80}>
                <div className="p-5 border border-border rounded-2xl h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-bold text-brand text-sm mt-4">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f7f5] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
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
                <span className="text-brand">in {city.name}?</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={150}>
              <div className="flex flex-col gap-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Indien je met spoed een loodgieter nodig hebt in {city.name}, zal een ervaren spoed
                  loodgieter binnen 1 uur op locatie zijn om het probleem vakkundig op te lossen.
                  Wij zijn bereikbaar op werkdagen van 08:00 tot 17:00.
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
