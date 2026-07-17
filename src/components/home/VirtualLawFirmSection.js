import { Globe2, MonitorSmartphone, Sparkles } from "lucide-react";

export default function VirtualLawFirmSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-container rounded-[2.5rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-signal/15 bg-surface px-4 py-2">
              <span className="rounded-full bg-signal p-2 text-paper">
                <Globe2 className="h-4 w-4" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
                Virtual by design
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Virtual. Responsive. Borderless.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-ink/70">
                Lexora is a 100% virtual law firm, combining thoughtful advisory with a digital-first experience that keeps clients connected, informed and supported from anywhere.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink/80">
                100% virtual
              </span>
              <span className="rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink/80">
                Cross-border by default
              </span>
              <span className="rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink/80">
                Built for modern matters
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-ink/10 bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-signal/10 p-4 text-signal">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">
                  Why it feels different
                </p>
                <p className="mt-1 font-display text-2xl leading-tight text-ink sm:text-[1.7rem]">
                  A contemporary model for legal counsel.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.35rem] border border-ink/10 bg-white/80 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl bg-signal/10 p-2 text-signal">
                    <MonitorSmartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-ink">Responsive delivery</p>
                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      Direct communication and digital workflows help matters move with clarity and momentum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-ink/10 bg-white/80 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl bg-signal/10 p-2 text-signal">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-ink">Borderless support</p>
                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      Clients receive strategic legal support that is agile, practical and available wherever the work is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
