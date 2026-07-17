import Hero from "@/components/home/Hero";
import HomeFaq from "@/components/home/HomeFaq";
import EngageLexora from "@/components/home/EngageLexora";
import HeroStats from "@/components/home/Hero/HeroStats";
import WhyChooseLexora from "@/components/home/Hero/WhyChooseLexora";
import OurApproach from "@/components/home/Hero/OurApproach";
import ClientPartners from "@/components/home/Hero/ClientPartners";
import VirtualLawFirmSection from "@/components/home/VirtualLawFirmSection";

export default function HomePage() {
  return (
    <main className="bg-ink text-paper overflow-hidden">
      <Hero />
      <HeroStats/>
      <WhyChooseLexora/>
      <ClientPartners/>
      <VirtualLawFirmSection />
      <OurApproach/>
      <HomeFaq />
      <EngageLexora />
    </main>
  );
}

