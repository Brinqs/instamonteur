import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const highlights = [
  "Vandaag nog beschikbaar",
  "Gecertificeerde monteurs",
  "Vaste prijs, geen verrassingen",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand via-[oklch(0.22_0.07_250)] to-[oklch(0.15_0.05_260)]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-5 bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30">
              ✦ 24/7 Spoedservice beschikbaar
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Uw installatie
              <span className="block text-orange-400 mt-1">vakkundig geregeld</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Van CV-ketel tot elektra — InstaMonteur lost uw installatieproblemen snel,
              vakkundig en tegen een eerlijke prijs op. Gecertificeerd en lokaal.
            </p>

            <ul className="space-y-2.5 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-white/90">
                  <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-orange-500 hover:bg-orange-600 text-white font-bold text-base h-12 px-6 border-orange-500"
                )}
              >
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/30 text-white hover:bg-white/10 font-semibold h-12 px-6 bg-transparent dark:border-white/30"
                )}
              >
                Offerte aanvragen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { value: "500+", label: "Tevreden klanten" },
              { value: "15+", label: "Jaar ervaring" },
              { value: "24/7", label: "Spoedservice" },
              { value: "100%", label: "Gecertificeerd" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/8 backdrop-blur border border-white/15 rounded-2xl p-6 text-white"
              >
                <div className="text-3xl font-black text-orange-400 mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full text-background fill-current">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
