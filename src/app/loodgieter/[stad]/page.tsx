import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, Wrench, Droplets, Waves, ShieldCheck, Star, CheckCircle, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

type CityData = {
  name: string;
  intro: string;
  about: string;
  werkgebied: string;
  wijken?: string[];
};

const cities: Record<string, CityData> = {
  rotterdam: {
    name: "Rotterdam",
    intro:
      "Lekkage, verstopte afvoer of gewoon iemand nodig die eerlijk vertelt wat er aan de hand is? Dan zit je goed bij Insta Monteur. Wij zijn een jong en gedreven loodgietersbedrijf in Rotterdam. Gewoon een vakman die snel bij je is, duidelijk communiceert en het werk goed doet.",
    about:
      "Wij zijn opgericht omdat we het anders wilden doen. Geen vage kostenplaatjes achteraf, geen monteurs die je een kwartier uitleggen wat er allemaal nog meer mis is. Bij Insta Monteur zijn we eerlijk over wat het kost en doen we precies wat we zeggen.\n\nRotterdam kennen we goed. De jaren-vijftig rijtjeshuizen in IJsselmonde met hun oude leidingen, de appartementen in Prins Alexander waar de afvoer verstopt raakt, de grachtenpanden in Delfshaven met hun eigenzinnige sanitair. We zien dagelijks wat er speelt in deze stad en weten hoe we het snel en netjes oplossen.\n\nOnze monteurs zijn gecertificeerd, werken met kwaliteitsmaterialen en ruimen altijd op. We zijn trots op ons werk, en dat merk je.",
    werkgebied:
      "Wij zijn actief in heel Rotterdam, waaronder Rotterdam Centrum, Noord, Zuid, Kralingen, Feijenoord, IJsselmonde, Charlois, Delfshaven en Prins Alexander. Ook actief in Schiedam, Vlaardingen, Barendrecht, Capelle aan den IJssel, Ridderkerk en Spijkenisse.",
    wijken: [
      "Rotterdam Centrum",
      "Rotterdam Noord",
      "Hillegersberg-Schiebroek",
      "Kralingen-Crooswijk",
      "Feijenoord",
      "IJsselmonde",
      "Charlois",
      "Delfshaven",
      "Prins Alexander",
      "Overschie",
      "Pernis",
      "Hoek van Holland",
    ],
  },
  dordrecht: {
    name: "Dordrecht",
    intro:
      "Op zoek naar een betrouwbare loodgieter in Dordrecht? Bij Insta Monteur bent u aan het juiste adres. Onze ervaren loodgieters in Dordrecht zijn snel bij u voor zowel spoed als reguliere klussen.",
    about:
      "Bij Insta Monteur in Dordrecht bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Van lekkages opsporen en verhelpen tot het ontstoppen van afvoeren en het aanleggen van leidingen, wij leveren kwaliteit met garantie.",
    werkgebied:
      "Wij zijn actief in Dordrecht en omstreken, waaronder Papendrecht, Zwijndrecht, Sliedrecht en regio Rotterdam.",
  },
  vlaardingen: {
    name: "Vlaardingen",
    intro:
      "Zoekt u een betrouwbare loodgieter in Vlaardingen? Insta Monteur staat snel voor u klaar. Onze vakkundige loodgieters in Vlaardingen lossen elk sanitair probleem snel en professioneel op.",
    about:
      "Bij Insta Monteur in Vlaardingen bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Of het nu gaat om een lekkage, een verstopte afvoer of nieuw sanitair, wij zorgen voor een snelle en nette oplossing.",
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
      "Bij Insta Monteur in Schiedam bieden wij eerlijke en transparante prijzen voor onze loodgietersdiensten. Of het nu gaat om een lekkage, verstopte afvoer of nieuw sanitair, wij lossen het vakkundig op.",
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
  { name: "Dirk", location: "Rotterdam", text: "Erg goed werk geleverd met het plaatsen van een nieuwe CV-ketel. Medewerkers waren klantgericht en hebben mee gedacht." },
  { name: "Kimberly", location: "Rotterdam Zuid", text: "Een afspraak maken kan lastig ivm drukte, maar echt een topper, vriendelijk en professioneel." },
  { name: "Ruben", location: "Rotterdam Noord", text: "Medewerkers zijn aardig en vakkundig. Zeker aan te bevelen." },
  { name: "Daniel", location: "Rotterdam Centrum", text: "Ontzettend fijn geholpen! Professioneel en dachten mee met oplossingen." },
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

  if (stad === "rotterdam") {
    return {
      title: "Loodgieter Rotterdam | Snel Ter Plaatse | Insta Monteur",
      description:
        "Loodgieter nodig in Rotterdam? Insta Monteur is uw vakkundige loodgieter voor lekkages, afvoerproblemen en CV-ketels in alle Rotterdamse wijken. Ma–Za 08:00–17:00. Gratis offerte.",
      alternates: {
        canonical: `${siteConfig.url}/loodgieter-rotterdam`,
      },
    };
  }

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

  const isRotterdam = stad === "rotterdam";

  const baseFaqs = [
    {
      question: "Hoe duur is een loodgieter?",
      answer:
        `Dat hangt af van de klus, maar bij Insta Monteur weet je het altijd vooraf. We werken met vaste tarieven en geven je een duidelijke prijsopgave voordat we beginnen. Geen verrassingen op de factuur. Bel ons of vraag een offerte aan — dat is gratis en vrijblijvend.`,
    },
    {
      question: "Hoe kom ik aan een betrouwbare loodgieter?",
      answer:
        `Lastige vraag, want er zijn er genoeg die mooie verhalen verkopen. Wat ons onderscheidt: we zijn gecertificeerd, we werken met vaste prijzen en we zijn eerlijk — ook als de oplossing simpeler is dan je dacht. Onze klanten komen terug, dat zegt genoeg.`,
    },
    {
      question: "Wat is jullie werkgebied?",
      answer: city.werkgebied,
    },
    {
      question: "Hoe snel zijn jullie ter plaatse?",
      answer:
        `Bij spoed proberen we binnen 1 uur bij je te zijn in ${city.name}. Voor regulier werk plannen we een afspraak die jou uitkomt. We zijn bereikbaar op Ma t/m Za van 08:00 tot 17:00. Bel ons — we denken direct mee.`,
    },
    {
      question: "Is periodiek onderhoud echt nodig?",
      answer:
        "Ja, en we zeggen dat niet om meer omzet te maken. Een ketel of leidingwerk dat regelmatig wordt nagekeken gaat langer mee, geeft minder storingen en voorkomt dure schade. We bieden onderhoudscontracten op maat — eerlijk geprijsd, zonder onnodige poespas.",
    },
  ];

  const rotterdamFaqs = [
    {
      question: "In welke wijken van Rotterdam zijn jullie actief?",
      answer:
        "In heel Rotterdam — van Centrum tot Prins Alexander, van Delfshaven tot IJsselmonde. Ook Charlois, Kralingen, Feijenoord, Noord, Zuid en Overschie. En in de directe omgeving: Schiedam, Vlaardingen, Barendrecht, Capelle aan den IJssel, Ridderkerk en Spijkenisse. Twijfel je of we bij jou komen? Bel gewoon even, we vertellen het direct.",
    },
    {
      question: "Waarom zou ik voor Insta Monteur kiezen?",
      answer:
        "Omdat we eerlijk zijn. We vertellen je vooraf wat het kost, sturen een gecertificeerde monteur en lossen het probleem écht op — niet half. We zijn jong, gedreven en hechten veel waarde aan kwaliteit en transparantie. Geen verborgen kosten, geen wollig gedoe. Gewoon goed werk.",
    },
    {
      question: "Kunnen jullie ook helpen met een CV-ketel storing in Rotterdam?",
      answer:
        "Zeker. Naast loodgieterswerk doen we ook installatie, onderhoud en reparatie van CV-ketels in Rotterdam. We werken met alle merken: Remeha, Intergas, Nefit, Vaillant en meer. Geeft je ketel storing of wil je hem laten onderhouden? Bel ons.",
    },
  ];

  const faqs = isRotterdam ? [...rotterdamFaqs, ...baseFaqs] : baseFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Loodgieter", item: `${siteConfig.url}/loodgieter` },
      { "@type": "ListItem", position: 3, name: `Loodgieter ${city.name}`, item: `${siteConfig.url}/loodgieter-${stad}` },
    ],
  };

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Insta Monteur – Loodgieter ${city.name}`,
    url: `${siteConfig.url}/loodgieter-${stad}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      {/* Hero */}
      <section className={`bg-white pt-[120px] pb-16 lg:pb-24 relative overflow-clip${isRotterdam ? " lg:min-h-[700px]" : ""}`}>
        {/* Decorative city name watermark — alle steden inclusief Rotterdam */}
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

        {/* Rotterdam: hero illustratie — huis, Erasmusbrug en busje */}
        {isRotterdam && (
          <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full" style={{ animation: "fadeUpIn 0.7s cubic-bezier(0,0,0.2,1) 300ms both" }}>
            <Image
              src="/images/hero-rotterdam-3d-v2.png"
              alt="3D illustratie van een Rotterdams huis met warmtepomp, Erasmusbrug en Insta Monteur servicebusje"
              fill
              className="object-contain object-center"
              priority
              sizes="50vw"
              unoptimized
            />
          </div>
        )}

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className={isRotterdam ? "lg:w-[50%] lg:pr-6" : ""}>
            <AnimateIn variant="fadeIn">
              <nav aria-label="breadcrumb" className="mb-6">
                <ol className="flex items-center gap-1.5 text-xs text-foreground/40 font-medium">
                  <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/loodgieter" className="hover:text-orange-500 transition-colors">Loodgieter</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-orange-500">{city.name}</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                  {city.name} en omgeving · Ma–Za 08:00–17:00
                </span>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={100}>
              <h1
                className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                Loodgieter <span className="text-orange-500">{city.name}</span>
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

            {/* Mobile image */}
            {isRotterdam && (
              <AnimateIn variant="fadeUp" delay={440}>
                <div className="lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden mt-10 shadow-xl">
                  <Image
                    src="/images/hero-rotterdam-3d-v2.png"
                    alt="3D illustratie van een Rotterdams huis met warmtepomp, Erasmusbrug en Insta Monteur servicebusje"
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="100vw"
                    unoptimized
                  />
                </div>
              </AnimateIn>
            )}
          </div>
        </div>
      </section>

      {/* Stats balk */}
      <section className="bg-brand py-12 relative overflow-clip">
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
              Uw <span className="text-orange-500">loodgieter</span> in {city.name}
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
            {isRotterdam ? (
              <AnimateIn variant="fadeRight" delay={100}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image
                    src="/images/loodgieter-rotterdam-cv-ketel.jpg"
                    alt="CV-ketel installatie door Insta Monteur in Rotterdam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimateIn>
            ) : (
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
            )}
          </div>
        </div>
      </section>

      {/* Rotterdam wijken — alleen voor Rotterdam */}
      {isRotterdam && city.wijken && (
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <AnimateIn variant="fadeIn">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Werkgebied
              </span>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={100}>
              <h2
                className="font-black text-brand mt-4 mb-4 leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Loodgieter in alle <span className="text-orange-500">wijken</span> van Rotterdam
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={160}>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-10">
                Van de Coolsingel tot Charlois, van Delfshaven tot Prins Alexander. Wij zijn er.
                Woont of werkt u in Rotterdam? Dan zijn wij uw loodgieter. Snel, vakkundig en
                zonder gedoe. Staat uw wijk hieronder? Dan zijn we er zo.
              </p>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={220}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {city.wijken.map((wijk) => (
                  <div
                    key={wijk}
                    className="flex items-center gap-2.5 p-3.5 border border-border rounded-xl hover:border-orange-200 hover:bg-orange-50/40 transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="text-sm font-medium text-brand">{wijk}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Diensten in Rotterdam — alleen voor Rotterdam */}
      {isRotterdam && (
        <section className="bg-[#f7f7f5] py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <AnimateIn variant="fadeIn">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Onze diensten
              </span>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={100}>
              <h2
                className="font-black text-brand mt-4 mb-10 leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Wat wij <span className="text-orange-500">doen</span> in Rotterdam
              </h2>
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Loodgieterswerk",
                  desc: "Lekkages, sanitair, leidingen en rioolontstopping in heel de regio.",
                  href: "/loodgieter",
                },
                {
                  title: "CV-ketel",
                  desc: "Installatie, onderhoud en reparatie van CV-ketels. Alle merken.",
                  href: "/cv-ketels",
                },
                {
                  title: "Warmtepomp",
                  desc: "Duurzame warmtepompen installeren. Gratis advies aan huis.",
                  href: "/warmtepomp",
                },
                {
                  title: "Spoed loodgieter",
                  desc: "Acute lekkage of verstopte afvoer? Wij zijn er snel bij.",
                  href: "/spoed-loodgieter",
                },
              ].map((dienst, i) => (
                <AnimateIn key={dienst.title} variant="fadeUp" delay={i * 80}>
                  <Link
                    href={dienst.href}
                    className="block p-6 border border-border rounded-2xl bg-white hover:border-orange-200 hover:bg-orange-50/40 transition-all group h-full"
                  >
                    <h3 className="font-bold text-brand mb-2 group-hover:text-orange-500 transition-colors">
                      {dienst.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{dienst.desc}</p>
                    <span className="text-orange-500 text-sm font-semibold inline-flex items-center gap-1">
                      Meer informatie <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Wat <span className="text-orange-500">klanten</span> zeggen
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
                  <p className="text-xs text-muted-foreground">{isRotterdam ? review.location : city.name}</p>
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
      <section className="bg-orange-500 py-20 overflow-clip relative">
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
                  Heeft u een loodgieter nodig in {city.name}? Bel ons direct en een ervaren
                  monteur staat binnen 1 uur op locatie om het probleem vakkundig op te lossen.
                  Bereikbaar op Ma t/m Za van 08:00 tot 17:00.
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
