const proofPoints = [
  {
    title: "Execution Over Theory",
    text: "We own mandates end-to-end and remain accountable for outcomes.",
  },

  {
    title: "Regulatory Intelligence",
    text: "We understand how Nigerian regulators operate, their internal timelines and how to navigate them effectively.",
  },

  {
    title: "Cross-Border Capability",
    text: "We support clients operating across multiple African and international jurisdictions.",
  },

  {
    title: "Speed & Responsiveness",
    text: "In regulated markets, timing is a legal risk. We move at the pace your business demands.",
  },

  {
    title: "Commercial Alignment",
    text: "Every legal position we take is evaluated for commercial impact and operational practicality.",
  },

  {
    title: "Transparent Engagement",
    text: "We structure mandates with fixed scopes, clear deliverables and transparent engagement models.",
  },
];

export default function WhyChooseLexora() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Why Lexora
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Why Regulated Businesses Choose Lexora
          </h2>
        </div>

     
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-muted bg-paper px-8 py-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
            {[
              "FINTECH",
              "ENERGY",
              "TRADE",
              "INFRA",
              "DIGITAL",
              "CAPITAL",
            ].map((item, index) => (
              <div
                key={index}
                className="text-sm font-semibold tracking-[0.35em] text-ink/45"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Proof Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {proofPoints.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-muted bg-paper p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/20 hover:shadow-soft"
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-signal/10 blur-2xl transition duration-300 group-hover:bg-signal/20" />

              {/* Number */}
              <span className="relative z-10 text-sm font-semibold tracking-[0.22em] text-signal">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="relative z-10 mt-6 font-display text-2xl leading-tight tracking-tight text-ink">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="relative z-10 mt-5 h-px w-14 bg-signal/30" />

              {/* Text */}
              <p className="relative z-10 mt-6 text-base leading-6 text-ink/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}