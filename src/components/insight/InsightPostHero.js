import Image from "next/image";

export default function InsightPostHero({
  article,
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 lg:px-12">
        {/* Meta */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <span className="rounded-full bg-paper/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
            {article.category}
          </span>

          <span className="text-sm text-paper/50">{article.date}</span>

          <span className="text-sm text-paper/50">•</span>

          <span className="text-sm text-paper/50">{article.readTime}</span>

          <a
            href="/insight"
            className="ml-auto inline-flex items-center justify-center rounded-xl border border-paper/15 bg-paper/5 p-2 text-sm font-semibold text-paper transition-all duration-300 hover:border-paper/30 hover:bg-paper/10"
            aria-label="Back to Insights"
          >
            ←
          </a>
        </div>



        {/* Heading */}
        <div className="max-w-5xl">
          <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-paper/72 sm:text-lg sm:leading-9">
            {article.summary}
          </p>
        </div>

        {/* Image */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-paper/10">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={500}
            priority
            className="h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

