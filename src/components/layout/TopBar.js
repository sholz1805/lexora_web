"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const topBarMessages = [
  "Lexora is accepting new mandates - Licensing, Compliance & Investigations.",
  "New Insight: The ISA 2025 and What It Means for Capital Market Participants.",
  "48-hour response guarantee on all investigation mandates.",
];

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();

  // transient dismissal: hide until navigation/refresh
  const [manualDismissed, setManualDismissed] = useState(false);
  const [dismissPath, setDismissPath] = useState(pathname);
  const [animating, setAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dismissed = manualDismissed && dismissPath === pathname;

  useEffect(() => {
    if (dismissed) return;

    let fadeTimer;
    const timer = window.setInterval(() => {
      setAnimating(true);
      fadeTimer = window.setTimeout(() => {
        setCurrentIndex((index) => (index + 1) % topBarMessages.length);
        setAnimating(false);
      }, 300);
    }, 6000);

    return () => {
      window.clearInterval(timer);
      if (fadeTimer) window.clearTimeout(fadeTimer);
    };
  }, [dismissed]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setManualDismissed(true);
    setDismissPath(pathname);
  };

  if (dismissed) {
    return null;
  }

  return (
    <div
      className={`sticky top-0 z-50 bg-clip-padding backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? "bg-signal/95 text-white shadow-signal/30"
          : "bg-signal/15 text-slate-950 shadow-sm shadow-slate-900/5"
      }`}
    >
      <div className="mx-auto flex flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p
          className={`leading-6 transition-all duration-300 ${
            animating ? "opacity-0" : "opacity-100"
          } ${scrolled ? "text-white" : "text-slate-950"}`}
        >
          {topBarMessages[currentIndex]}
        </p>
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition
              ${scrolled ? "border border-white/80 text-white hover:bg-white/10" : "bg-signal text-white hover:bg-deepSignal"}`}
          >
            → Book a scoping call
          </a>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Close announcement"
            className={`inline-flex h-4 w-4 items-center justify-center rounded-full border border-signal/30 shadow-sm transition ${
              scrolled ? "bg-white/90 text-signal" : "bg-white/90 text-signal"
            } hover:bg-signal/20`}
          >
            <span aria-hidden="true" className="text-md font-semibold">
              ×
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
