import { MapPin, Factory, Warehouse, Truck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import SectionHeading from "../components/SectionHeading";

export default function Facilities() {
  const { t, lang } = useLanguage();

  const facilityAreas = [
    {
      icon: Factory,
      title: lang === "ne" ? "उत्पादन प्लान्ट" : "Production Plant",
      description: lang === "ne"
        ? "हाम्रो मुख्य उत्पादन सुविधा जहाँ पशु आहार उत्पादन गरिन्छ।"
        : "Our main production facility where animal feed is manufactured.",
    },
    {
      icon: Warehouse,
      title: lang === "ne" ? "भण्डारण क्षेत्र" : "Storage Area",
      description: lang === "ne"
        ? "कच्चा पदार्थ र तयार उत्पादनहरूको उचित भण्डारण।"
        : "Proper storage for raw materials and finished products.",
    },
    {
      icon: Truck,
      title: lang === "ne" ? "ढुवानी" : "Distribution",
      description: lang === "ne"
        ? "हाम्रा उत्पादनहरू नेपालभरका ग्राहकहरूमा पुर्याउने व्यवस्था।"
        : "Systems for delivering our products to customers across Nepal.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
            {t.nav.facilities}
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl mx-auto">
            {t.facilities.subtitle}
          </p>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Facility Description */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 leading-relaxed text-base lg:text-lg">
            {t.facilities.description}
          </p>
        </div>
      </section>

      {/* Main Facility Image Placeholder */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-100 to-brand-50 h-64 sm:h-80 lg:h-[28rem] flex items-center justify-center border border-brand-200">
            <div className="text-center p-6">
              <Factory className="w-20 h-20 text-brand-400 mx-auto mb-4" />
              <p className="text-brand-700 font-medium text-lg">{t.facilities.note}</p>
              <div className="flex items-center justify-center gap-2 mt-3 text-brand-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{company.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Areas */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "सुविधा क्षेत्रहरू" : "Facility Areas"}
            subtitle={lang === "ne" ? "हाम्रो प्लान्टका प्रमुख भागहरू" : "Key areas of our plant"}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {facilityAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रो स्थान" : "Our Location"}
            subtitle={lang === "ne" ? "सियारी-०५, बाङ्गुसारी, नेपाल" : "Siyari-05, Banghusari, Nepal"}
          />
          <div className="mt-8">
            <a
              href={company.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
            >
              <MapPin className="w-5 h-5" />
              {t.contact.maps}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
