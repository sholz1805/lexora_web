const industries = [
  {
    icon: "⊕",
    title: "Financial Services & Fintech",
    points: [
      "CBN licensing",
      "AML/KYC obligations",
      "Payment systems regulation",
    ],
  },

  {
    icon: "◇",
    title: "Digital Assets & Emerging Tech",
    points: [
      "VASP registration",
      "Data governance",
      "NITDA compliance",
    ],
  },

  {
    icon: "⬡",
    title: "Energy & Infrastructure",
    points: [
      "DPR approvals",
      "Environmental compliance",
      "Project finance structuring",
    ],
  },

  {
    icon: "↗",
    title: "International Trade & Logistics",
    points: [
      "Import/export licensing",
      "Customs compliance",
      "Cross-border structuring",
    ],
  },

  {
    icon: "✦",
    title: "Regulated Consumer Markets",
    points: [
      "NAFDAC approvals",
      "SON compliance",
      "Sector-specific licensing",
    ],
  },
];

export default function IndustryGrid() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Industries
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            We Operate Where Regulation is the Business Environment
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72">
            Lexora works with businesses where licensing,
            compliance, regulatory engagement and legal
            infrastructure directly affect operational continuity
            and growth.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group perspective h-[320px]"
            >
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 rounded-[2rem] border border-paper/10 bg-ink p-8 text-paper [backface-visibility:hidden]">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-paper/5 text-3xl text-signal">
                      {industry.icon}
                    </div>

                    <div>
                      <h3 className="font-display text-2xl leading-tight">
                        {industry.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-paper/60">
                        Hover to explore regulatory challenges
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-[2rem] border border-signal/20 bg-signal p-8 text-paper [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/70">
                        Key Challenges
                      </p>

                      <ul className="mt-6 space-y-4">
                        {industry.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="border-b border-paper/10 pb-3 text-sm leading-6"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold transition hover:gap-3">
                      See Our Work →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}