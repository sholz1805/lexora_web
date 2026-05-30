export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper sm:py-28">
      {/* Animated Glow */}
      <div className="absolute -left-24 top-10 h-[420px] w-[420px] animate-pulse rounded-full bg-signal/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] animate-pulse rounded-full bg-paper/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 lg:px-12">
        <div className="overflow-hidden rounded-[2.5rem] border border-paper/10 bg-paper/5 p-10 backdrop-blur-md sm:p-14">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-signal" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/70">
                Let’s Get To Work
              </p>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                Ready to Execute?
              </h2>

              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl">
                Structured to Act.
              </h2>
            </div>

            {/* Copy */}
            <p className="mt-8 max-w-3xl text-base leading-8 text-paper/72 sm:text-lg sm:leading-9">
              Whether you need to secure a licence,
              build compliance infrastructure,
              resolve a regulatory issue or recover
              assets, Lexora is structured to act.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <button className="inline-flex w-full items-center justify-center sm:w-auto rounded-xl bg-signal px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-deepSignal hover:shadow-soft cursor-pointer">
                Start a Mandate
              </button>

              <button className="inline-flex w-full items-center justify-center sm:w-auto rounded-xl border border-paper/15 bg-paper/5 px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:border-paper/30 hover:bg-paper/10 cursor-pointer">
                Speak to a Legal Partner
              </button>
            </div>

            {/* Free Call */}
            <div className="mt-10">
              <button className="text-sm font-semibold text-signal transition hover:translate-x-1 cursor-pointer">
                Book a 30-Minute Scoping Call [FREE] →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}