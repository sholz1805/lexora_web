export default function RelevantMandate({
  title,
  description,
  cta,
}) {
  return (
    <section className="mt-16 overflow-hidden rounded-[2rem] border border-signal/10 bg-panel p-8 sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-signal/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
            Relevant Mandate
          </span>

          <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h3>

          <p className="mt-5 text-base leading-8 text-ink/72">
            {description}
          </p>
        </div>

        {/* Right */}
        <button className="inline-flex w-fit items-center justify-center rounded-xl bg-signal px-7 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-deepSignal hover:shadow-soft cursor-pointer">
          {cta}
        </button>
      </div>
    </section>
  );
}