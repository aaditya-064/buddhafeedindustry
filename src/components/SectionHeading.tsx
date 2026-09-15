interface SectionHeadingProps {
  heading: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ heading, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] ${light ? "text-white" : "text-charcoal-800"}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base lg:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-charcoal-300" : "text-charcoal-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 ${centered ? "mx-auto" : ""} w-16 h-0.5 bg-brand-600 rounded-full`}></div>
    </div>
  );
}
