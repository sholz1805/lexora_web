import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CapabilityCard({ title, description, Icon }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.8rem] border border-muted bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:bg-white">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-signal/10 blur-2xl transition-all duration-300 group-hover:bg-signal/20" />

      <div
        className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-3xl bg-signal/10 text-signal"
        aria-hidden="true"
      >
        {Icon ? (
          <Icon className={cn("h-7 w-7 stroke-current", "text-signal")} />
        ) : (
          <span className="text-lg font-semibold">•</span>
        )}
      </div>

      <h3 className="relative z-10 text-lg font-semibold leading-6 text-ink">
        {title}
      </h3>

      <div className="relative z-10 mt-4 h-px w-12 bg-signal/30" />

      <p className="relative z-10 mt-5 text-sm leading-5 text-ink/68">
        {description}
      </p>
    </article>
  );
}
