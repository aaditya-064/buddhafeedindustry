import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
            {t.nav.products}
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-base lg:text-lg">
            {t.products.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {company.products.map((_, index) => (
              <ProductCard key={index} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रो उत्पादन दर्शन" : "Our Product Philosophy"}
            subtitle={lang === "ne" ? "गुणस्तर र स्थिरतामा आधारित" : "Built on quality and consistency"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                {lang === "ne" ? "गुणस्तरीय सामग्री" : "Quality Inputs"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === "ne"
                  ? "हामी हाम्रा आहार उत्पादनहरूमा प्रयोग हुने कच्चा पदार्थहरूको चयनमा ध्यान दिन्छौं।"
                  : "We pay careful attention to the selection of raw materials used in our feed products."}
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                {lang === "ne" ? "स्थिर उत्पादन" : "Consistent Production"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === "ne"
                  ? "हाम्रा उत्पादन प्रक्रियाहरूले प्रत्येक ब्याचमा एकरूपता सुनिश्चित गर्छन्।"
                  : "Our production processes ensure uniformity across every batch."}
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                {lang === "ne" ? "विश्वसनीयता" : "Reliability"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === "ne"
                  ? "हाम्रा ग्राहकहरूले हाम्रो आहारमा भर पर्न सक्छन्।"
                  : "Our customers can depend on our feed products consistently."}
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-[family-name:var(--font-heading)]">
                {lang === "ne" ? "किसान केन्द्रित" : "Farmer Focused"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === "ne"
                  ? "हामी नेपालका किसान र पशुपालकहरूको आवश्यकता बुझ्छौं।"
                  : "We understand the needs of farmers and livestock owners in Nepal."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
            {lang === "ne" ? "हाम्रा उत्पादनहरूको बारेमा जान्न चाहनुहुन्छ?" : "Interested in our products?"}
          </h2>
          <p className="mt-3 text-gray-600">
            {lang === "ne" ? "हामीलाई सम्पर्क गर्नुहोस्" : "Get in touch with us"}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {company.phone.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
