import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-charcoal-200 overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
          lang === "en"
            ? "bg-brand-600 text-white"
            : "bg-white text-charcoal-600 hover:bg-warm-100"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("ne")}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
          lang === "ne"
            ? "bg-brand-600 text-white"
            : "bg-white text-charcoal-600 hover:bg-warm-100"
        }`}
        aria-label="नेपालीमा स्विच गर्नुहोस्"
      >
        ने
      </button>
    </div>
  );
}
