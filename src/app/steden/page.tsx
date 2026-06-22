import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Steden | Insta Monteur",
  description: "Insta Monteur is actief als loodgieter in Rotterdam, Dordrecht, Delft, Schiedam en Vlaardingen. Bekijk onze pagina per stad.",
  alternates: { canonical: `${siteConfig.url}/steden` },
};

const steden = [
  {
    naam: "Rotterdam",
    href: "/loodgieter-rotterdam",
    omschrijving: "Onze thuisbasis. Actief in alle Rotterdamse wijken, van Centrum tot IJsselmonde.",
    illustratie: "/images/stad-rotterdam-2d.png",
  },
  {
    naam: "Dordrecht",
    href: "/loodgieter-dordrecht",
    omschrijving: "Snel ter plaatse in Dordrecht en directe omgeving.",
    illustratie: "/images/stad-dordrecht-2d.png",
  },
  {
    naam: "Delft",
    href: "/loodgieter-delft",
    omschrijving: "Vakkundige loodgieter actief in heel Delft.",
    illustratie: "/images/stad-delft-2d.png",
  },
  {
    naam: "Schiedam",
    href: "/loodgieter-schiedam",
    omschrijving: "Loodgieterswerk in Schiedam en directe omgeving.",
    illustratie: "/images/stad-schiedam-2d.png",
  },
  {
    naam: "Vlaardingen",
    href: "/loodgieter-vlaardingen",
    omschrijving: "Betrouwbare loodgieter in Vlaardingen.",
    illustratie: "/images/stad-vlaardingen-2d.png",
  },
];

export default function StedenpaginaPage() {
  return (
    <main className="bg-white pt-[140px] pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6" style={{ animation: "fadeUpIn 0.5s ease both" }}>
            <div className="w-10 h-[3px] bg-orange-500 rounded-full" />
            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">Werkgebied</span>
          </div>
          <h1 className="font-black text-brand leading-[0.9] tracking-[-0.04em] mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", animation: "fadeUpIn 0.5s ease 80ms both" }}>
            Onze <span className="text-orange-500">steden</span>
          </h1>
          <p className="text-foreground/50 text-lg max-w-xl leading-relaxed" style={{ animation: "fadeUpIn 0.5s ease 160ms both" }}>
            Insta Monteur is actief als loodgieter in Rotterdam en de regio. Kies jouw stad voor lokale informatie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steden.map((stad, i) => (
            <Link
              key={stad.naam}
              href={stad.href}
              className="group flex flex-col border-2 border-border rounded-2xl overflow-hidden hover:border-brand transition-colors"
              style={{ animation: `fadeUpIn 0.5s ease both`, animationDelay: `${300 + i * 80}ms` }}
            >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={stad.illustratie}
                    alt={`Illustratie ${stad.naam}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-black text-xl text-brand mb-2">{stad.naam}</h2>
                  <p className="text-sm text-foreground/50 leading-relaxed flex-1">{stad.omschrijving}</p>
                  <div className="flex items-center gap-2 mt-5 text-sm font-bold text-brand group-hover:text-orange-500 transition-colors">
                    Bekijk pagina
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
