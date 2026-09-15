import { CheckCircle, Shield, Award, Users, Beaker, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { images } from "../lib/images";
import SectionHeading from "../components/SectionHeading";

export default function Quality() {
  const { t, lang } = useLanguage();

  const principles = [
    {
      icon: Shield,
      title: lang === "ne" ? "स्थिरता" : "Consistency",
      description: lang === "ne"
        ? "प्रत्येक ब्याच आहारले हाम्रा ग्राहकहरूले अपेक्षा गर्ने एउटै मापदण्ड पूरा गर्दछ।"
        : "Every batch of feed meets the same standards our customers expect.",
    },
    {
      icon: Users,
      title: lang === "ne" ? "जिम्मेवारी" : "Responsibility",
      description: lang === "ne"
        ? "हामी खाद्य श्रृङ्खलामा हाम्रो भूमिकालाई गम्भीरतापूर्वक लिन्छौं।"
        : "We take our role in the food chain seriously.",
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
        ? "हामी बुझ्छौं कि हाम्रो आहारले पशुहरूको स्वास्थ्य र किसानहरूको जीविकोपार्जनलाई असर गर्दछ।"
        : "We understand that our feed impacts animal health and farmers' livelihoods.",
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
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.factoryInterior}
          alt="Manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
              {t.nav.quality}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t.quality.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Quality Statement */}
      <section className="py-20 lg:py-32 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-charcoal-700 leading-relaxed">
              {t.quality.description}
            </p>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.factory}
          alt="Production facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
                {lang === "ne" ? "कच्चा पदार्थदेखि तयार उत्पादनसम्म" : "From Raw Materials to Finished Feed"}
              </h2>
              <p className="text-lg opacity-90">
                {lang === "ne"
                  ? "हाम्रो उत्पादन प्रक्रिया गुणस्तर र स्थिरतामा केन्द्रित छ।"
                  : "Our production process focuses on quality and consistency."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रा सिद्धान्तहरू" : "Our Core Principles"}
            subtitle={lang === "ne" ? "गुणस्तरीय उत्पादनको आधार" : "The foundation of quality production"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg bg-warm-50 border border-warm-200">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center">
                  <principle.icon className="w-7 h-7 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-2">{principle.title}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Practices */}
      <section className="py-20 lg:py-32 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "उत्पादन अभ्यासहरू" : "Manufacturing Practices"}
            subtitle={lang === "ne" ? "हाम्रो दैनिक सञ्चालनमा गुणस्तर कसरी सुनिश्चित गरिन्छ" : "How quality is ensured in our daily operations"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {practices.map((practice, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <span className="text-charcoal-700 text-sm">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <img
          src={images.placeholders.storage}
          alt="Storage facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Beaker className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
            {lang === "ne" ? "हाम्रो प्रतिबद्धता" : "Our Commitment"}
          </h2>
          <p className="text-lg text-charcoal-200 leading-relaxed max-w-2xl mx-auto">
            {lang === "ne"
              ? "बुद्ध दान उद्योगमा, हामी विश्वास गर्छौं कि भरपर्दो आहार भरपर्दो अभ्यासबाट सुरु हुन्छ।"
              : "At Buddha Dana Udhyog, we believe that dependable feed starts with dependable practices."}
          </p>
        </div>
      </section>
    </main>
  );
}
