import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacybeleid | Insta Monteur",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-[120px] pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-black text-brand text-4xl mb-8 leading-tight">Privacybeleid</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>
            Insta Monteur, gevestigd in Rotterdam, is verantwoordelijk voor de verwerking van
            persoonsgegevens zoals weergegeven in dit privacybeleid.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Contactgegevens</h2>
          <p>
            Insta Monteur<br />
            Zuid-Holland, Rotterdam<br />
            Telefoon: {siteConfig.phone}<br />
            E-mail: {siteConfig.email}
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Persoonsgegevens die wij verwerken</h2>
          <p>
            Insta Monteur verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten
            en/of omdat u deze zelf aan ons verstrekt. Dit betreft: naam, telefoonnummer,
            e-mailadres en adresgegevens die u invult via ons contactformulier.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Doel van de gegevensverwerking</h2>
          <p>
            Wij verwerken uw gegevens uitsluitend voor het afhandelen van uw aanvraag, het
            plannen van afspraken en het versturen van offertes. Uw gegevens worden nooit
            verkocht aan derden.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Bewaartermijn</h2>
          <p>
            Insta Monteur bewaart uw persoonsgegevens niet langer dan nodig is voor de doeleinden
            waarvoor ze zijn verzameld.
          </p>

          <h2 className="font-bold text-brand text-xl mt-8 mb-3">Uw rechten</h2>
          <p>
            U heeft het recht op inzage, correctie of verwijdering van uw persoonsgegevens.
            Stuur hiervoor een e-mail naar {siteConfig.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
