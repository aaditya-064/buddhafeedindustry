import { useLanguage } from "../context/LanguageContext";
import { company } from "../lib/company";

export default function Timeline() {
  const { t, lang } = useLanguage();

  const milestones = [
    {
      year: lang === "ne" ? company.foundedNe : company.founded,
      text: t.timeline.milestone1Text,
    },
    {
      year: lang === "ne" ? company.plantEstablishedNe : company.plantEstablished,
      text: t.timeline.milestone2Text,
    },
  ];

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-300 via-brand-400 to-brand-300 sm:-translate-x-0.5"></div>

      <div className="space-y-10 sm:space-y-12">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative flex items-start gap-6 sm:gap-0 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow-md sm:-translate-x-2 -translate-x-2 z-10 mt-1"></div>

            {/* Content */}
            <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-3">
                  {milestone.year}
                </span>
                <p className="text-gray-700 leading-relaxed">
                  {milestone.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
