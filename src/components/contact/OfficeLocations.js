const offices = [
  {
    city: "Lagos",
    address:
      "Commercial advisory and regulatory coordination hub.",
  },

  {
    city: "Abuja",
    address:
      "Policy, licensing and federal regulatory engagement.",
  },

  {
    city: "Cross-Border",
    address:
      "Strategic international partnerships and recovery support.",
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Presence
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Positioned Where
            <br />
            Regulatory Decisions Happen.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {offices.map((office, index) => (
            <article
              key={index}
              className="rounded-[2rem] border border-muted bg-paper p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-signal">
                0{index + 1}
              </span>

              <h3 className="mt-6 font-display text-3xl tracking-tight text-ink">
                {office.city}
              </h3>

              <p className="mt-5 text-base leading-8 text-ink/70">
                {office.address}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}