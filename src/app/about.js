export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-ink">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div className="space-y-8">
              <div className="mb-8 h-[44px] overflow-hidden">
                <div className="inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
                    About Us
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Law That Works Inside Your Business
                </h1>

                <p className="max-w-3xl text-lg font-semibold leading-9 text-ink/80 sm:text-xl">
                  In highly regulated industries, legal and regulatory compliance is not a mere function. It is an infrastructure.
                </p>

                <p className="max-w-3xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
                  Lexora operates as an extension of your business. We take ownership of regulatory processes, compliance obligations, and legal risk so that your leadership team can focus on what they built the business to do.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden p-2">
                <div className="absolute -right-6 top-6 h-24 w-24 rounded-full bg-signal/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-md">
                  <div className="aspect-[4/3] w-full rounded-md bg-slate-200/40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_45%)]" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-4 text-sm text-ink/70">
                    <span>Placeholder visual</span>
                    <span className="px-2 py-0.5 text-xs uppercase tracking-[0.24em]">Image</span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="p-2 text-sm text-ink/75">
                      <p className="font-semibold text-ink">Visual asset</p>
                      <p className="mt-1">Placeholder for service imagery or team.</p>
                    </div>
                    <div className="p-2 text-sm text-ink/75">
                      <p className="font-semibold text-ink">Brand context</p>
                      <p className="mt-1">Small supporting visual or caption.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section>
          <div className="relative left-1/2 -translate-x-1/2 w-screen bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.35em] text-signal">What we do</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Five capability pillars that keep regulated businesses moving.
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Licensing & Regulatory Approvals",
                description: "Full lifecycle engagement across regulators.",
              },
              {
                title: "Compliance Management",
                description: "Embedded workflows and ongoing governance.",
              },
              {
                title: "Legal Partnership (Retainer)",
                description: "A retained team aligned to your operations.",
              },
              {
                title: "Investigations & Asset Recovery",
                description: "Fast, confident resolution for high-risk matters.",
              },
              {
                title: "Transactions & Structuring",
                description: "Risk-aware commercial structuring support.",
              },
            ].map((item) => (
              <div key={item.title} className="group p-4 transition-transform hover:-translate-y-1">
                <div className="mb-3 h-8 w-8 flex items-center justify-center text-signal">•</div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
 </div>
              <div className="mt-10">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-ink">
              <span className="h-2 w-2 rounded-full bg-signal" />
              Our approach
            </div>
              <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Execution Over Theory', description: 'We take ownership of mandates.' },
                { title: 'Regulatory Intelligence', description: 'We understand how regulators think, move, and respond.' },
                { title: 'Commercial Alignment', description: 'Your business objectives set the direction. We ensure the law does not block them.' },
              ].map((item) => (
                <div key={item.title} className="p-4">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.description}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
