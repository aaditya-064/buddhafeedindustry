import { Calendar, Factory, MapPin, Target, Heart, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import { images } from "../lib/images";
import SectionHeading from "../components/SectionHeading";
import DirectorCard from "../components/DirectorCard";

export default function About() {
  const { t, lang } = useLanguage();

  const values = [
    {
      icon: Target,
      title: lang === "ne" ? "प्रतिबद्धता" : "Commitment",
      description: lang === "ne"
        ? "गुणस्तरीय पशु आहार उत्पादनप्रति हाम्रो प्रतिबद्धता अटल छ।"
        : "Our commitment to producing quality animal feed remains unwavering.",
    },
    {
      icon: Heart,
      title: lang === "ne" ? "विश्वास" : "Trust",
      description: lang === "ne"
        ? "हामी हाम्रा ग्राहकहरूसँग दीर्घकालीन सम्बन्ध बनाउँछौं।"
        : "We build lasting relationships with our customers through consistent quality.",
    },
    {
      icon: Shield,
      title: lang === "ne" ? "इमान्डारिता" : "Integrity",
      description: lang === "ne"
        ? "हाम्रो व्यवसाय इमान्डारिता र पारदर्शितामा आधारित छ।"
        : "Our business is built on honesty and transparency in all dealings.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.factory}
          alt="Company facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
              {t.nav.about}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {lang === "ne" 
                ? "२०५८ बि.सं. देखि नेपालको कृषि क्षेत्रमा"
                : "Serving Nepal's agricultural sector since 2058 BS"}
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction - Split Layout */}
      <section className="py-20 lg:py-32 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-brand-600 text-sm uppercase tracking-widest mb-4 font-semibold">
                {lang === "ne" ? "हाम्रो कथा" : "Our Story"}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-charcoal-800 leading-tight mb-6">
                {lang === "ne" ? company.nameNe : company.name}
              </h2>
              <div className="w-20 h-1 bg-brand-600 mb-8"></div>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                {lang === "ne"
                  ? "बुद्ध दान उद्योग प्रा. लि. नेपालको एक प्रतिष्ठित पशु आहार उत्पादन कम्पनी हो। २०५८ बि.सं. मा स्थापित, हामी गुणस्तरीय आहार उत्पादनमा समर्पित छौं।"
                  : "Buddha Dana Udhyog Pvt. Ltd. is a distinguished animal feed manufacturing company in Nepal. Established in 2058 BS, we are dedicated to producing quality feed for livestock and poultry across the nation."}
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                {lang === "ne"
                  ? "२०७२ बि.सं. मा हाम्रो आधुनिक उत्पादन प्लान्ट स्थापनासँगै, हामीले नेपालका किसानहरूलाई भरपर्दो आहार प्रदान गर्ने आफ्नो क्षमता विस्तार गर्यौं।"
                  : "With the establishment of our modern production plant in 2072 BS, we expanded our ability to serve farmers with dependable feed solutions."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <Calendar className="w-10 h-10 text-brand-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-brand-600 font-[family-name:var(--font-heading)]">
                  {lang === "ne" ? "२०५८" : "2058"}
                </p>
                <p className="text-sm text-charcoal-500 mt-1">{t.aboutPreview.foundedLabel}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <Factory className="w-10 h-10 text-brand-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-brand-600 font-[family-name:var(--font-heading)]">
                  {lang === "ne" ? "२०७२" : "2072"}
                </p>
                <p className="text-sm text-charcoal-500 mt-1">{t.aboutPreview.plantLabel}</p>
              </div>
              <div className="col-span-2 bg-white rounded-lg p-6 shadow-md text-center">
                <MapPin className="w-10 h-10 text-brand-600 mx-auto mb-3" />
                <p className="text-lg font-semibold text-charcoal-800">
                  {lang === "ne" ? company.locationNe : company.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.factoryInterior}
          alt="Production facility interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
                {lang === "ne" ? "आधुनिक उत्पादन सुविधा" : "Modern Production Facility"}
              </h2>
              <p className="text-lg opacity-90">
                {lang === "ne"
                  ? "हाम्रो प्लान्ट गुणस्तरीय आहार उत्पादनको लागि डिजाइन गरिएको छ।"
                  : "Our plant is designed for quality feed production."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रा मूल्यहरू" : "Our Values"}
            subtitle={lang === "ne" ? "हामीलाई चलाउने सिद्धान्तहरू" : "The principles that guide us"}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-lg bg-warm-50 border border-warm-200">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 mb-3">{value.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-32 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.leadership.heading} subtitle={t.leadership.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {company.directors.map((_, index) => (
              <DirectorCard key={index} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <img
          src={images.placeholders.landscape}
          alt="Nepalese landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रो पहिचान" : "Our Identity"}
            subtitle={lang === "ne" ? "बुद्धको नामबाट प्रेरित, नेपालको मुटुबाट" : "Inspired by the name of Buddha, from the heart of Nepal"}
            light
          />
          <p className="text-lg text-charcoal-200 leading-relaxed max-w-2xl mx-auto">
            {lang === "ne"
              ? "हाम्रो कम्पनीको नाम 'बुद्ध' ले शान्ति, विश्वास र इमान्डारिताका मूल्यहरूलाई प्रतिबिम्बित गर्दछ। यी मूल्यहरू हाम्रो व्यवसायको हरेक पक्षमा मार्गदर्शन गर्छन्।"
              : "Our company's name 'Buddha' reflects the values of peace, trust, and integrity. These values guide every aspect of our business."}
          </p>
        </div>
      </section>
    </main>
  );
}
