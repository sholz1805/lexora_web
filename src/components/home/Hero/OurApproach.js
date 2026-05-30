const processSteps = [
  {
    number: "01",
    title: "Align",
    text: "We map your regulatory exposure, operational context and strategic objectives. Every proposition is calibrated to your exact business situation.",
  },

  {
    number: "02",
    title: "Execute",
    text: "We take ownership of filings, regulator engagement, investigations, submissions and compliance implementation from end to end.",
  },

  {
    number: "03",
    title: "Embed",
    text: "We remain close to your operations by proactively anticipating the next regulatory requirement and identifying risks early.",
  },

  {
    number: "04",
    title: "Recover",
    text: "When situations escalate — fraud, enforcement or dispute — we move decisively with speed and precision.",
  },
];


export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24">
      {/* Glow */}
      <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Our Approach
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            We Execute.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-paper/70">
            Lexora is structured for execution. Every mandate
            moves through four distinct stages and we remain
            accountable throughout the lifecycle.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 grid gap-8 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Line */}
              {index !== processSteps.length - 1 && (
                <div className="absolute left-[60px] top-10 hidden h-px w-full bg-paper/10 lg:block" />
              )}

              <div className="relative z-10">
                {/* Dot */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-paper/10 bg-paper/5 text-xl font-semibold text-signal backdrop-blur-md">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="font-display text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-paper/68">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}