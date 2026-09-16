import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center bg-warm-50 pt-20">
      <div className="text-center px-4">
        <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-brand-600 font-[family-name:var(--font-heading)]">404</span>
        </div>
        <h1 className="text-3xl font-bold text-charcoal-800 font-[family-name:var(--font-heading)]">
          {t.notFound.title}
        </h1>
        <p className="mt-4 text-charcoal-600 max-w-md mx-auto">
          {t.notFound.description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
        >
          <Home className="w-4 h-4" />
          {t.notFound.cta}
        </Link>
      </div>
    </main>
  );
}
