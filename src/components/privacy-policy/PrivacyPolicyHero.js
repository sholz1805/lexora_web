"use client";

import PrivacyPolicyLabel from "./PrivacyPolicyLabel";

export default function PrivacyPolicyHero() {
  return (
    <section className="px-6 pb-10 pt-14 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-container">
        <div className="max-w-5xl">
          <div className="mb-6">
            <PrivacyPolicyLabel label="Privacy & Compliance" />
          </div>

          <div className="space-y-1">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              Privacy Policy.
            </h1>

            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              Your Data, Our Commitment.
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
            Lexora Africa is committed to protecting the privacy and confidentiality of personal information entrusted to us by our clients, partners, employees, and other stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
