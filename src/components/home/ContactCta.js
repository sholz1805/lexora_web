export default function ContactCta() {
  return (
    <section className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Ready to move faster?</p>
          <h2 className="mt-3 text-3xl font-semibold">Book a scoping call with Lexora.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Start the conversation about your licensing, compliance or investigations mandate and see how we can help you operate with confidence.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:bg-deep-signal"
          >
            Book a call
          </a>
          <a
            href="/service"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
