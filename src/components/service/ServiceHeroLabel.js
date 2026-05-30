export default function ServiceHeroLabel({
  label,
  active,
}) {
  return (
    <div
      className={`absolute transition-all duration-700 ${
        active
          ? "translate-x-0 opacity-100"
          : "-translate-x-10 opacity-0"
      }`}
    >
      <div className="inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-signal" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/70">
          {label}
        </p>
      </div>
    </div>
  );
}