import { MapPin, Factory, Warehouse, Truck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import { images } from "../lib/images";
import SectionHeading from "../components/SectionHeading";

export default function Facilities() {
  const { t, lang } = useLanguage();

  const galleryImages = [
    { src: images.placeholders.factory, alt: "Factory exterior", span: "col-span-2 row-span-2" },
    { src: images.placeholders.factoryInterior, alt: "Production machinery", span: "col-span-1 row-span-1" },
    { src: images.placeholders.storage, alt: "Storage facility", span: "col-span-1 row-span-1" },
    { src: images.placeholders.silos, alt: "Grain silos", span: "col-span-1 row-span-1" },
    { src: images.placeholders.feed, alt: "Feed production", span: "col-span-1 row-span-1" },
  ];

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
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={images.placeholders.factory}
          alt="Manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
              {t.nav.facilities}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t.facilities.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Facility Description */}
      <section className="py-20 lg:py-32 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-charcoal-700 leading-relaxed">
            {t.facilities.description}
          </p>
        </div>
      </section>

      {/* Image Gallery - Masonry Style */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "सुविधा ग्यालेरी" : "Facility Gallery"}
            subtitle={lang === "ne" ? "हाम्रो उत्पादन सुविधाका झलकहरू" : "Glimpses of our production facility"}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} rounded-lg overflow-hidden group cursor-pointer`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Areas */}
      <section className="py-20 lg:py-32 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading={lang === "ne" ? "सुविधा क्षेत्रहरू" : "Facility Areas"}
            subtitle={lang === "ne" ? "हाम्रो प्लान्टका प्रमुख भागहरू" : "Key areas of our plant"}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {facilityAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 mb-3">{area.title}</h3>
                <p className="text-charcoal-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <img
          src={images.placeholders.landscape}
          alt="Nepalese landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <SectionHeading
            heading={lang === "ne" ? "हाम्रो स्थान" : "Our Location"}
            subtitle={company.location}
            light
          />
          <div className="mt-8">
            <a
              href={company.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg"
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
