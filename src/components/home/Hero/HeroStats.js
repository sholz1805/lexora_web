const stats = [
  {
    value: "$5M+",
    text: "Fraud assets traced and recovered across jurisdictions",
  },

  {
    value: "15+",
    text: "Regulatory approvals secured for businesses",
  },

  {
    value: "95%",
    text: "Approval success rate across licensing mandates",
  },

  {
    value: "48hrs",
    text: "Average response time on urgent regulatory matters",
  },
];

export default function HeroStats() {
  return (
    <div className="m-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:bg-paper/[0.05]"
        >
          {/* Glow Accent */}
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-signal/10 blur-2xl transition-all duration-300 group-hover:bg-signal/20" />

          {/* Value */}
          <h3 className="relative z-10 text-4xl font-semibold tracking-tight text-paper">
            {item.value}
          </h3>

          {/* Divider */}
          <div className="relative z-10 mt-4 h-px w-12 bg-signal/40" />

          {/* Text */}
          <p className="relative z-10 mt-4 text-sm leading-5 text-paper/60">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}