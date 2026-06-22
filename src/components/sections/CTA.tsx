import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { AnimateIn } from "@/components/AnimateIn";

export function CTA() {
  return (
    <section className="bg-orange-500 py-20 overflow-hidden relative">
      {/* Large background text */}
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
              Direct een<br />
              <span className="text-brand">offerte</span><br />
              aanvragen?
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeRight" delay={150}>
          <div className="flex flex-col gap-4">
            <p className="text-white/80 text-lg leading-relaxed">
              Wij zijn bereikbaar van maandag t/m zaterdag van 08:00 tot 17:00. Neem vandaag nog contact op en wij zijn er snel.
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
  );
}
