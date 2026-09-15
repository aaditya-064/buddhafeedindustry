import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
          lang === "en"
            ? "bg-brand-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-50"
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
            : "bg-white text-gray-600 hover:bg-gray-50"
        }`}
        aria-label="नेपालीमा स्विच गर्नुहोस्"
      >
        ने
      </button>
    </div>
  );
}
