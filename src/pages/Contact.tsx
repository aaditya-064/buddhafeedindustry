import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
            {t.nav.contact}
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <SectionHeading
                heading={t.contact.heading}
                centered={false}
              />
              
              <div className="space-y-6">
                {/* Company Name */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 40 40" className="w-6 h-6 text-brand-600" fill="currentColor">
                      <circle cx="20" cy="14" r="6" opacity="0.9" />
                      <path d="M20 22 C14 22 10 28 10 34 L30 34 C30 28 26 22 20 22Z" opacity="0.7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {lang === "ne" ? company.nameNe : company.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">{company.industry}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.footer.location}</h3>
                    <p className="text-gray-600 mt-0.5">
                      {lang === "ne" ? company.locationNe : company.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {lang === "ne" ? "फोन" : "Phone"}
                    </h3>
                    <div className="mt-1 space-y-1">
                      {company.phone.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-brand-600 hover:text-brand-700 transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {lang === "ne" ? "इमेल" : "Email"}
                    </h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-brand-600 hover:text-brand-700 transition-colors mt-0.5 block"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.contact.hours}</h3>
                    <p className="text-gray-600 mt-0.5">{t.contact.hoursText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-6 text-center">
                  {lang === "ne" ? "सम्पर्क गर्नुहोस्" : "Reach Out to Us"}
                </h3>
                <div className="space-y-4">
                  {company.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors shadow-md"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{t.contact.call}: {phone}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white border-2 border-brand-600 text-brand-600 rounded-xl font-semibold hover:bg-brand-50 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{t.contact.email}</span>
                  </a>
                  <a
                    href={company.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-md"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>{t.contact.maps}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64 sm:h-80 bg-gray-100 flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-brand-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">{company.location}</p>
              <a
                href={company.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-brand-600 hover:text-brand-700 text-sm font-medium"
              >
                {t.contact.maps} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
