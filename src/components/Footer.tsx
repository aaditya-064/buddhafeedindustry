import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 text-gold-400" fill="currentColor">
                  <circle cx="20" cy="14" r="6" opacity="0.9" />
                  <path d="M20 22 C14 22 10 28 10 34 L30 34 C30 28 26 22 20 22Z" opacity="0.7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">{company.name}</p>
              </div>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: t.nav.home },
                { path: "/about", label: t.nav.about },
                { path: "/products", label: t.nav.products },
                { path: "/quality", label: t.nav.quality },
                { path: "/facilities", label: t.nav.facilities },
                { path: "/contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3">
              {company.phone.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-brand-200 hover:text-white text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-brand-200 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              {t.footer.location}
            </h3>
            <div className="flex items-start gap-2 text-brand-200 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>{company.location}</p>
            </div>
            <a
              href={company.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs text-gold-400 hover:text-gold-300 transition-colors"
            >
              {t.contact.maps} →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brand-300 text-xs">
              {t.footer.copyright}
            </p>
            <div className="gold-line w-full sm:w-32"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
