const areas = [
  {
    title: "Regulatory licensing",
    description: "Structured support for telecoms, banking, energy, digital payments and other regulated licenses.",
  },
  {
    title: "Compliance management",
    description: "Ongoing compliance systems, audits, reporting, and regulatory governance.",
  },
  {
    title: "Investigations",
    description: "Discreet investigations and risk response for sensitive regulatory matters.",
  },
  {
    title: "Cross-border counsel",
    description: "Legal infrastructure for businesses operating across African and international markets.",
  },
  {
    title: "Dispute advisory",
    description: "Practical resolution and defence support for regulatory disputes.",
  },
  {
    title: "Strategic advisory",
    description: "Policy, regulatory strategy and board-level risk guidance.",
  },
];

export default function PracticeAreas() {
  return (
    <section className="space-y-8 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Practice areas</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Legal services designed for regulated businesses.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          A practical service mix for organisations that need legal certainty, regulatory alignment and commercial speed.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {areas.map((area) => (
          <article key={area.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">✓</div>
            <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
