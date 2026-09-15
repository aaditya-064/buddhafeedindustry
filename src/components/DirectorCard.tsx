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
      <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-brand-100 to-brand-50 border-2 border-brand-200 flex items-center justify-center overflow-hidden mb-4 group-hover:border-brand-400 transition-colors">
        <span className="text-2xl sm:text-3xl font-bold text-brand-700 font-[family-name:var(--font-heading)]">
          {director.name.split(" ").map(n => n[0]).join("")}
        </span>
        {/* Subtle decorative ring */}
        <div className="absolute inset-1 rounded-full border border-gold-400/30"></div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 font-[family-name:var(--font-heading)]">
        {displayName}
      </h3>
      <p className="text-sm text-brand-600 mt-1">
        {lang === "ne" ? "निर्देशक" : "Director"}
      </p>
    </div>
  );
}
