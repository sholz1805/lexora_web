import AboutHero from "@/components/about/AboutHero";
import CapabilityGrid from "@/components/about/CapabilityGrid";
import WhyLexora from "@/components/about/WhyLexora";
import LexoraDifference from "@/components/about/LexoraDifference";

export default function AboutPage() {
  return (
    <main className="bg-surface text-ink">
      <AboutHero />

      <CapabilityGrid />

      <WhyLexora />

      <LexoraDifference />
    </main>
  );
}