import { company } from "../lib/company";
import { useLanguage } from "../context/LanguageContext";

interface DirectorCardProps {
  index: number;
}

export default function DirectorCard({ index }: DirectorCardProps) {
  const { lang } = useLanguage();
  const director = company.directors[index];
  const displayName = lang === "ne" ? director.nameNe : director.name;

  return (
    <div className="group text-center">
      {/* Portrait */}
      <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 bg-warm-200 border-2 border-warm-300 group-hover:border-brand-400 transition-colors">
        <img
          src={director.fallback}
          alt={displayName}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-lg font-semibold text-charcoal-800 font-[family-name:var(--font-heading)]">
        {displayName}
      </h3>
      <p className="text-sm text-brand-600 mt-1">
        {lang === "ne" ? "निर्देशक" : "Director"}
      </p>
    </div>
  );
}
