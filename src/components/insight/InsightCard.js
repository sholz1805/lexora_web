import Link from "next/link";

export default function InsightCard({ article }) {
  return (
    <article className="group rounded-[1.8rem] bg-paper p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      {/* Category */}
      <span className="inline-flex rounded-full bg-signal/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
        {article.category}
      </span>

      {/* Title */}
      <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-ink">
        {article.title}
      </h3>

      {/* Summary */}
      <p className="mt-5 text-sm leading-7 text-ink/70">
        {article.summary}
      </p>

      {/* Meta */}
      <div className="mt-8 flex items-center gap-3 text-sm text-ink/45">
        <span>{article.date}</span>

        <span>•</span>

        <span>{article.readTime}</span>
      </div>

      {/* CTA */}
    
      <Link
  href={`/insight/${article.slug}`}
  className="mt-8 inline-flex text-sm font-semibold text-signal transition hover:translate-x-1"
>
  Read →
</Link>
    </article>
  );
}