import { Calendar, Factory, MapPin, Target, Heart, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
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
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
            {t.nav.about}
          </h1>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                heading={lang === "ne" ? company.nameNe : company.name}
                centered={false}
              />
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                {t.aboutPreview.description}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {lang === "ne"
                  ? "हाम्रो यात्रा २०५८ बि.सं. मा सुरु भयो र २०७२ बि.सं. मा हाम्रो उत्पादन प्लान्ट स्थापनासँगै अर्को महत्त्वपूर्ण मोडमा पुग्यो। आज, हामी नेपालका किसान र पशुपालकहरूलाई सेवा प्रदान गर्न समर्पित छौं।"
                  : "Our journey began in 2058 BS and reached a significant milestone with the establishment of our production plant in 2072 BS. Today, we remain dedicated to serving farmers and livestock owners across Nepal."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <Calendar className="w-10 h-10 text-brand-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-brand-700 font-[family-name:var(--font-heading)]">
                  {lang === "ne" ? company.foundedNe : company.founded}
                </p>
                <p className="text-sm text-gray-500 mt-1">{t.aboutPreview.foundedLabel}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <Factory className="w-10 h-10 text-brand-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-brand-700 font-[family-name:var(--font-heading)]">
                  {lang === "ne" ? company.plantEstablishedNe : company.plantEstablished}
                </p>
                <p className="text-sm text-gray-500 mt-1">{t.aboutPreview.plantLabel}</p>
              </div>
              <div className="col-span-2 bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <MapPin className="w-10 h-10 text-brand-600 mx-auto mb-3" />
                <p className="text-lg font-semibold text-gray-800">
                  {lang === "ne" ? company.locationNe : company.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रा मूल्यहरू" : "Our Values"}
            subtitle={lang === "ne" ? "हामीलाई चलाउने सिद्धान्तहरू" : "The principles that guide us"}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-warm-50 border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading={t.leadership.heading} subtitle={t.leadership.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {company.directors.map((_, index) => (
              <DirectorCard key={index} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रो पहिचान" : "Our Identity"}
            subtitle={lang === "ne" ? "बुद्धको नामबाट प्रेरित, नेपालको मुटुबाट" : "Inspired by the name of Buddha, from the heart of Nepal"}
            light
          />
          <p className="text-brand-100 leading-relaxed max-w-2xl mx-auto">
            {lang === "ne"
              ? "हाम्रो कम्पनीको नाम 'बुद्ध' ले शान्ति, विश्वास र इमान्डारिताका मूल्यहरूलाई प्रतिबिम्बित गर्दछ। यी मूल्यहरू हाम्रो व्यवसायको हरेक पक्षमा मार्गदर्शन गर्छन् — गुणस्तरीय आहार उत्पादनदेखि हाम्रा ग्राहकहरूसँगको सम्बन्धसम्म।"
              : "Our company's name 'Buddha' reflects the values of peace, trust, and integrity. These values guide every aspect of our business — from producing quality feed to our relationships with customers."}
          </p>
        </div>
      </section>
    </main>
  );
}
