import { insights } from "@/components/insight/insightData";
import InsightPostLayout from "@/components/insight/InsightPostLayout";
import { notFound } from "next/navigation";

export default function InsightPostPage({ params }) {
  const article = insights.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <InsightPostLayout article={article} />;
}

