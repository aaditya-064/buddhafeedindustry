import { CheckCircle, Shield, Award, Users, Beaker, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "../components/SectionHeading";

export default function Quality() {
  const { t, lang } = useLanguage();

  const principles = [
    {
      icon: Shield,
      title: lang === "ne" ? "स्थिरता" : "Consistency",
      description: lang === "ne"
        ? "प्रत्येक ब्याच आहारले हाम्रा ग्राहकहरूले अपेक्षा गर्ने एउटै मापदण्ड पूरा गर्दछ। हामी सुनिश्चित गर्छौं कि गुणस्तरमा कुनै समझौता हुँदैन।"
        : "Every batch of feed meets the same standards our customers expect. We ensure there is no compromise on quality.",
    },
    {
      icon: Users,
      title: lang === "ne" ? "जिम्मेवारी" : "Responsibility",
      description: lang === "ne"
        ? "हामी खाद्य श्रृङ्खलामा हाम्रो भूमिकालाई गम्भीरतापूर्वक लिन्छौं — कच्चा पदार्थदेखि तयार उत्पादनसम्म।"
        : "We take our role in the food chain seriously — from raw materials to finished product.",
    },
    {
      icon: ClipboardCheck,
      title: lang === "ne" ? "अनुशासन" : "Discipline",
      description: lang === "ne"
        ? "हाम्रा सञ्चालनहरूले विश्वसनीयता सुनिश्चित गर्ने संरचित प्रक्रियाहरू अनुसरण गर्दछन्।"
        : "Our operations follow structured processes that ensure reliability.",
    },
    {
      icon: Award,
      title: lang === "ne" ? "हेरचाह" : "Care",
      description: lang === "ne"
        ? "हामी बुझ्छौं कि हाम्रो आहारले प्रत्यक्ष रूपमा पशुहरूको स्वास्थ्य र किसानहरूको जीविकोपार्जनलाई असर गर्दछ।"
        : "We understand that our feed directly impacts the health of animals and livelihoods of farmers.",
    },
  ];

  const practices = [
    lang === "ne" ? "कच्चा पदार्थको सावधानीपूर्वक चयन" : "Careful selection of raw materials",
    lang === "ne" ? "व्यवस्थित उत्पादन प्रक्रिया" : "Systematic production processes",
    lang === "ne" ? "नियमित गुणस्तर जाँच" : "Regular quality checks",
    lang === "ne" ? "सफा र व्यवस्थित प्लान्ट" : "Clean and organized plant operations",
    lang === "ne" ? "प्रशिक्षित जनशक्ति" : "Trained workforce",
    lang === "ne" ? "उचित भण्डारण र ढुवानी" : "Proper storage and handling",
  ];

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
            {t.nav.quality}
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl mx-auto">
            {t.quality.subtitle}
          </p>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Main Quality Statement */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {t.quality.description}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रा सिद्धान्तहरू" : "Our Core Principles"}
            subtitle={lang === "ne" ? "गुणस्तरीय उत्पादनको आधार" : "The foundation of quality production"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-warm-50 border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                  <principle.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Practices */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "उत्पादन अभ्यासहरू" : "Manufacturing Practices"}
            subtitle={lang === "ne" ? "हाम्रो दैनिक सञ्चालनमा गुणस्तर कसरी सुनिश्चित गरिन्छ" : "How quality is ensured in our daily operations"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {practices.map((practice, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Beaker className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">
            {lang === "ne" ? "हाम्रो प्रतिबद्धता" : "Our Commitment"}
          </h2>
          <p className="text-brand-100 leading-relaxed max-w-2xl mx-auto">
            {lang === "ne"
              ? "बुद्ध दान उद्योगमा, हामी विश्वास गर्छौं कि भरपर्दो आहार भरपर्दो अभ्यासबाट सुरु हुन्छ। हामी निरन्तर हाम्रा प्रक्रियाहरू सुधार गर्न र हाम्रा ग्राहकहरूलाई उत्तम सेवा प्रदान गर्न प्रतिबद्ध छौं।"
              : "At Buddha Dana Udhyog, we believe that dependable feed starts with dependable practices. We are committed to continuously improving our processes and serving our customers with the best we can offer."}
          </p>
        </div>
      </section>
    </main>
  );
}
