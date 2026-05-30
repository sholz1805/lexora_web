"use client";

import { useEffect, useState } from "react";
import ServiceHeroLabel from "./ServiceHeroLabel";
import { serviceHeroContent } from "./ServiceHeroConent";
import law3 from "@/images/law3.jpg";

export default function ServiceHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (
        prev + 1
      ) % serviceHeroContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:`url(${law3.src})`,
        }}
      />

   
      <div className="absolute inset-0 bg-ink/85" />

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-container items-center px-6 py-24 lg:px-12">
        <div className="max-w-5xl">
          
          <div className="mb-8 h-[44px] overflow-hidden">
            {serviceHeroContent.map((item, index) => (
              <ServiceHeroLabel
                key={index}
                label={item.label}
                active={activeIndex === index}
              />
            ))}
          </div>

          
          <div className="space-y-2">
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              What We Execute
            </h1>

            <h2 className="max-w-4xl text-xl leading-9 text-paper/70 sm:text-2xl">
              Defined mandates. Dedicated engagement pathways.
              Clear deliverables.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}