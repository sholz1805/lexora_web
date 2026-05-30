const steps = [
  {
    title: "1. Understand the mandate",
    description: "We map legal requirements, compliance triggers and operational scope before any engagement begins.",
  },
  {
    title: "2. Build the legal framework",
    description: "We design license and compliance journeys that align with both regulators and commercial objectives.",
  },
  {
    title: "3. Embed legal operations",
    description: "We stay in the business to manage approvals, audits and investigations until the legal function is stable.",
  },
];

export default function ApproachSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">How we work</p>
          <h2 className="text-3xl font-semibold">A practical process for legal certainty.</h2>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            Lexora's approach is designed to keep business moving while legal risks are handled with precision.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-[1.75rem] border border-slate-800 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.35em] text-signal">{step.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
