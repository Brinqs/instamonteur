import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Insta Monteur",
  alternates: { canonical: `${siteConfig.url}/voorwaarden` },
  robots: { index: false, follow: false },
};

export default function VoorwaardenPage() {
  return (
    <section className="bg-white pt-[180px] pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-black text-brand text-4xl mb-8 leading-tight">Algemene Voorwaarden</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en
            overeenkomsten van Insta Monteur, gevestigd te Rotterdam.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Artikel 1 – Definities</h2>
          <p>
            Insta Monteur: de opdrachtnemer. Opdrachtgever: de partij die een opdracht verstrekt
            aan Insta Monteur.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Artikel 2 – Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle overeenkomsten tussen Insta Monteur en
            de opdrachtgever, tenzij uitdrukkelijk schriftelijk anders overeengekomen.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Artikel 3 – Offertes</h2>
          <p>
            Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld.
            Insta Monteur behoudt zich het recht voor een opdracht te weigeren.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Artikel 4 – Betaling</h2>
          <p>
            Betaling dient te geschieden binnen 14 dagen na factuurdatum. Bij niet tijdige
            betaling is de opdrachtgever in verzuim en zijn wettelijke rente en
            incassokosten verschuldigd.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Artikel 5 – Garantie</h2>
          <p>
            Insta Monteur staat in voor de kwaliteit van het uitgevoerde werk. Op arbeidskosten
            geldt een garantietermijn van 3 maanden, op materialen de fabrieksgarantie.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Contact</h2>
          <p>
            Voor vragen over deze voorwaarden kunt u contact opnemen via {siteConfig.email} of
            bellen naar {siteConfig.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
