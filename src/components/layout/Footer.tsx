import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  { label: "Loodgieter", href: "/loodgieter" },
  { label: "CV-ketel installatie", href: "/cv-ketels" },
  { label: "Warmtepomp", href: "/warmtepomp" },
  { label: "Spoed loodgieter", href: "/spoed-loodgieter" },
];

const cities = [
  { label: "Rotterdam", href: "/loodgieter-rotterdam" },
  { label: "Dordrecht", href: "/loodgieter-dordrecht" },
  { label: "Vlaardingen", href: "/loodgieter-vlaardingen" },
  { label: "Delft", href: "/loodgieter-delft" },
  { label: "Schiedam", href: "/loodgieter-schiedam" },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex -mt-14 -mb-12">
              <Image
                src="/Instamonteur-logo.png"
                alt="Insta Monteur"
                width={400}
                height={120}
                className="h-36 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5 -mt-6" style={{ fontFamily: "var(--font-display)" }}>
              Dé installatie monteur &amp; loodgieter in Rotterdam, Dordrecht, Delft, Vlaardingen en Schiedam.
            </p>
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

          {/* Steden */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-orange-400 mb-4">
              Werkgebied
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {cities.map((item) => (
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
          </div>
        </div>
      </div>
    </footer>
  );
}
