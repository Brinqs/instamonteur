import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { siteConfig } from "@/lib/siteConfig";

type DienstData = {
  name: string;
  heroHeading?: { before: string; orange: string; after: string };
  intro: string;
  description: string;
  illustratie: string;
  usps: { title: string; desc: string }[];
  werkzaamheden: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
};

const diensten: Record<string, DienstData> = {
  lekkage: {
    name: "Lekkage reparatie",
    heroHeading: { before: "Last van ", orange: "Lekkage", after: "" },
    intro:
      "Waterlekkage ontdekt? Sluit direct de hoofdkraan af en bel ons. Wij sporen de lekkage snel op en repareren het vakkundig — netjes, zonder gedoe en tegen vaste tarieven.",
    description:
      "Een lekkage kan flinke schade aanrichten als het niet snel wordt opgelost. Bij Insta Monteur zijn we er snel bij. We werken met moderne lekdetectie apparatuur zodat we de bron vinden zonder onnodige sloopschade.\n\nOf het nu gaat om een lekkende kraan, een gescheurde leiding of verborgen waterschade achter de muur — wij lossen het op. Netjes, vakkundig en met garantie op het werk.",
    illustratie: "/images/dienst-lekkage-3d.png",
    usps: [
      { title: "Snel ter plaatse", desc: "Bij spoed binnen 1 uur bij u" },
      { title: "Lekdetectie", desc: "Moderne apparatuur, minimale sloopschade" },
      { title: "Vaste tarieven", desc: "Geen verrassingen op de factuur" },
      { title: "Garantie", desc: "Op al ons werk geven wij garantie" },
      { title: "Alle lekkages", desc: "Kranen, leidingen, afvoeren en meer" },
      { title: "Gecertificeerd", desc: "Vakkundig en professioneel team" },
    ],
    werkzaamheden: [
      { title: "Lekkende kraan repareren", desc: "Druipende of lekkende kranen snel verholpen" },
      { title: "Leiding reparatie", desc: "Gescheurde of gebarsten leidingen vakkundig hersteld" },
      { title: "Lekdetectie", desc: "Verborgen lekkages opsporen zonder sloopschade" },
      { title: "Waterschade herstel", desc: "Snel handelen om verdere schade te voorkomen" },
    ],
    faqs: [
      {
        question: "Wat moet ik doen bij een lekkage?",
        answer: "Sluit direct de hoofdkraan af om verdere schade te voorkomen. Leg handdoeken neer en schakel elektra uit in de buurt van het water. Bel ons daarna direct — wij zijn snel bij u.",
      },
      {
        question: "Hoe snel komen jullie bij een lekkage?",
        answer: "Bij een acute lekkage proberen we binnen 1 uur ter plaatse te zijn. Wij zijn bereikbaar op maandag t/m zaterdag van 08:00 tot 17:00.",
      },
      {
        question: "Kunnen jullie verborgen lekkages opsporen?",
        answer: "Ja. Wij werken met moderne lekdetectie apparatuur waarmee we lekkages achter muren of onder vloeren kunnen opsporen zonder grote sloopschade.",
      },
      {
        question: "Wat kost een lekkage reparatie?",
        answer: "Dat hangt af van de oorzaak en omvang. Wij geven altijd eerst een duidelijke prijsopgave voordat we beginnen. Geen verrassingen achteraf.",
      },
    ],
  },
  ontstopping: {
    name: "Ontstopping",
    intro:
      "Verstopte afvoer, toilet of riool? Dat lossen wij snel op. Met hogedruk reiniging of camera-inspectie vinden en verhelpen wij elke verstopping — snel en vakkundig.",
    description:
      "Een verstopte afvoer of riool is niet alleen vervelend, maar kan ook leiden tot terugstromend water en schade. Bij Insta Monteur pakken we dit professioneel aan.\n\nWe werken met hogedrukreiniging en rioolcamera's om de verstopping snel te lokaliseren en op te lossen. Of het nu gaat om een verstopt toilet, een trage afvoer of een geblokkeerd riool — wij zijn er snel bij.",
    illustratie: "/images/dienst-ontstopping-3d.png",
    usps: [
      { title: "Snel ter plaatse", desc: "Bij spoed binnen 1 uur bij u" },
      { title: "Hogedruk reiniging", desc: "Effectief en snel" },
      { title: "Camera-inspectie", desc: "Exacte locatie van de verstopping" },
      { title: "Vaste tarieven", desc: "Geen verrassingen op de factuur" },
      { title: "Alle afvoeren", desc: "Toilet, keuken, douche en riool" },
      { title: "Garantie", desc: "Op al ons werk geven wij garantie" },
    ],
    werkzaamheden: [
      { title: "Toilet ontstoppen", desc: "Verstopt toilet snel en hygiënisch verholpen" },
      { title: "Afvoer ontstoppen", desc: "Keuken, douche of wastafel afvoer vrijgemaakt" },
      { title: "Riool reiniging", desc: "Hogedrukreiniging van het rioolstelsel" },
      { title: "Camera-inspectie", desc: "Rioolcamera voor exacte diagnose" },
    ],
    faqs: [
      {
        question: "Hoe snel komen jullie bij een verstopping?",
        answer: "Bij een acute verstopping proberen we binnen 1 uur ter plaatse te zijn. Wij zijn bereikbaar op maandag t/m zaterdag van 08:00 tot 17:00.",
      },
      {
        question: "Wat veroorzaakt een verstopping?",
        answer: "Veel voorkomende oorzaken zijn ophoping van vet, haar, zeep, wc-papier of vreemde voorwerpen. In het riool kunnen ook wortels of kalk een verstopping veroorzaken.",
      },
      {
        question: "Kunnen jullie ook riolen reinigen?",
        answer: "Ja. We werken met professionele hogedrukreinigers en rioolcamera's om ook grote verstoppingen in het riool snel en effectief op te lossen.",
      },
      {
        question: "Wat kost een ontstopping?",
        answer: "Wij werken met vaste tarieven en geven altijd eerst een duidelijke prijsopgave. Bel ons voor een snelle inschatting.",
      },
    ],
  },
  sanitair: {
    name: "Sanitair montage",
    intro:
      "Nieuw sanitair laten plaatsen of bestaand sanitair vervangen? Wij monteren en sluiten alles vakkundig aan. Van toilet tot complete badkamer — netjes en op tijd.",
    description:
      "Of u nu een nieuwe wastafel wilt laten plaatsen, een douche laat installeren of een complete badkamer laat renoveren — Insta Monteur doet het vakkundig.\n\nWij monteren alle sanitaire voorzieningen en sluiten deze correct aan op de water- en afvoerleidingen. We werken netjes, ruimen altijd op en geven garantie op ons werk.",
    illustratie: "/images/dienst-sanitair-3d.png",
    usps: [
      { title: "Alle sanitair", desc: "Toilet, douche, wastafel en bad" },
      { title: "Vakkundig", desc: "Gecertificeerde monteurs" },
      { title: "Vaste tarieven", desc: "Geen verrassingen op de factuur" },
      { title: "Netjes", desc: "Wij ruimen altijd op na het werk" },
      { title: "Garantie", desc: "Op al ons werk geven wij garantie" },
      { title: "Snel gepland", desc: "Flexibele afspraken, ook op zaterdag" },
    ],
    werkzaamheden: [
      { title: "Toilet plaatsen", desc: "Nieuw toilet monteren en aansluiten" },
      { title: "Douche installatie", desc: "Inloopdouche of douchecabine plaatsen" },
      { title: "Wastafel montage", desc: "Wastafel met kraan installeren" },
      { title: "Bad plaatsen", desc: "Ligbad of bubbelbad vakkundig gemonteerd" },
    ],
    faqs: [
      {
        question: "Kunnen jullie ook bestaand sanitair vervangen?",
        answer: "Ja, wij verwijderen het oude sanitair en plaatsen het nieuwe. Wij zorgen ook voor de correcte aansluiting op de bestaande leidingen.",
      },
      {
        question: "Hoe lang duurt het plaatsen van sanitair?",
        answer: "Een enkel sanitairobject zoals een toilet of wastafel is vaak binnen 1-2 uur geplaatst. Een complete badkamer duurt langer — wij bespreken de planning vooraf met u.",
      },
      {
        question: "Leveren jullie het sanitair ook?",
        answer: "Wij plaatsen en sluiten aan. Het sanitair kunt u zelf uitkiezen bij een sanitairwinkel, of wij adviseren u over geschikte opties.",
      },
      {
        question: "Wat kost sanitair montage?",
        answer: "Wij werken met vaste tarieven. Vraag een gratis offerte aan via onze contactpagina of bel ons direct voor een inschatting.",
      },
    ],
  },
  verwarming: {
    name: "Verwarming",
    intro:
      "Problemen met uw verwarming of wilt u een nieuw verwarmingssysteem laten installeren? Insta Monteur is uw specialist voor radiatoren, vloerverwarming en complete verwarmingssystemen.",
    description:
      "Of uw radiator niet warm wordt, de vloerverwarming niet goed werkt of u een volledig nieuw verwarmingssysteem wilt laten aanleggen — Insta Monteur helpt u verder.\n\nWij installeren, repareren en onderhouden alle soorten verwarmingssystemen. Van een simpele radiator bijplaatsen tot een complete vloerverwarmingsinstallatie — wij doen het vakkundig en netjes.",
    illustratie: "/images/dienst-verwarming-3d.png",
    usps: [
      { title: "Alle systemen", desc: "Radiatoren, vloerverwarming en meer" },
      { title: "Installatie", desc: "Complete nieuwe verwarmingsinstallaties" },
      { title: "Reparatie", desc: "Snel verholpen bij storingen" },
      { title: "Onderhoud", desc: "Preventief onderhoud voor langere levensduur" },
      { title: "Vaste tarieven", desc: "Geen verrassingen op de factuur" },
      { title: "Garantie", desc: "Op al ons werk geven wij garantie" },
    ],
    werkzaamheden: [
      { title: "Radiator plaatsen", desc: "Nieuwe radiator installeren en aansluiten" },
      { title: "Vloerverwarming", desc: "Installatie en aansluiting van vloerverwarming" },
      { title: "Radiator ontluchten", desc: "Lucht uit het systeem verwijderen" },
      { title: "Verwarmingsstoring", desc: "Snel diagnose en reparatie bij storingen" },
    ],
    faqs: [
      {
        question: "Mijn radiator wordt niet warm, wat nu?",
        answer: "Controleer eerst of de thermostaat goed staat en of de radiatorknop open staat. Zit er lucht in de radiator? Ontlucht hem dan. Helpt dit niet, bel ons dan voor een diagnose.",
      },
      {
        question: "Kunnen jullie vloerverwarming aanleggen?",
        answer: "Ja. Wij leggen vloerverwarming aan in nieuwe en bestaande woningen. We bespreken altijd eerst de mogelijkheden en geven een vrijblijvende offerte.",
      },
      {
        question: "Hoe lang gaat een verwarmingssysteem mee?",
        answer: "Een goed onderhouden verwarmingssysteem gaat 15 tot 25 jaar mee. Regelmatig onderhoud verlengt de levensduur en voorkomt dure storingen.",
      },
      {
        question: "Wat kost het plaatsen van een radiator?",
        answer: "Wij werken met vaste tarieven. Vraag een gratis offerte aan of bel ons voor een snelle inschatting.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(diensten).map((dienst) => ({ dienst }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dienst: string }>;
}): Promise<Metadata> {
  const { dienst } = await params;
  const data = diensten[dienst];
  if (!data) return {};
  return {
    title: `${data.name} | Insta Monteur Rotterdam`,
    description: data.intro,
    alternates: { canonical: `${siteConfig.url}/diensten/${dienst}` },
  };
}

const reviews = [
  { name: "Dirk", location: "Rotterdam", text: "Erg goed werk geleverd. Medewerkers waren klantgericht en hebben mee gedacht in de oplossingen." },
  { name: "Kimberly", location: "Rotterdam Zuid", text: "Echt een topper, vriendelijk en professioneel. Snel geholpen." },
  { name: "Ruben", location: "Rotterdam Noord", text: "Medewerkers zijn aardig en vakkundig. Zeker aan te bevelen." },
  { name: "Daniel", location: "Rotterdam Centrum", text: "Ontzettend fijn geholpen! Professioneel en dachten mee met oplossingen." },
];

export default async function DienstPage({
  params,
}: {
  params: Promise<{ dienst: string }>;
}) {
  const { dienst } = await params;
  const data = diensten[dienst];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Diensten", item: `${siteConfig.url}/diensten` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${siteConfig.url}/diensten/${dienst}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-white pt-[120px] pb-16 lg:pb-24 relative overflow-clip lg:min-h-[600px]">
        <div className="hidden lg:block absolute top-0 right-0 w-[38%] h-full" style={{ animation: "fadeUpIn 0.7s cubic-bezier(0,0,0.2,1) 300ms both" }}>
          <Image
            src={data.illustratie}
            alt={`${data.name} illustratie`}
            fill
            className="object-contain object-center p-20"
            priority
            sizes="50vw"
            unoptimized
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="lg:w-[52%]">
            <AnimateIn variant="fadeIn">
              <nav aria-label="breadcrumb" className="mb-6">
                <ol className="flex items-center gap-1.5 text-xs text-foreground/40 font-medium">
                  <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/diensten" className="hover:text-orange-500 transition-colors">Diensten</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-orange-500">{data.name}</li>
                </ol>
              </nav>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                  Rotterdam en omgeving · Ma–Za 08:00–17:00
                </span>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={100}>
              <h1 className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
                {data.heroHeading ? (
                  <>
                    {data.heroHeading.before}
                    <span className="text-orange-500">{data.heroHeading.orange}</span>
                    {data.heroHeading.after}
                  </>
                ) : (
                  <span className="text-orange-500">{data.name}</span>
                )}
              </h1>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={200}>
              <p className="text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-8">
                {data.intro}
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

            {/* Mobile illustratie */}
            <AnimateIn variant="fadeUp" delay={440}>
              <div className="lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden mt-10 bg-[#f8f8f6] max-h-48">
                <Image
                  src={data.illustratie}
                  alt={`${data.name} illustratie`}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="100vw"
                  unoptimized
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* USP sectie */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">Waarom Insta Monteur?</span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2 className="font-black text-brand mt-4 mb-12 leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Uw <span className="text-orange-500">{data.name.toLowerCase()}</span> specialist
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.usps.map((usp, i) => (
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

      {/* Beschrijving + werkzaamheden */}
      <section className="bg-[#f7f7f5] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateIn variant="fadeIn">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">{data.name}</span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2 className="font-black text-brand mt-4 mb-6 leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  Vakkundig.<br />Snel.<br /><span className="text-orange-500">Betrouwbaar.</span>
                </h2>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={200}>
                <div className="text-muted-foreground text-base leading-relaxed mb-6 space-y-4">
                  {data.description.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={280}>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-brand font-bold text-lg group">
                  <span className="underline underline-offset-4 group-hover:text-orange-500 transition-colors">
                    Bel direct: {siteConfig.phone}
                  </span>
                  <span className="text-orange-500 text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </AnimateIn>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.werkzaamheden.map((item, i) => (
                <AnimateIn key={item.title} variant="fadeUp" delay={i * 80}>
                  <div className="p-5 border border-border rounded-2xl bg-white hover:border-orange-200 hover:bg-orange-50/40 transition-all group h-full">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
                      <CheckCircle className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-brand text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimateIn variant="fadeIn">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">Gewaardeerd door onze klanten</span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={100}>
            <h2 className="font-black text-brand mt-4 mb-12 leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Wat <span className="text-orange-500">klanten</span> zeggen
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, i) => (
              <AnimateIn key={review.name} variant="fadeUp" delay={i * 80}>
                <div className="p-5 border border-border rounded-2xl h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-bold text-brand text-sm mt-4">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
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
                <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">Veelgestelde vragen</span>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={100}>
                <h2 className="font-black text-brand mt-4 leading-[0.9] tracking-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                  Heeft u een vraag?
                </h2>
              </AnimateIn>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
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
        <div className="absolute right-4 top-1/4 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
          <span className="font-black text-orange-400/30 whitespace-nowrap leading-none" style={{ fontSize: "clamp(14rem, 40vw, 32rem)", letterSpacing: "-0.05em" }}>
            SNEL
          </span>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimateIn variant="fadeLeft">
              <h2 className="font-black text-white leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                {data.name}<br /><span className="text-brand">nodig?</span>
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeRight" delay={150}>
              <div className="flex flex-col gap-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Neem direct contact op en wij zijn er snel. Bereikbaar op maandag t/m zaterdag van 08:00 tot 17:00.
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
