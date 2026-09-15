import { company } from "../lib/company";
import { useLanguage } from "../context/LanguageContext";

interface ProductCardProps {
  index: number;
}

export default function ProductCard({ index }: ProductCardProps) {
  const { lang } = useLanguage();
  const product = company.products[index];
  const displayName = lang === "ne" ? product.nameNe : product.name;

  const colors = [
    "from-brand-600 to-brand-800",
    "from-brand-500 to-brand-700",
    "from-brand-700 to-brand-900",
    "from-brand-600 to-brand-800",
  ];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Product Image Placeholder */}
      <div className={`h-48 sm:h-56 bg-gradient-to-br ${colors[index]} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                {displayName.charAt(0)}
              </span>
            </div>
          </div>
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
          {displayName}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {lang === "ne" ? "पशु आहार" : "Animal Feed Product"}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-500"></div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {lang === "ne" ? "गुणस्तरीय" : "Quality"}
          </span>
        </div>
      </div>
    </div>
  );
}
