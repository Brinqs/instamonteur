import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";

function Letters({ text, baseDelay, className, style }: {
  text: string;
  baseDelay: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`inline-block overflow-hidden ${className ?? ""}`} style={style}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="animate-hero-letter"
          style={{ animationDelay: `${baseDelay + i * 38}ms` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="lg:min-h-[calc(100vh-44px)] bg-white flex flex-col pt-[96px] lg:pt-[60px] overflow-x-clip">

      <div className="lg:flex-1 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_640px] gap-8 lg:gap-12 items-end lg:h-full">

          {/* Left — typography */}
          <div className="flex flex-col lg:justify-end py-3 lg:py-12">
            <div className="flex items-center gap-3 mb-8 lg:mb-6">
              <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
                Rotterdam · Ma–Vr 08:00–17:00
              </span>
            </div>

            <h1
              className="font-black text-brand leading-[0.88] tracking-[-0.04em] mb-20 lg:mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block">
                <Letters text="DE BESTE" baseDelay={100} className="text-foreground/40" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)", letterSpacing: "0.08em" }} />
              </span>
              <span className="block leading-none whitespace-nowrap">
                <Letters text="INSTA" baseDelay={280} style={{ fontSize: "clamp(3.5rem, 7.8vw, 6.4rem)" }} />
                <Letters text="LLATIE" baseDelay={470} className="text-brand" style={{ fontSize: "clamp(3.5rem, 7.8vw, 6.4rem)" }} />
              </span>
              <span className="block">
                <Letters text="MONTEUR" baseDelay={680} className="text-orange-500" style={{ fontSize: "clamp(3.5rem, 7.8vw, 6.4rem)" }} />
              </span>
              <span className="block">
                <Letters text="IN ROTTERDAM" baseDelay={900} className="text-foreground/40" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)", letterSpacing: "0.05em" }} />
              </span>
            </h1>

            <p className="hidden sm:block text-foreground/50 text-base lg:text-lg max-w-lg leading-relaxed mb-6 lg:mb-10 font-normal tracking-normal">
              Dé installatie monteur &amp; loodgieter in Rotterdam, Dordrecht, Delft, Vlaardingen en Schiedam.
            </p>

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

            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 pt-8 lg:mt-10 lg:pt-10 border-t border-border">
              {["Binnen 1 uur ter plaatse", "Vaste tarieven", "Eerlijk en transparant"].map((usp) => (
                <span key={usp} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {usp}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="hidden lg:flex flex-col justify-end items-end relative self-end" style={{ minHeight: "calc(100vh - 160px)" }}>
            <div className="absolute bottom-10 right-0 w-[70%] h-[80%] bg-orange-500 rounded-3xl" />
            <div className="relative z-10" style={{ marginBottom: "40px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/plumbero-img39-704x1024-1.png"
                alt="Insta Monteur loodgieter"
                className="drop-shadow-2xl"
                style={{ height: "70vh", width: "auto", maxWidth: "none", display: "block", marginLeft: "auto", transform: "translateX(8px)" }}
              />
            </div>
            <div className="absolute top-28 left-20 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-border">
              <div className="text-3xl font-black text-brand tracking-tight">1 uur</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5">Gemiddelde responstijd</div>
            </div>
            <div className="absolute bottom-24 -left-8 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-orange-400 text-sm">★</span>)}
              </div>
              <div className="text-xs font-bold text-brand">500+ tevreden klanten</div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-12 lg:mt-6">
        <MarqueeTicker />
      </div>

    </section>
  );
}
