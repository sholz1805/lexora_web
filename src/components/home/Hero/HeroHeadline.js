export default function HeroHeadline({
  title,
  highlight,
  active,
}) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ${
        active
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      <div className="space-y-2">
        <h1 className="max-w-5xl font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
          {title}
        </h1>

        <h1 className="max-w-5xl font-display text-4xl leading-[1.05] tracking-tight text-signal sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
          {highlight}
        </h1>
      </div>
    </div>
  );
}