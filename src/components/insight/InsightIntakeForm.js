"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles, TriangleAlert } from "lucide-react";

const categoryOptions = [
  { value: "Careers", label: "Careers" },
  { value: "Community", label: "Community" },
  { value: "Partnerships", label: "Partnerships" },
  { value: "General Inquiry", label: "General inquiry" },
];

const categoryMeta = {
  Careers: {
    label: "Area of interest",
    placeholder: "e.g. legal research, advisory, internships",
    helper: "Tell us which role, practice area or skill set you are interested in.",
  },
  Community: {
    label: "Community involvement",
    placeholder: "e.g. speaking, mentorship, workshops",
    helper: "Let us know what kind of engagement you would like to explore with the community.",
  },
  Partnerships: {
    label: "Partnership opportunity",
    placeholder: "e.g. strategic alliance, referral, collaboration",
    helper: "Share the kind of partnership you are exploring and the outcome you have in mind.",
  },
  "General Inquiry": {
    label: "What you would like to discuss",
    placeholder: "Tell us what you need help with or what you would like to learn more about",
    helper: "Share a short overview of your request so we can route it to the right team.",
  },
};

export default function InsightIntakeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "Careers",
    interestType: "",
    link: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState({ type: "", message: "" });

  const meta = categoryMeta[formData.category];

  const helperCopy = useMemo(() => {
    return meta?.helper || "Tell us what you would like to discuss and we will follow up with the right next step.";
  }, [meta]);

  const handleChange = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
    if (toast.message) {
      setToast({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setToast({ type: "", message: "" });

    try {
      const response = await fetch("/api/insight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit your request right now.");
      }

      setStatus("success");
      setToast({
        type: "success",
        message: "Thanks — your request has been received and we will get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        category: "Careers",
        interestType: "",
        link: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setToast({
        type: "error",
        message: err.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-container rounded-[2.5rem] border border-ink/10 bg-surface p-8 shadow-soft sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-signal/15 bg-white/70 px-4 py-2">
              <span className="rounded-full bg-signal p-2 text-paper">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
                Share your interest
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl">
                Pick the category that fits your intent.
              </h2>
              <p className="max-w-xl text-base leading-7 text-ink/70">
                Choose the closest category, share the details we need, and submit your request in a few steps.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-ink/10 bg-white/80 p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-signal/10 p-2 text-signal">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">How it works</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    We collect the details you submit and route them to the right Lexora contact point. You will also receive a confirmation once your request is logged.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Full name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange("name")}
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Email address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
                  required
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Category</label>
                <select
                  value={formData.category}
                  onChange={handleChange("category")}
                  className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Organisation</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={handleChange("company")}
                  placeholder="Optional"
                  className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">{meta?.label}</label>
                <input
                  type="text"
                  value={formData.interestType}
                  onChange={handleChange("interestType")}
                  placeholder={meta?.placeholder}
                  className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Link or portfolio</label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={handleChange("link")}
                  placeholder="Optional"
                  className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-ink">Your message</label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={handleChange("message")}
                placeholder={helperCopy}
                className="w-full resize-none rounded-xl border border-muted bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-signal"
                required
              />
            </div>

            {toast.message && (
              <div
                className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                  toast.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
                role="status"
                aria-live="polite"
              >
                {toast.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{toast.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-signal px-6 text-sm font-semibold text-paper transition-all duration-300 hover:bg-deepSignal hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Submitting..." : "Submit my interest"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
