import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { navigation, siteConfig } from "@/lib/siteConfig";

const services = [
  { label: "CV-ketel installatie", href: "/diensten/cv-ketel" },
  { label: "Elektra & bedrading", href: "/diensten/elektra" },
  { label: "Loodgieterswerk", href: "/diensten/loodgieterswerk" },
  { label: "Airconditioning", href: "/diensten/airconditioning" },
  { label: "Ventilatie", href: "/diensten/ventilatie" },
  { label: "Spoedservice 24/7", href: "/diensten/spoed" },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-lg">
                IM
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                Insta<span className="text-orange-400">Monteur</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {siteConfig.description}
            </p>
            <div className="flex gap-2">
              {[
                { label: "FB", href: siteConfig.socials.facebook },
                { label: "IG", href: siteConfig.socials.instagram },
                { label: "LI", href: siteConfig.socials.linkedin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-orange-400 mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-orange-400 mb-4">
              Diensten
            </h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-orange-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                  {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">{siteConfig.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">
              Algemene voorwaarden
            </Link>
            <span>KvK: {siteConfig.kvk}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
