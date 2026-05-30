import IndustryGrid from "@/components/service/IndustryGrid";
import MandateMatcher from "@/components/service/MandateMatcher";
import ServicesAccordion from "@/components/service/ServiceAccordion";
import ServiceHero from "@/components/service/ServiceHero";

export default function ServicesPage() {
  return (
    <main className="bg-surface text-ink">
      <ServiceHero />

      <ServicesAccordion />

      <MandateMatcher />

      <IndustryGrid />

    </main>
  );
}