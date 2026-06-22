import { siteConfig } from "@/lib/siteConfig";

const faqs = [
  {
    question: "Wat kost een loodgieter per uur?",
    answer:
      "De tarieven van een loodgieter liggen gemiddeld tussen de €60 en €100 per uur exclusief btw. Bij Insta Monteur werken wij met vaste tarieven, u weet dus altijd vooraf wat u betaalt. Geen verrassingen achteraf.",
  },
  {
    question: "Hoe snel kan een loodgieter bij mij zijn?",
    answer:
      "Bij een spoedsituatie zijn wij gemiddeld binnen 1 uur bij u. Wij zijn bereikbaar op Ma t/m Za van 08:00 tot 17:00. Bel ons en wij sturen direct een monteur.",
  },
  {
    question: "Wat moet ik doen bij een lekkage thuis?",
    answer:
      "Sluit direct de hoofdkraan af om verdere waterschade te beperken. Leg handdoeken of emmers neer, schakel elektra uit in de buurt van het water en bel ons direct. Wij zijn er snel bij om de schade te beperken en de lekkage te repareren.",
  },
  {
    question: "Wat kost een nieuwe CV-ketel inclusief installatie?",
    answer:
      "De totaalprijs voor een nieuwe CV-ketel inclusief installatie ligt gemiddeld tussen de €1.500 en €3.500, afhankelijk van het merk en type. Wij geven u altijd eerst een vrijblijvende offerte zodat u niet voor verrassingen komt te staan.",
  },
  {
    question: "In welke steden zijn jullie actief?",
    answer:
      "Wij zijn actief in Rotterdam en directe omgeving: Dordrecht, Delft, Schiedam en Vlaardingen. Twijfelt u of wij bij u in de buurt komen? Bel ons en wij vertellen het u direct.",
  },
  {
    question: "Hebben jullie garantie op het werk?",
    answer:
      "Ja. Op al ons werk geven wij garantie. Mocht er na onze reparatie of installatie iets niet kloppen, dan lossen wij dit kosteloos op. Uw tevredenheid staat bij ons centraal.",
  },
];

export function LocalBusinessStructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rotterdam",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9225,
      longitude: 4.4792,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      "Rotterdam", "Dordrecht", "Delft", "Schiedam", "Vlaardingen",
    ],
  };

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
