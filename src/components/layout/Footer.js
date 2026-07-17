"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">

      <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-signal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-paper/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 pb-10 pt-16 lg:px-12">

       
        <div className="max-w-sm">
          <Image
            src="/assets/LexoraLogoWhite.png"
            alt="Lexora"
            width={200}
            height={40}
            className="h-16 w-auto object-contain"
            priority
          />

          <p className="mt-6 text-sm leading-7 text-paper/65">
            Precise counsel. Commercial instinct. Global reach.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="mt-12 hidden grid-cols-3 gap-16 border-t border-paper/10 pt-10 lg:grid">

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
              Capabilities
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                { label: "Licensing & Approvals", id: "licensing" },
                { label: "Compliance Management", id: "compliance" },
                { label: "Investigations & Recovery", id: "investigations" },
                { label: "Transactions & Structuring", id: "transactions" },
                { label: "Legal Partnership", id: "embedded-legal" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/service#${item.id}`}
                    className="text-sm text-paper/60 transition hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
              Firm
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                { label: "About Lexora", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/60 transition hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Statement */}
          <div className="flex flex-col justify-between">
            <p className="text-sm text-paper/60">
              Legal execution for regulated businesses operating across Africa and global markets.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <Link
                href="/"
                className="text-sm text-paper/70 hover:text-signal transition"
              >
                lexora.africa
              </Link>

              <SocialMediaIcons />
            </div>
          </div>

        </div>

        {/* MOBILE ACCORDION */}
        <div className="mt-10 border-t border-paper/10 pt-6 lg:hidden">

          {/* Capabilities */}
          <div className="border-b border-paper/10 py-4">
            <button
              onClick={() => toggle("capabilities")}
              className="flex w-full items-center justify-between text-sm font-medium"
            >
              Capabilities
              <span>{open === "capabilities" ? "−" : "+"}</span>
            </button>

            {open === "capabilities" && (
              <div className="mt-4 space-y-3">
                {[
                  { label: "Licensing & Approvals", id: "licensing" },
                  { label: "Compliance Management", id: "compliance" },
                  { label: "Investigations & Recovery", id: "investigations" },
                  { label: "Transactions & Structuring", id: "transactions" },
                  { label: "Legal Partnership", id: "embedded-legal" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`/service#${item.id}`}
                    className="block text-sm text-paper/60"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Firm */}
          <div className="border-b border-paper/10 py-4">
            <button
              onClick={() => toggle("firm")}
              className="flex w-full items-center justify-between text-sm font-medium"
            >
              Firm
              <span>{open === "firm" ? "−" : "+"}</span>
            </button>

            {open === "firm" && (
              <div className="mt-4 space-y-3">
                {[
                  { label: "About Lexora", href: "/about" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-sm text-paper/60"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="pt-6 flex flex-col gap-6">

            <Link
              href="/"
              className="text-sm text-paper/70"
            >
              lexora.africa
            </Link>

            <SocialMediaIcons />

            <p className="text-xs text-paper/40">
              © {new Date().getFullYear()} Lexora. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}