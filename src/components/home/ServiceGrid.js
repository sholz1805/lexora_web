const services = [
  {
    title: "Licensing & regulatory strategy",
    description: "End-to-end licensing support for regulated operators across African markets.",
  },
  {
    title: "Compliance operations",
    description: "Ongoing compliance management that keeps your business aligned with evolving regulations.",
  },
  {
    title: "Investigations & risk",
    description: "Proactive legal risk mitigation and investigative support for sensitive regulatory matters.",
  },
  {
    title: "Operational legal enablement",
    description: "Embedded legal infrastructure so your leadership can focus on growth.",
  },
];

export default function ServiceGrid() {
  return (
    <section className="space-y-8 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Why Lexora</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">A modern legal partner with enterprise-grade clarity.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          Lexora is designed to move fast with regulated businesses, simplifying licensing, compliance, and investigations through transparent legal operations.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-signal/30 hover:bg-surface">
            <div className="mb-4 h-2 w-16 rounded-full bg-signal"></div>
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
