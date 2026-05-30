import InsightHero from "@/components/insight/InsightHero";
import InsightGrid from "@/components/insight/InsightGrid";
import FinalCta from "@/components/insight/FinalCta";

export default function InsightPage() {
  return (
    <main className="bg-surface text-ink">
      <InsightHero />

      <InsightGrid />

      <FinalCta />
    </main>
  );
}