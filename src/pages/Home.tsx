import { Link } from "react-router-dom";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import { images } from "../lib/images";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <main>
      {/* SECTION 1: Cinematic Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images.placeholders.hero}
            alt="Buddha Dana Udhyog manufacturing facility"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          {/* Eyebrow */}
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] mb-6 opacity-90">
            {lang === "ne" ? "बुद्ध दान उद्योग प्रा. लि." : "Buddha Dana Udhyog Pvt. Ltd."}
          </p>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6">
            {lang === "ne" ? "राम्रो वृद्धिको लागि आहार" : "Feed for Better Growth"}
          </h1>
          
          {/* Supporting text */}
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
            {lang === "ne" 
              ? "२०५८ बि.सं. देखि नेपालमा गुणस्तरीय पशु आहार उत्पादन"
              : "Quality animal feed manufacturing in Nepal since 2058 BS"}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
            >
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* SECTION 2: Company Introduction - Editorial Layout */}
      <section className="py-20 lg:py-32 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Headline */}
            <div>
              <p className="text-brand-600 text-sm uppercase tracking-widest mb-4 font-semibold">
                {lang === "ne" ? "हाम्रो बारेमा" : "About Us"}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-charcoal-800 leading-tight mb-6">
                {lang === "ne" 
                  ? "नेपालको कृषि क्षेत्रमा विश्वासिलो साझेदार"
                  : "A Trusted Partner in Nepal's Agricultural Sector"}
              </h2>
              <div className="w-20 h-1 bg-brand-600 mb-8"></div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-lg text-charcoal-600 leading-relaxed">
                {lang === "ne"
                  ? "बुद्ध दान उद्योग प्रा. लि. नेपालको एक प्रतिष्ठित पशु आहार उत्पादन कम्पनी हो। २०५८ बि.सं. मा स्थापित, हामी गुणस्तरीय आहार उत्पादनमा समर्पित छौं।"
                  : "Buddha Dana Udhyog Pvt. Ltd. is a distinguished animal feed manufacturing company in Nepal. Established in 2058 BS, we are dedicated to producing quality feed for livestock and poultry across the nation."}
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                {lang === "ne"
                  ? "२०७२ बि.सं. मा हाम्रो आधुनिक उत्पादन प्लान्ट स्थापनासँगै, हामीले नेपालका किसानहरूलाई भरपर्दो आहार प्रदान गर्ने आफ्नो क्षमता विस्तार गर्यौं।"
                  : "With the establishment of our modern production plant in 2072 BS, we expanded our ability to serve farmers with dependable feed solutions."}
              </p>
              
              {/* Key facts */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-charcoal-200">
                <div>
                  <p className="text-3xl font-bold text-brand-600 font-[family-name:var(--font-heading)]">
                    {lang === "ne" ? "२०५८" : "2058"}
                  </p>
                  <p className="text-sm text-charcoal-500 mt-1">
                    {lang === "ne" ? "बि.सं. मा स्थापना" : "BS - Founded"}
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-600 font-[family-name:var(--font-heading)]">
                    {lang === "ne" ? "२०७२" : "2072"}
                  </p>
                  <p className="text-sm text-charcoal-500 mt-1">
                    {lang === "ne" ? "बि.सं. मा प्लान्ट" : "BS - Plant Established"}
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors pt-4"
              >
                {lang === "ne" ? "थप जान्नुहोस्" : "Learn More"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Visual Company Story - Image Collage */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-600 text-sm uppercase tracking-widest mb-4 font-semibold">
              {lang === "ne" ? "हाम्रो सुविधा" : "Our Facility"}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-charcoal-800">
              {lang === "ne" ? "आधुनिक उत्पादन प्लान्ट" : "Modern Production Plant"}
            </h2>
          </div>

          {/* Editorial Image Collage */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* Large main image */}
            <div className="col-span-12 lg:col-span-8 aspect-[16/10] rounded-lg overflow-hidden">
              <img
                src={images.placeholders.factory}
                alt="Manufacturing facility exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Smaller stacked images */}
            <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4 lg:gap-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={images.placeholders.factoryInterior}
                  alt="Production machinery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={images.placeholders.storage}
                  alt="Storage facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-charcoal-800 text-charcoal-800 rounded-lg font-semibold hover:bg-charcoal-800 hover:text-white transition-all"
            >
              {lang === "ne" ? "सुविधाहरू हेर्नुहोस्" : "View Facilities"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Products Showcase - Premium Layout */}
      <section className="py-20 lg:py-32 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-600 text-sm uppercase tracking-widest mb-4 font-semibold">
              {lang === "ne" ? "हाम्रा उत्पादनहरू" : "Our Products"}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-charcoal-800 mb-4">
              {lang === "ne" ? "गुणस्तरीय आहार समाधान" : "Quality Feed Solutions"}
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              {lang === "ne"
                ? "पशुधन र कुखुराको स्वस्थ वृद्धिको लागि"
                : "For healthy growth of livestock and poultry"}
            </p>
          </div>

          {/* Product Grid - Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {company.products.map((product, index) => (
              <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
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
                  <div className="flex items-center gap-2 text-brand-600 font-semibold">
                    <span className="text-sm">{lang === "ne" ? "विवरण हेर्नुहोस्" : "Learn More"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
            >
              {lang === "ne" ? "सबै उत्पादनहरू" : "View All Products"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Agriculture Connection - Full Width Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images.placeholders.cattle}
            alt="Livestock in Nepal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-brand-300 text-sm uppercase tracking-widest mb-4 font-semibold">
              {lang === "ne" ? "कृषि सम्बन्ध" : "Agricultural Connection"}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6">
              {lang === "ne"
                ? "किसानहरूको सफलतामा सहयोग"
                : "Supporting Farmers' Success"}
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              {lang === "ne"
                ? "हाम्रो आहारले नेपालभरका पशुधन र कुखुराको स्वस्थ वृद्धि र उत्पादकत्वलाई सहयोग गर्दछ।"
                : "Our feed supports the healthy growth and productivity of livestock and poultry across Nepal, contributing to the success of farmers and their livelihoods."}
            </p>
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-charcoal-800 rounded-lg font-semibold hover:bg-warm-100 transition-colors shadow-lg"
            >
              {lang === "ne" ? "गुणस्तर हेर्नुहोस्" : "Our Quality"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Company History Timeline */}
      <section className="py-20 lg:py-32 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-600 text-sm uppercase tracking-widest mb-4 font-semibold">
              {lang === "ne" ? "हाम्रो यात्रा" : "Our Journey"}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-charcoal-800">
              {lang === "ne" ? "हाम्रो इतिहास" : "Our History"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-brand-600">
              <p className="text-3xl font-bold text-brand-600 font-[family-name:var(--font-heading)] mb-2">
                {lang === "ne" ? "२०५८ बि.सं." : "2058 BS"}
              </p>
              <h3 className="text-xl font-semibold text-charcoal-800 mb-3">
                {lang === "ne" ? "कम्पनी स्थापना" : "Company Founded"}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {lang === "ne"
                  ? "बुद्ध दान उद्योग प्रा. लि. को स्थापना गुणस्तरीय पशु आहार मार्फत नेपालको कृषि क्षेत्रमा योगदान पुर्‍याउने दृष्टिकोणसहित गरिएको थियो।"
                  : "Buddha Dana Udhyog Pvt. Ltd. was founded with a vision to contribute to Nepal's agricultural sector through quality animal feed."}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-brand-600">
              <p className="text-3xl font-bold text-brand-600 font-[family-name:var(--font-heading)] mb-2">
                {lang === "ne" ? "२०७२ बि.सं." : "2072 BS"}
              </p>
              <h3 className="text-xl font-semibold text-charcoal-800 mb-3">
                {lang === "ne" ? "प्लान्ट स्थापना" : "Plant Established"}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {lang === "ne"
                  ? "हाम्रो उत्पादन प्लान्ट स्थापना भयो, जसले नेपालभरका किसान र पशुधन मालिकहरूलाई सेवा प्रदान गर्ने हाम्रो क्षमतामा महत्त्वपूर्ण कदम चिह्नित गर्यो।"
                  : "Our production plant was established, marking a significant step in our ability to serve farmers and livestock owners across Nepal."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Leadership - Elegant Portraits */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-600 text-sm uppercase tracking-widest mb-4 font-semibold">
              {lang === "ne" ? "नेतृत्व" : "Leadership"}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-charcoal-800">
              {lang === "ne" ? "हाम्रा निर्देशकहरू" : "Our Directors"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {company.directors.map((director, index) => (
              <div key={index} className="text-center group">
                {/* Portrait */}
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-warm-200">
                  <img
                    src={director.fallback}
                    alt={lang === "ne" ? director.nameNe : director.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-bold text-charcoal-800 font-[family-name:var(--font-heading)] mb-1">
                  {lang === "ne" ? director.nameNe : director.name}
                </h3>
                <p className="text-brand-600 text-sm font-medium">
                  {lang === "ne" ? "निर्देशक" : "Director"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Contact CTA - Split Layout */}
      <section className="bg-charcoal-800 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="p-12 lg:p-20 flex items-center">
            <div>
              <p className="text-brand-400 text-sm uppercase tracking-widest mb-4 font-semibold">
                {lang === "ne" ? "सम्पर्क" : "Get In Touch"}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6">
                {lang === "ne"
                  ? "हामीलाई सम्पर्क गर्नुहोस्"
                  : "Let's Start a Conversation"}
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                {lang === "ne"
                  ? "हाम्रा उत्पादनहरूको बारेमा जान्न वा अर्डर गर्न हामीलाई कल गर्नुहोस्।"
                  : "Call us to learn about our products or place an order."}
              </p>
              
              <div className="space-y-4">
                {company.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-xl font-semibold hover:text-brand-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src={images.placeholders.landscape}
              alt="Nepalese landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
