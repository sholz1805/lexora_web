import CareersHero from "@/components/careers/CareersHero";
import CareersContent from "@/components/careers/CareersContent";

export const metadata = {
  title: "Careers | Lexora",
  description: "Join the Lexora ecosystem. Explore internships, career opportunities, research contributions, expert networks, and partnership programs.",
};

export default function CareersPage() {
  return (
    <main className="bg-surface text-ink">
      <CareersHero />
      <CareersContent />
    </main>
  );
}
