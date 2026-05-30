import DifferenceCard from "./DifferenceCard";

const differences = [
  {
    number: "01",

    title: "Execution Over Theory",

    text: "We take ownership of mandates.",
  },

  {
    number: "02",

    title: "Regulatory Intelligence",

    text: "We understand how regulators think, move and respond.",
  },

  {
    number: "03",

    title: "Commercial Alignment",

    text: "Your business objectives set the direction. We ensure the law does not block them.",
  },
];

export default function LexoraDifference() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            The Lexora Difference
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Legal infrastructure designed for execution.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {differences.map((item) => (
            <DifferenceCard
              key={item.number}
              number={item.number}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}