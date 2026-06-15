const testimonials = [
  {
    name: "Dirk",
    text: "Erg goed werk geleverd met het plaatsen van een nieuwe CV-ketel. De medewerkers waren klantgericht en hebben mee gedacht in de oplossingen. Dank voor jullie goede werk!",
  },
  {
    name: "Kimberly",
    text: "Een afspraak maken kan wat lastig zijn ivm drukte, maar echt een topper, vriendelijk, professioneel.",
  },
  {
    name: "Ruben",
    text: "Medewerkers zijn aardig en vakkundig. Ze kwamen voor een spoedreparatie op een voor hen superdrukke dag. Ergste schade hersteld. Zeker aan te bevelen.",
  },
  {
    name: "Daniel",
    text: "Ontzettend fijn geholpen! Ook al was het druk, namen ze de tijd om mij te helpen met mijn boiler. Dacht mee en was professioneel. Ik raad hun zeker aan!",
  },
];

import { AnimateIn } from "@/components/AnimateIn";

export function Testimonials() {
  return (
    <section className="bg-[#f7f7f5] py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 mb-14">
          <AnimateIn variant="fadeIn" className="pt-1">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
              Klantreviews
            </span>
          </AnimateIn>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <AnimateIn variant="fadeUp" delay={100}>
              <h2
                className="font-black text-brand tracking-tight leading-[0.9]"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                Wat <span className="text-orange-500">klanten</span><br />over ons zeggen
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={200}>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">★</span>
                  ))}
                </div>
                <span className="font-black text-brand text-lg">5.0</span>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Quote grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} variant="fadeUp" delay={i * 100}>
            <div
              className="bg-white rounded-3xl p-7 border border-border hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="text-5xl font-black text-orange-200 leading-none mb-4 font-serif">&ldquo;</div>
              <p className="text-foreground/75 text-sm leading-relaxed flex-1 italic">
                {t.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-black text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-brand">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Klant</div>
                </div>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
