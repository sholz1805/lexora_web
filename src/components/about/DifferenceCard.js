export default function DifferenceCard({
  number,
  title,
  text,
}) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-muted bg-paper p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-soft">
      {/* Accent Glow */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-signal/10 blur-2xl transition-all duration-300 group-hover:bg-signal/20" />

      {/* Number */}
      <span className="relative z-10 text-sm font-semibold tracking-[0.2em] text-signal">
        {number}
      </span>

      {/* Title */}
      <h3 className="relative z-10 mt-6 text-2xl font-semibold leading-tight tracking-tight text-ink">
        {title}
      </h3>

      {/* Divider */}
      <div className="relative z-10 mt-5 h-px w-14 bg-signal/30" />

      {/* Text */}
      <p className="relative z-10 mt-6 max-w-sm text-base leading-8 text-ink/70">
        {text}
      </p>
    </article>
  );
}