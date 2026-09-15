import { company } from "../lib/company";
import { useLanguage } from "../context/LanguageContext";

interface ProductCardProps {
  index: number;
}

export default function ProductCard({ index }: ProductCardProps) {
  const { lang } = useLanguage();
  const product = company.products[index];
  const displayName = lang === "ne" ? product.nameNe : product.name;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden bg-warm-200">
        <img
          src={product.fallback}
          alt={displayName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal-800 font-[family-name:var(--font-heading)]">
          {displayName}
        </h3>
        <p className="mt-2 text-sm text-charcoal-500">
          {lang === "ne" ? "पशु आहार" : "Animal Feed Product"}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-500"></div>
          <span className="text-xs text-charcoal-400 uppercase tracking-wider">
            {lang === "ne" ? "गुणस्तरीय" : "Quality"}
          </span>
        </div>
      </div>
    </div>
  );
}
