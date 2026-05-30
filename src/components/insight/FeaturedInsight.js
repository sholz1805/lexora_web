import Link from "next/link";
import Image from "next/image";

export default function FeaturedInsight({ article }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-paper shadow-soft">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-10">
          <span className="inline-flex w-fit rounded-full bg-signal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-signal">
            {article.category}
          </span>

          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            {article.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-ink/70">
            {article.summary}
          </p>

          <div className="mt-8 flex items-center gap-4 text-sm text-ink/45">
            <span>{article.date}</span>

            <span>•</span>

            <span>{article.readTime}</span>
          </div>

          <Link
  href={`/insight/${article.slug}`}
  className="mt-8 inline-flex w-fit text-sm font-semibold text-signal transition hover:translate-x-1"
>
  Read →
</Link>
        </div>
      </div>
    </article>
  );
}