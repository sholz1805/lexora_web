import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper sm:py-28">
  
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 lg:px-12">
        <div className="rounded-[2.5rem] border border-paper/10 bg-paper/5 p-10 backdrop-blur-md sm:p-14">
          <div className="max-w-4xl">
          
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-signal" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/70">
                Engage Lexora
              </p>
            </div>

          
            <div className="space-y-2">
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                Regulatory Challenges
              </h2>

              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl">
                Require Structured Action.
              </h2>
            </div>

        
            <p className="mt-8 max-w-3xl text-base leading-8 text-paper/72 sm:text-lg sm:leading-9">
              Lexora is built to execute across licensing,
              compliance, investigations and corporate
              regulatory matters.
            </p>

           
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link href="/service" className="inline-flex w-full items-center justify-center sm:w-auto rounded-xl bg-signal px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-deepSignal hover:shadow-soft cursor-pointer">
                Start a Mandate
              </Link>

              <Link href="/contact" className="inline-flex w-full items-center justify-center sm:w-auto rounded-xl border border-paper/15 bg-paper/5 px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:border-paper/30 hover:bg-paper/10 cursor-pointer">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}