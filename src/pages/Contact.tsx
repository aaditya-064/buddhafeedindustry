import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import { images } from "../lib/images";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.landscape}
          alt="Nepalese landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
              {t.nav.contact}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information - Split Layout */}
      <section className="py-20 lg:py-32 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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
                    <h3 className="font-semibold text-charcoal-800">
                      {lang === "ne" ? company.nameNe : company.name}
                    </h3>
                    <p className="text-sm text-charcoal-500 mt-0.5">{company.industry}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-800">{t.footer.location}</h3>
                    <p className="text-charcoal-600 mt-0.5">
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
                    <h3 className="font-semibold text-charcoal-800">
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
                    <h3 className="font-semibold text-charcoal-800">
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
                    <h3 className="font-semibold text-charcoal-800">{t.contact.hours}</h3>
                    <p className="text-charcoal-600 mt-0.5">{t.contact.hoursText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-charcoal-800 font-[family-name:var(--font-heading)] mb-6 text-center">
                  {lang === "ne" ? "सम्पर्क गर्नुहोस्" : "Reach Out to Us"}
                </h3>
                <div className="space-y-4">
                  {company.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{t.contact.call}: {phone}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white border-2 border-brand-600 text-brand-600 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{t.contact.email}</span>
                  </a>
                  <a
                    href={company.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-charcoal-800 text-white rounded-lg font-semibold hover:bg-charcoal-900 transition-colors shadow-md"
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

      {/* Large Location Image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.factory}
          alt="Company location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-2">
                {lang === "ne" ? "हामीलाई भेट्नुहोस्" : "Visit Us"}
              </h2>
              <p className="text-lg opacity-90 mb-4">{company.location}</p>
              <a
                href={company.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                {t.contact.maps}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
