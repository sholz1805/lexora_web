"use client";

import Link from "next/link";

export default function InsightBackButton({
  href = "/insight",
  label = "← Back to Insights",
}) {
  return (
    <div className="mx-auto max-w-container px-6 lg:px-12">
      <div className="pt-8 pb-2 sm:pt-10">

        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-xl border border-paper/15 bg-paper/5 px-4 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:border-paper/30 hover:bg-paper/10"
        >
          <span className="text-base leading-none">←</span>
          <span>{label}</span>
        </Link>
      </div>
    </div>
  );
}


