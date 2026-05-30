"use client";

import { useState } from "react";

const stepOne = [
  {
    id: "licensing",

    title: "I need to get licensed or approved to operate",

    mandate: "Licensing & Regulatory Approvals",
  },

  {
    id: "compliance",

    title: "I have a compliance issue or ongoing obligation",

    mandate: "Compliance & Regulatory Management",
  },

  {
    id: "investigations",

    title: "Something has gone wrong — fraud, dispute or enforcement",

    mandate: "Investigations & Asset Recovery",
  },

  {
    id: "transactions",

    title: "I'm structuring a transaction or entering a new market",

    mandate: "Transactions & Strategic Structuring",
  },
];

const geographyOptions = [
  "Nigeria only",

  "Nigeria + other West African countries",

  "Pan-African (multiple African countries)",

  "Africa + international markets",
];

const engagementOptions = [
  {
    title: "Project-based",

    text:
      "I need a defined mandate executed from start to finish",
  },

  {
    title: "Ongoing retainer",

    text:
      "I need continuous legal coverage aligned with operations",
  },

  {
    title: "I'm not sure",

    text:
      "Help me understand what structure works best",
  },
];

export default function MandateMatcher() {
  const [step, setStep] = useState(1);

  const [selectedMandate, setSelectedMandate] =
    useState(null);

  const [selectedGeo, setSelectedGeo] =
    useState(null);

  const [selectedEngagement, setSelectedEngagement] =
    useState(null);

  const handleStepOne = (item) => {
    setSelectedMandate(item);

    setStep(2);
  };

  const handleStepTwo = (item) => {
    setSelectedGeo(item);

    setStep(3);
  };

  const handleStepThree = (item) => {
    setSelectedEngagement(item);

    setStep(4);
  };

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24">
      {/* Glow */}
      <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-signal/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-paper/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Mandate Matcher
          </p>

          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight text-paper sm:text-5xl">
            Not sure where to start?
            <br />
            Let us find the right mandate.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-paper/72">
            Answer three questions. We&apos;ll identify the
            right Lexora engagement pathway and connect
            you with the appropriate legal team within
            24–72 hours.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14">
          {/* STEP INDICATOR */}
          <div className="mb-10 flex items-center gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    step >= item
                      ? "border-signal bg-signal text-paper"
                      : "border-paper/20 bg-paper/5 text-paper/60"
                  }`}
                >
                  {item}
                </div>

                {item !== 3 && (
                  <div
                    className={`h-px w-14 ${
                      step > item
                        ? "bg-signal"
                        : "bg-paper/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-semibold text-paper">
                What best describes your immediate
                situation?
              </h3>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {stepOne.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleStepOne(item)}
                    className="group rounded-[1.8rem] border border-paper/10 bg-paper/5 p-8 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-paper/10"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <h4 className="max-w-md text-xl font-semibold leading-8 text-paper">
                        {item.title}
                      </h4>

                      <span className="text-signal transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-2xl font-semibold text-paper">
                What geography does this involve?
              </h3>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {geographyOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleStepTwo(item)}
                    className="rounded-[1.8rem] border border-paper/10 bg-paper/5 p-7 text-left transition duration-300 hover:border-signal/40 hover:bg-paper/10"
                  >
                    <p className="text-lg font-medium leading-8 text-paper">
                      {item}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-2xl font-semibold text-paper">
                What is your preferred engagement model?
              </h3>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {engagementOptions.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleStepThree(item)}
                    className="rounded-[1.8rem] border border-paper/10 bg-paper/5 p-8 text-left transition duration-300 hover:border-signal/40 hover:bg-paper/10"
                  >
                    <h4 className="text-xl font-semibold text-paper">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-paper/70">
                      {item.text}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RESULT */}
          {step === 4 && (
            <div className="overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/5 p-10 backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
                Recommended Mandate
              </p>

              <h3 className="mt-5 font-display text-4xl leading-tight tracking-tight text-paper">
                {selectedMandate.mandate}
              </h3>

              <p className="mt-6 max-w-3xl text-base leading-8 text-paper/72">
                Based on your operational geography,
                engagement preference and immediate
                regulatory needs, this mandate structure
                provides the strongest legal and
                commercial alignment for your business.
              </p>

              {/* Summary */}
              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-paper/10 bg-paper/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                    Situation
                  </p>

                  <p className="mt-3 text-sm leading-7 text-paper/72">
                    {selectedMandate.title}
                  </p>
                </div>

                <div className="rounded-2xl border border-paper/10 bg-paper/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                    Geography
                  </p>

                  <p className="mt-3 text-sm leading-7 text-paper/72">
                    {selectedGeo}
                  </p>
                </div>

                <div className="rounded-2xl border border-paper/10 bg-paper/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                    Engagement
                  </p>

                  <p className="mt-3 text-sm leading-7 text-paper/72">
                    {selectedEngagement.title}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-signal px-7 py-4 text-sm font-semibold text-paper transition hover:bg-deepSignal">
                  Book a 30-Minute Scoping Call
                </button>

                <button className="rounded-xl border border-paper/15 bg-paper/5 px-7 py-4 text-sm font-semibold text-paper transition hover:bg-paper/10">
                  Read More About This Mandate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}