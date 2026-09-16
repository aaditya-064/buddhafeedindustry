import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import { images } from "../lib/images";
import SectionHeading from "../components/SectionHeading";

export default function Products() {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.feed}
          alt="Animal feed products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
              {t.nav.products}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Products Introduction */}
      <section className="py-20 lg:py-32 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-charcoal-600 leading-relaxed">
            {t.products.description}
          </p>
        </div>
      </section>

      {/* Products Grid - Large Cards */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {company.products.map((product, index) => (
              <div key={index} className="group bg-warm-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden bg-warm-200">
                  <img
                    src={product.fallback}
                    alt={lang === "ne" ? product.nameNe : product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-charcoal-800 font-[family-name:var(--font-heading)] mb-2">
                    {lang === "ne" ? product.nameNe : product.name}
                  </h3>
                  <p className="text-charcoal-600 mb-4">
                    {lang === "ne" ? "पशु आहार" : "Animal Feed Product"}
                  </p>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
                    {lang === "ne"
                      ? "गुणस्तरीय पशु आहार जसले स्वस्थ वृद्धि र उत्पादकत्वलाई सहयोग गर्दछ।"
                      : "Quality animal feed supporting healthy growth and productivity."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy - Split Layout */}
      <section className="py-20 lg:py-32 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                heading={lang === "ne" ? "हाम्रो उत्पादन दर्शन" : "Our Product Philosophy"}
                subtitle={lang === "ne" ? "गुणस्तर र स्थिरतामा आधारित" : "Built on quality and consistency"}
                centered={false}
              />
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                      {lang === "ne" ? "गुणस्तरीय सामग्री" : "Quality Inputs"}
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {lang === "ne"
                        ? "हामी हाम्रा आहार उत्पादनहरूमा प्रयोग हुने कच्चा पदार्थहरूको चयनमा ध्यान दिन्छौं।"
                        : "We pay careful attention to the selection of raw materials used in our feed products."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                      {lang === "ne" ? "स्थिर उत्पादन" : "Consistent Production"}
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {lang === "ne"
                        ? "हाम्रा उत्पादन प्रक्रियाहरूले प्रत्येक ब्याचमा एकरूपता सुनिश्चित गर्छन्।"
                        : "Our production processes ensure uniformity across every batch."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                      {lang === "ne" ? "किसान केन्द्रित" : "Farmer Focused"}
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {lang === "ne"
                        ? "हामी नेपालका किसान र पशुपालकहरूको आवश्यकता बुझ्छौं।"
                        : "We understand the needs of farmers and livestock owners in Nepal."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img
                src={images.placeholders.feed}
                alt="Feed production"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-24 bg-charcoal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            {lang === "ne" ? "हाम्रा उत्पादनहरूको बारेमा जान्न चाहनुहुन्छ?" : "Interested in our products?"}
          </h2>
          <p className="text-lg text-charcoal-300 mb-8">
            {lang === "ne" ? "हामीलाई सम्पर्क गर्नुहोस्" : "Get in touch with us"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {company.phone.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
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
