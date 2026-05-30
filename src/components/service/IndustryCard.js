"use client";

import { useState } from "react";

export default function IndustryCard({ industry }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective h-[320px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full rounded-[2rem] transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } group-hover:[transform:rotateY(180deg)]`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-paper/10 bg-ink p-8 text-paper [backface-visibility:hidden]">
          {/* Glow */}
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-signal/10 blur-3xl" />

          <div className="relative z-10">
            <span className="text-4xl text-signal">
              {industry.icon}
            </span>

            <h3 className="mt-10 max-w-[220px] font-display text-3xl leading-tight tracking-tight">
              {industry.title}
            </h3>
          </div>

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.22em] text-paper/50">
              Hover to reveal
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-signal/20 bg-paper p-8 text-ink [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Glow */}
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-signal/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">
              Regulatory Challenges
            </p>

            <div className="mt-8 space-y-4">
              {industry.challenges.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-signal" />

                  <p className="text-sm leading-7 text-ink/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-10 inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-signal transition hover:gap-4">
              {industry.cta}

              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}