"use client";

import CareersLabel from "./CareersLabel";

export default function CareersHero() {
  return (
    <section className="px-6 pb-10 pt-14 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-container">
        <div className="max-w-5xl">
          <div className="mb-6">
            <CareersLabel label="Get Involved" />
          </div>

          <div className="space-y-1">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              Build Your Impact.
            </h1>

            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              Join the Lexora Ecosystem.
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
            Whether you are a law student, legal practitioner, researcher, academic, policy expert, or legal-tech enthusiast, there is a place for you within the Lexora ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
