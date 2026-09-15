import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { path: "/", key: "home" as const },
  { path: "/about", key: "about" as const },
  { path: "/products", key: "products" as const },
  { path: "/quality", key: "quality" as const },
  { path: "/facilities", key: "facilities" as const },
  { path: "/contact", key: "contact" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 40 40" className="w-6 h-6 lg:w-7 lg:h-7 text-gold-400" fill="currentColor">
                <circle cx="20" cy="14" r="6" opacity="0.9" />
                <path d="M20 22 C14 22 10 28 10 34 L30 34 C30 28 26 22 20 22Z" opacity="0.7" />
                <path d="M20 4 C20 4 22 8 20 12 C18 8 20 4 20 4Z" opacity="0.5" />
                <path d="M14 6 C14 6 18 9 17 13 C14 10 14 6 14 6Z" opacity="0.4" />
                <path d="M26 6 C26 6 22 9 23 13 C26 10 26 6 26 6Z" opacity="0.4" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm lg:text-base font-semibold text-brand-800 leading-tight font-[family-name:var(--font-heading)]">
                {company.name}
              </p>
              <p className="text-xs text-gray-500">{t.nav.home === "Home" ? "Animal Feed Manufacturing" : "पशु आहार उत्पादन"}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-brand-700 bg-brand-50"
                    : "text-gray-700 hover:text-brand-600 hover:bg-brand-50/50"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 lg:gap-3">
            <LanguageSwitcher />
            <a
              href={`tel:${company.phone[0]}`}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callUs}</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-brand-700 bg-brand-50"
                  : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              }`}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <a
            href={`tel:${company.phone[0]}`}
            className="flex items-center gap-2 px-4 py-3 mt-2 bg-brand-600 text-white rounded-lg text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>{t.nav.callUs}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
