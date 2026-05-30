import Image from "next/image";

export default function InsightPostContent({
  article,
}) {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <div className="space-y-8">
          {(article.sections && Array.isArray(article.sections)
            ? article.sections
            : article.content
              ? article.content.map((p) => ({ title: null, image: null, paragraphs: [p] }))
              : []
          ).map((section, index) => (
            <div
              key={index}
              className="space-y-6"
            >
              {section.image ? (
                <div className="overflow-hidden rounded-[2rem] border border-paper/10">
                  <Image
                    src={section.image}
                    alt={section.title || article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="h-[360px] w-full object-cover"
                  />
                </div>
              ) : null}

              {section.title ? (
                <h2 className="font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
                  {section.title}
                </h2>
              ) : null}

              {(section.paragraphs || []).map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-lg leading-9 text-ink/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}