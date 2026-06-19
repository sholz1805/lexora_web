import PrivacyPolicyHero from "@/components/privacy-policy/PrivacyPolicyHero";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | Lexora",
  description: "Lexora Africa's Privacy Policy outlining our commitment to protecting personal information and compliance with data protection laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-surface text-ink">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </main>
  );
}
