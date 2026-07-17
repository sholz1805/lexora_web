"use client";

import { useState } from "react";
import { Briefcase, BookOpen, Users, Database, Handshake, Globe, ChevronDown } from "lucide-react";
import CareersIntakeForm from "@/components/careers/CareersIntakeForm";

export default function CareersContent() {
  const opportunities = [
    {
      icon: BookOpen,
      title: "Intern at Lexora",
      description: "Launch your legal career through hands-on experience with one of Africa's emerging legal innovation platforms.",
      highlights: [
        "Legal Research & Writing",
        "Regulatory & Policy Analysis",
        "Legal Technology & Innovation",
        "Content Development",
        "Business Development & Partnerships",
        "Community Engagement",
      ],
      benefits: [
        "Practical legal experience",
        "Mentorship from legal and industry professionals",
        "Exposure to legal technology tools",
        "Opportunity to contribute to impactful projects",
        "Professional networking opportunities",
      ],
      note: "Applications are accepted throughout the year.",
      bgColor: "from-signal/5 to-signal/5",
      accentColor: "signal",
    },
    {
      icon: Briefcase,
      title: "Work with Lexora",
      description: "Join a mission-driven virtual team transforming how legal knowledge is created, accessed, and applied.",
      highlights: [
        "Lawyers and Legal Consultants",
        "Compliance Professionals",
        "Researchers and Policy Analysts",
        "Product Managers",
        "Software Developers",
        "Content Strategists",
        "Community Managers",
        "Growth and Partnerships Specialists",
      ],
      note: "Whether you are seeking full-time, part-time, contract, or volunteer opportunities, Lexora provides a platform to create meaningful impact.",
      bgColor: "from-signal/8 to-signal/8",
      accentColor: "signal",
    },
    {
      icon: Users,
      title: "Join Lexora Expert Network & Society (LENS)",
      description: "Share your expertise and contribute to meaningful legal discourse.",
      highlightTitle: "Topics We Welcome",
      highlights: [
        "Corporate & Commercial Law",
        "Technology & Innovation Law",
        "Data Privacy & Cybersecurity",
        "Financial Regulation",
        "Intellectual Property",
        "Public Policy & Governance",
        "Dispute Resolution",
        "Emerging Legal Trends",
        "Law & Artificial Intelligence",
      ],
      benefitsTitle: "Benefits of Publishing",
      benefits: [
        "Build professional visibility",
        "Showcase your expertise",
        "Reach a growing legal audience",
        "Contribute to legal education and reform",
        "Establish yourself as a thought leader",
      ],
      note: "All submissions undergo editorial review before publication.",
      bgColor: "from-signal/6 to-signal/6",
      accentColor: "signal",
    },
    {
      icon: Database,
      title: "Become a Research Contributor",
      description: "Help expand access to reliable legal knowledge.",
      highlights: [
        "Tracking legal developments",
        "Monitoring regulatory changes",
        "Summarizing case law and legislation",
        "Developing legal knowledge resources",
        "Supporting comparative legal research",
      ],
      note: "This opportunity is ideal for academics, researchers, postgraduate students, and legal professionals interested in advancing legal scholarship.",
      bgColor: "from-signal/7 to-signal/7",
      accentColor: "signal",
    },
    {
      icon: Handshake,
      title: "Partner with Lexora",
      description: "We believe collaboration drives innovation.",
      highlightTitle: "We Partner With",
      highlights: [
        "Law Firms",
        "Universities",
        "Professional Associations",
        "Regulatory Institutions",
        "Research Centres",
        "Legal Technology Companies",
        "Development Organizations",
      ],
      benefitsTitle: "Partnership Areas",
      benefits: [
        "Legal Education",
        "Research & Publications",
        "Events & Conferences",
        "Technology Innovation",
        "Capacity Building",
        "Community Development",
      ],
      bgColor: "from-signal/9 to-signal/9",
      accentColor: "signal",
    },
    {
      icon: Globe,
      title: "Join the Lexora Community",
      description: "Stay connected with a growing network of legal professionals, innovators, researchers, and future leaders.",
      highlights: [
        "Legal insights and publications",
        "Industry updates",
        "Networking opportunities",
        "Learning resources",
        "Events and webinars",
        "Collaborative projects",
      ],
      bgColor: "from-paper/8 to-paper/8",
      accentColor: "signal",
    },
  ];

  const accentColorMap = {
    signal: "bg-signal/15",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-surface px-6 py-16 sm:py-24 lg:py-32 text-ink">
      <div className="mx-auto max-w-container space-y-12">
        {opportunities.map((opportunity, idx) => {
          const IconComponent = opportunity.icon;
          const accentBg = accentColorMap[opportunity.accentColor];
          const isHovered = hoveredIndex === idx;

          const isOpen = openIndex === idx;

          return (
            <div
              key={opportunity.title}
              className={`bg-gradient-to-br ${
                isHovered ? opportunity.bgColor : "from-signal/5 to-signal/5"
              } rounded-2xl border border-ink/5 p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-ink/10 transform ${
                isHovered ? "scale-[1.01]" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${accentBg} transition-transform duration-300 transform ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    >
                      <IconComponent className="h-7 w-7 text-signal" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {opportunity.title}
                    </h2>
                    <p className="mt-3 text-base text-ink/75 sm:text-lg leading-relaxed">
                      {opportunity.description}
                    </p>
                  </div>
                </div>

                <div className={`mt-2 rounded-full border border-ink/10 bg-white/70 p-2 text-signal transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              {isOpen && (
                <div className="mt-8 space-y-8">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 pt-2">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-signal mb-5">
                          {opportunity.highlightTitle || "What's Included"}
                        </h3>
                        <div className="space-y-4">
                          {opportunity.highlights.map((item) => (
                            <div key={item} className="flex gap-4">
                              <div className="flex-shrink-0 pt-1">
                                <div className="h-2 w-2 rounded-full bg-signal" />
                              </div>
                              <p className="text-base text-ink/80 leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {opportunity.benefits && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-signal mb-5">
                            {opportunity.benefitsTitle || "What You'll Gain"}
                          </h3>
                          <div className="space-y-4">
                            {opportunity.benefits.map((item) => (
                              <div key={item} className="flex gap-4">
                                <div className="flex-shrink-0 pt-1">
                                  <div className="h-2 w-2 rounded-full bg-signal" />
                                </div>
                                <p className="text-base text-ink/80 leading-relaxed">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {opportunity.note && (
                    <div className="rounded-lg border border-ink/5 bg-white/50 p-5 sm:p-6 backdrop-blur-sm">
                      <p className="text-sm italic text-ink/70 sm:text-base leading-relaxed">
                        {opportunity.note}
                      </p>
                    </div>
                  )}

                  <div className="pt-2">
                    <CareersIntakeForm category={opportunity.title} title={opportunity.title} />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Community CTA Section */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen bg-white mt-12 lg:mt-16">
          <div className="mx-auto max-w-container px-6 py-12 lg:px-12 lg:py-16">
            <div className="rounded-2xl border border-paper/10 bg-gradient-to-br from-paper/5 to-transparent p-8 sm:p-12">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-signal font-semibold">
                Ready to join us?
              </p>
              <h3 className="text-2xl font-semibold text-ink mb-4 sm:text-3xl leading-tight">
                The Future of Law is Collaborative, Innovative, and Technology-Enabled
              </h3>
              <p className="text-base text-ink/70 mb-8 sm:text-lg leading-relaxed max-w-2xl">
                Whether you&apos;re looking to intern, work with us, contribute your expertise, conduct research, partner with us, or stay connected, there&apos;s a place for you in the Lexora ecosystem.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-deepSignal"
                >
                  Get in Touch
                  <span>→</span>
                </a>
                <a
                  href="https://substack.com/@lexoraafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-signal bg-white px-6 py-3 text-sm font-semibold text-signal transition duration-200 hover:bg-signal/5"
                >
                  Join Our Community
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
