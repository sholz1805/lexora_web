import Link from "next/link";
import SubstackFeedCards from "./SubstackFeedCards";

export default function InsightGrid() {
  return (
    <>
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-container px-6 lg:px-12">
          <div className="grid gap-12 lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-paper/5 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-signal" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
                  Insights
                </p>
              </div>

              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                The stories behind the regulatory trends.
              </h2>

              <p className="mt-8 text-base leading-8 text-ink/80 sm:text-lg sm:leading-9">
                Our Substack articles provide concise, professional analysis of enforcement shifts, policy updates and compliance priorities for regulator-facing businesses. Below is a live preview of the latest headlines, with each item linking through to the full briefing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubstackFeedCards />

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-container px-6 lg:px-12">
          <div className="rounded-[2rem] border border-ink/10 bg-white/95 p-10 shadow-soft-sm sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">
              Careers
            </p>
            <h3 className="mt-4 text-3xl font-display tracking-tight text-ink sm:text-4xl">
              Join the team shaping the future of regulation.
            </h3>
            <p className="mt-6 text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
              Lexora is growing. If you want to work on high-impact regulatory and compliance challenges with a team that combines legal insight, operational discipline and technology-forward delivery, explore our current roles.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/careers"
                className="inline-flex w-full items-center justify-center rounded-xl bg-ink px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-ink/90 sm:w-auto"
              >
                Explore careers
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-ink/15 bg-paper/5 px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink/30 hover:bg-paper/10 sm:w-auto"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
