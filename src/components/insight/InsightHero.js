export default function InsightHero() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-signal/10 blur-3xl" />

      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-signal" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/70">
              Insights
            </p>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl xl:text-[4.8rem]">
              What You Need to Know
            </h1>

            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl xl:text-[4.8rem]">
              Before Your Regulators Call
            </h1>
          </div>

          {/* Copy */}
          <p className="mt-8 max-w-3xl text-base leading-8 text-paper/72 sm:text-lg sm:leading-9">
            Practical analysis of regulatory developments, enforcement
            patterns and compliance expectations across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}