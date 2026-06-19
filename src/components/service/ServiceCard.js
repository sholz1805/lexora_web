"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServiceCard({ service, reverse }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={service.id}
      className={`grid overflow-hidden rounded-[2rem] border border-muted bg-paper shadow-soft lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      
      <div className="relative min-h-[340px] overflow-hidden">
       
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
        />

     
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

        <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-paper/10 bg-paper/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-signal" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/80">
            {service.badge}
          </p>
        </div>
      </div>

  
      <div className="relative flex flex-col justify-between p-8 sm:p-10 lg:p-12">
   
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-signal/10 blur-3xl" />

        <div className="relative z-10">
   
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            {service.title}
          </h2>

          <div className="mt-5 h-px w-16 bg-signal/30" />

       
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72">
            {service.tagline}
          </p>

        
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-signal transition hover:gap-4"
          >
            {expanded ? "Hide Details" : "View Details"}

            <span
              className={`transition duration-300 ${
                expanded ? "rotate-90" : ""
              }`}
            >
              →
            </span>
          </button>

        
          <div
            className={`grid transition-all duration-500 ${
              expanded
                ? "mt-10 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
            
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/55">
                  What You Receive
                </h3>

                <div className="mt-6 space-y-4">
                  {service.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-signal" />

                      <p className="text-sm leading-7 text-ink/72">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

           
              <div className="mt-10 rounded-[1.5rem] border border-muted bg-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
                  Engagement Model
                </p>

                <p className="mt-4 text-sm leading-7 text-ink/72">
                  {service.engagement}
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="relative z-10 mt-10">
          <Link href={service.ctaLink} className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-signal px-7 py-4 text-sm font-semibold text-paper transition duration-300 hover:bg-deepSignal">
            {service.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}