interface SectionHeadingProps {
  heading: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ heading, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] ${light ? "text-white" : "text-gray-900"}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base lg:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-brand-200" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 ${centered ? "mx-auto" : ""} w-16 h-0.5 bg-gradient-to-r from-brand-500 to-gold-400 rounded-full`}></div>
    </div>
  );
}
