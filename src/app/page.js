import Hero from "@/components/home/Hero";
import HomeFaq from "@/components/home/HomeFaq";
import EngageLexora from "@/components/home/EngageLexora";
import HeroStats from "@/components/home/Hero/HeroStats";

export default function HomePage() {
  return (
    <main className="bg-ink text-paper overflow-hidden">
      <Hero />
      <HeroStats/>
      <HomeFaq />
      <EngageLexora />
    </main>
  );
}

