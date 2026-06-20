"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/AnimateIn";

const faqs = [
  {
    question: "Wat kost een loodgieter per uur?",
    answer:
      "De tarieven van een loodgieter liggen gemiddeld tussen de €60 en €100 per uur exclusief btw. Bij Insta Monteur werken wij met vaste tarieven, u weet dus altijd vooraf wat u betaalt. Geen verrassingen achteraf.",
  },
  {
    question: "Hoe snel kan een loodgieter bij mij zijn?",
    answer:
      "Bij een spoedsituatie zijn wij gemiddeld binnen 1 uur bij u. Wij zijn bereikbaar op werkdagen van 08:00 tot 17:00. Bel ons en wij sturen direct een monteur.",
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
    question: "Hoe vaak moet een CV-ketel onderhouden worden?",
    answer:
      "Het wordt aanbevolen om uw CV-ketel jaarlijks te laten onderhouden. Regelmatig onderhoud verlengt de levensduur van de ketel, voorkomt storingen en is vaak verplicht voor de garantie. Wij verzorgen het jaarlijks onderhoud snel en vakkundig.",
  },
  {
    question: "Mijn CV-ketel doet het niet meer, wat nu?",
    answer:
      "Controleer eerst of de thermostaat goed staat en of er stroom en gas is. Staat er een foutcode op het display? Noteer deze. Bel ons daarna direct, wij kunnen in veel gevallen de storing dezelfde dag nog verhelpen.",
  },
  {
    question: "Kan ik zelf loodgieterswerk uitvoeren?",
    answer:
      "Eenvoudige klusjes zoals een lekkende kraan vervangen kunt u zelf doen. Voor gas-, afvoer- en waterleidingwerk is een gecertificeerde loodgieter echter verplicht. Foutief uitgevoerd werk kan leiden tot waterschade, gevaarlijke situaties en problemen met uw verzekering.",
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
  {
    question: "Wat is het verschil tussen een loodgieter en een installateur?",
    answer:
      "Een loodgieter richt zich op water- en rioleringswerk, zoals lekkages, sanitair en afvoeren. Een installateur houdt zich bezig met grotere systemen zoals CV-ketels, warmtepompen, ventilatie en airconditioning. Bij Insta Monteur combineren wij beide, u heeft maar één bedrijf nodig.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-semibold text-brand text-sm md:text-base pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-orange-500 shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const left = faqs.slice(0, 5);
  const right = faqs.slice(5, 10);
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimateIn variant="fadeUp" className="text-center mb-10">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mt-2">
            Heeft u een vraag?
          </h2>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="space-y-3">
            {left.map((faq, i) => (
              <AnimateIn key={faq.question} variant="fadeLeft" delay={i * 60}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </AnimateIn>
            ))}
          </div>
          <div className="space-y-3">
            {right.map((faq, i) => (
              <AnimateIn key={faq.question} variant="fadeRight" delay={i * 60}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
