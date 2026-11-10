export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : ""}`}>
      {tag && (
        <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 ${centered ? "text-center" : ""}`}>
          {tag}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
