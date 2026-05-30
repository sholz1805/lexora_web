"use client";

import { useEffect, useState } from "react";

import HeroButtons from "./HeroButtons";
import HeroHeadline from "./HeroHeadline";
import HeroLabel from "./HeroLabel";
import { heroContent } from "./HeroContent";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/law1.jpg')",
        }}
      />

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-ink/82" />

      {/* Left Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />

      {/* Left Blur */}
      <div className="absolute left-0 top-0 h-full w-[55%] bg-ink/40 blur-3xl" />

      {/* Decorative Glow */}
      <div className="absolute -left-40 top-24 h-[500px] w-[500px] rounded-full bg-signal/10 blur-3xl" />

      {/* Right Accent */}
      <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-gradient-to-l from-signal/10 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-container items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          {/* Label */}
          <div className="mb-8 h-[44px] overflow-hidden">
            {heroContent.map((item, index) => (
              <HeroLabel
                key={index}
                label={item.label}
                active={activeIndex === index}
              />
            ))}
          </div>

          {/* Headline */}
          <div className="relative min-h-[170px] sm:min-h-[190px] lg:min-h-[220px]">
            {heroContent.map((item, index) => (
              <HeroHeadline
                key={index}
                title={item.title}
                highlight={item.highlight}
                active={activeIndex === index}
              />
            ))}
          </div>

          {/* Subheading */}
          <p className="mt-8 max-w-3xl text-base leading-8 text-paper/72 sm:text-lg sm:leading-9">
            Lexora embeds into your business as a dedicated legal
            partner — securing authorisations, managing compliance
            obligations, and resolving complex regulatory challenges
            across African markets.
          </p>

          <HeroButtons />
        </div>
      </div>
    </section>
  );
}