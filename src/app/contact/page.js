import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import OfficeLocations from "@/components/contact/OfficeLocations";
export default function ContactPage() {
  return (
    <main className="bg-surface text-ink">
      <ContactHero />

      <ContactInfo />

      <OfficeLocations />
    </main>
  );
}

