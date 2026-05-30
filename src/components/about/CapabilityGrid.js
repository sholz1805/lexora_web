import {
  Building2,
  Handshake,
  Scale,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    title: "Licensing & Regulatory Approvals",
    description: "Full lifecycle. Direct regulator engagement.",
    Icon: Scale,
  },

  {
    title: "Compliance Management",
    description: "Embedded. Ongoing. Proactive.",
    Icon: ShieldCheck,
  },

  {
    title: "Legal Partnership (Retainer)",
    description: "Your dedicated embedded legal team.",
    Icon: Handshake,
  },

  {
    title: "Investigations & Asset Recovery",
    description: "Fast. Decisive. Cross-jurisdictional.",
    Icon: SearchCheck,
  },

  {
    title: "Transactions & Structuring",
    description: "Commercial-first structuring and M&A support.",
    Icon: Building2,
  },
];

export default function CapabilityGrid() {
  return (
    <section className="w-full bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            What we do
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.8rem]">
            Five capability pillars that keep regulated businesses moving.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {capabilities.map((item) => (
            <CapabilityCard
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
