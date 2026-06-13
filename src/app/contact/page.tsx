import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met InstaMonteur voor een offerte of spoedservice. Bereikbaar op werkdagen en in het weekend.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Telefoon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s|-/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${siteConfig.address.street} ${siteConfig.address.city}`
    )}`,
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: siteConfig.openingHours,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Heeft u een vraag of wilt u een offerte? Neem vrijblijvend contact op.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-black text-brand mb-6">Stuur ons een bericht</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                      Voornaam
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
                      Achternaam
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="de Vries"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="jan@email.nl"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="06 - 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                    Dienst
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="cv-ketel">CV-ketel &amp; verwarming</option>
                    <option value="elektra">Elektra &amp; bedrading</option>
                    <option value="loodgieterswerk">Loodgieterswerk</option>
                    <option value="airconditioning">Airconditioning</option>
                    <option value="ventilatie">Ventilatie (WTW)</option>
                    <option value="spoed">Spoedservice</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Omschrijving
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Beschrijf uw situatie of vraag..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 border-orange-500"
                >
                  Bericht versturen
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Wij reageren doorgaans binnen 1 werkdag. Voor spoed, bel direct.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-brand mb-6">Contactgegevens</h2>
              <div className="space-y-4 mb-8">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.label} className="border-border">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground font-medium text-sm hover:text-orange-500 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium text-sm">{item.value}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Emergency box */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                  <span className="font-bold text-orange-700">Spoedgeval? Bel direct!</span>
                </div>
                <p className="text-orange-700/80 text-sm mb-4">
                  Bij storingen en lekkages zijn wij 24/7 bereikbaar. Wij zijn er wanneer u ons
                  nodig heeft, ook in het weekend en op feestdagen.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                  className={cn(
                    buttonVariants(),
                    "w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold border-orange-500 justify-center"
                  )}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
