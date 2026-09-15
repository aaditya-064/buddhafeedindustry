import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Factory } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import DirectorCard from "../components/DirectorCard";
import Timeline from "../components/Timeline";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Replace src with actual company photograph */}
        <div className="absolute inset-0">
          <img
            src="/images/company-hero-placeholder.jpg"
            alt="Buddha Dana Udhyog manufacturing facility"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          {/* Fallback gradient when no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900"></div>
          {/* Radial glow for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.3)_0%,_transparent_70%)]"></div>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Decorative mandala-inspired pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="heroPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.3" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.2" />
                  <path d="M50 30 C50 30 55 40 50 50 C45 40 50 30 50 30Z" fill="none" stroke="white" strokeWidth="0.3" />
                  <path d="M50 30 C50 30 60 37 58 47 C52 41 50 30 50 30Z" fill="none" stroke="white" strokeWidth="0.3" />
                  <path d="M50 30 C50 30 40 37 42 47 C48 41 50 30 50 30Z" fill="none" stroke="white" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroPattern)" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-200 text-sm sm:text-base uppercase tracking-widest mb-4 animate-fade-in-up">
            {t.hero.tagline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {lang === "ne" ? company.nameNe : company.name}
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 rounded-lg font-semibold hover:bg-brand-50 transition-colors shadow-lg"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading heading={t.aboutPreview.heading} centered={false} />
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                {t.aboutPreview.description}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                {t.aboutPreview.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <Calendar className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-brand-700 font-[family-name:var(--font-heading)]">
                  {lang === "ne" ? company.foundedNe : company.founded}
                </p>
                <p className="text-sm text-gray-500 mt-1">{t.aboutPreview.foundedLabel}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <Factory className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-brand-700 font-[family-name:var(--font-heading)]">
                  {lang === "ne" ? company.plantEstablishedNe : company.plantEstablished}
                </p>
                <p className="text-sm text-gray-500 mt-1">{t.aboutPreview.plantLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.products.heading} subtitle={t.products.subtitle} />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            {t.products.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.products.map((_, index) => (
              <ProductCard key={index} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
            >
              {t.products.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-warm-50 lotus-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.timeline.heading} subtitle={t.timeline.subtitle} />
          <Timeline />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.leadership.heading} subtitle={t.leadership.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {company.directors.map((_, index) => (
              <DirectorCard key={index} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.quality.heading} subtitle={t.quality.subtitle} light />
          <p className="text-center text-brand-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.quality.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.quality.values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-gold-400 mb-2">{value.title}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {lang === "ne" ? "थप जान्नुहोस्" : "Learn More"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Preview */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.facilities.heading} subtitle={t.facilities.subtitle} />
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-100 to-brand-50 h-64 sm:h-80 lg:h-96 flex items-center justify-center border border-brand-200">
            <div className="text-center p-6">
              <Factory className="w-16 h-16 text-brand-400 mx-auto mb-4" />
              <p className="text-brand-700 font-medium">{t.facilities.note}</p>
              <p className="text-sm text-brand-500 mt-2">{company.location}</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              {lang === "ne" ? "सुविधाहरू हेर्नुहोस्" : "View Facilities"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading heading={t.contact.heading} subtitle={t.contact.subtitle} />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {company.phone.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-600 text-brand-600 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
            >
              {t.contact.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
