"use client";

import Image from "next/image";

import Client1 from "@/images/clients/Client1.jpg";
import Client2 from "@/images/clients/Client2.jpg";
import Client3 from "@/images/clients/Client3.jpg";

const logos = [
  Client1,
  Client2,
  Client3,
];

export default function ClientPartners() {
  return (
    <section className="overflow-hidden bg-paper py-20">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Our Clients & Partners
          </p>

          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Trusted Across Regulated Industries
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-paper to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-paper to-transparent" />

          <div className="group flex overflow-hidden">
            <div className="animate-logo-scroll flex min-w-max items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="mx-12 flex h-24 w-[180px] items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    className="max-h-16 w-auto object-contain transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}