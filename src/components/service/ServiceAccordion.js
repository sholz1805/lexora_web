"use client";

import ServiceCard from "./ServiceCard";
import { services } from "./ServiceData";

export default function ServicesAccordion() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            What We Execute
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Defined Mandates.
            <br />
            Dedicated Engagement Pathway.
            <br />
            Clear Deliverables.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72">
            Every Lexora mandate is structured around execution,
            accountability and measurable regulatory outcomes.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-14 space-y-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}