"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/service", label: "Services" },
  { href: "/insight", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <div className="relative h-11 w-11 overflow-hidden ">
            <Image src="/assets/LexoraLogo.png" alt="Lexora logo" fill sizes="200px" className="object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">Lexora LLP</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-slate-900"></span>
            <span className="block h-0.5 w-6 bg-slate-900"></span>
            <span className="block h-0.5 w-6 bg-slate-900"></span>
          </div>
        </button>

        <div className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition duration-200 ${
                  isActive
                    ? "text-signal font-semibold"
                    : "text-ink hover:text-ink"
                } ${isActive ? "border-b-2 border-signal pb-1" : "pb-1"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-signal px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-deepSignal"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 transition duration-200 ${
                  pathname === item.href
                    ? "bg-signal/10 text-ink font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
