import { insights } from "@/components/insight/insightData";
import InsightPostLayout from "@/components/insight/InsightPostLayout";
import { notFound } from "next/navigation";

export default async function InsightPostPage({ params }) {

  const resolvedParams = await params;

  const article = insights.find(
    (item) => item.slug === resolvedParams.slug
  );
  
if (!article) {
  notFound();
}

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Insight not found.
        </h1>
      </main>
    );
  }

  return <InsightPostLayout article={article} />;
}

