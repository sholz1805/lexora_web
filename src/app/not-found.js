"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6 text-paper">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-signal/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-paper/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Icon */}
       <div className="mb-8 flex justify-center">
  <div className="relative">
    {/* Glow Ring */}
    <div className="absolute inset-0 animate-ping rounded-full bg-signal/20" />

    {/* Main Icon */}
    <div className="relative flex h-24 w-24 animate-lexoraFloat items-center justify-center rounded-full border border-paper/10 bg-paper/5 backdrop-blur-md">
      <SearchX
        size={44}
        className="text-signal"
      />
    </div>
  </div>
</div>

        {/* Error Code */}
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-signal">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mt-6 font-display text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          The mandate you&apos;re
          <span className="block text-signal">
            looking for isn&apos;t here.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-paper/70">
          The page may have moved, been removed, or never existed.
          If you&apos;re looking for legal support, regulatory guidance,
          or compliance services, our team can point you in the
          right direction.
        </p>

        {/* Actions */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-signal px-8 py-4 text-sm font-semibold text-paper transition hover:bg-deepSignal"
          >
            Return Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-paper/10 bg-paper/5 px-8 py-4 text-sm font-semibold text-paper backdrop-blur-md transition hover:bg-paper/10"
          >
            Speak to a Legal Partner
          </Link>
        </div>
      </div>
    </main>
  );
}