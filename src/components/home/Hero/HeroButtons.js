export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-5">
      {/* Primary CTA */}
      <button
        className="group inline-flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl bg-signal px-8 py-4 text-[15px] font-semibold text-paper shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-deepSignal"
      >
        <span>Explore Capabilities</span>

        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      {/* Secondary CTA */}
      <button
        className="inline-flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl border border-muted/20 bg-glass/5 px-8 py-4 text-[15px] font-semibold text-paper backdrop-blur-md transition-all duration-300 hover:border-glass/40 hover:bg-paper/10"
      >
        Speak to a Legal Partner
      </button>
    </div>
  );
}