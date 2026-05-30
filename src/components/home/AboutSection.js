export default function AboutSection() {
  return (
    <section className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[1fr_1.05fr]">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">
        <div className="aspect-[4/3] bg-slate-900" />
        <div className="absolute inset-0 flex items-center justify-center px-6 py-8 text-center text-slate-100 sm:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Image placeholder</p>
            <p className="mt-4 text-lg font-semibold">Visual or brand imagery goes here</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Replace this section with your actual hero image, attorney portrait, or brand photography.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-signal">About Us</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Our journey to notarial eminence
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Lexora blends legal depth with practical delivery, guiding regulated businesses through licensing, compliance and investigations across African markets.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Trusted notarial counsel</p>
            <p className="mt-3 text-lg font-semibold text-slate-950">Modern legal oversight for regulated mandates.</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Practical regulatory depth</p>
            <p className="mt-3 text-lg font-semibold text-slate-950">A focused service model for fast-moving businesses.</p>
          </div>
        </div>

        <a
          href="/about"
          className="inline-flex w-full items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:bg-deepSignal sm:w-auto"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
