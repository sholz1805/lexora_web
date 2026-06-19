const offices = [
  {
    location: "Nigeria",
    details:
      "Deep local expertise. Practical legal solutions.",
  },

  {
    location: "Africa",
    details:
      "Strategic legal advisory for organisations expanding, operating, and investing across African markets. ",
  },

  {
    location: "Cross-Border",
    details:
      "Legal expertise for a connected world, as we support businesses beyond geographic boundaries.",
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
     
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Presence
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {/* Positioned Where
            <br />
            Regulatory Decisions Happen. */}
            Virtual. Responsive. Borderless.
          </h2>
        </div>

    
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
                {office.location}
              </h3>

              <p className="mt-5 text-base leading-6 text-ink/70">
                {office.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}