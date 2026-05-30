import InsightPostHero from "./InsightPostHero";
import InsightPostContent from "./InsightPostContent";
import RelevantMandate from "./RelevantMandate";
import InsightBackButton from "./InsightBackButton";

export default function InsightPostLayout({
  article,
}) {
  return (
    <main className="bg-surface text-ink">
      <InsightPostHero article={article} />


      <InsightPostContent article={article} />

      <RelevantMandate
        title={article.mandate.title}
        description={article.mandate.text}
        cta={article.mandate.cta}
      />
    </main>
  );
}


