import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="py-20 bg-brand relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Klaar om te starten?
        </h2>
        <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
          Neem vandaag nog contact op voor een gratis offerte of directe hulp.
          Wij staan klaar voor u.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-orange-500 hover:bg-orange-600 text-white font-bold text-base h-12 px-8 border-orange-500"
            )}
          >
            <Phone className="w-5 h-5 mr-2" />
            Bel ons: {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/30 text-white hover:bg-white/10 font-semibold h-12 px-8 bg-transparent dark:border-white/30"
            )}
          >
            Offerte aanvragen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
