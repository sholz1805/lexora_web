"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, TriangleAlert } from "lucide-react";

export default function CareersIntakeForm({ category, title }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interestType: "",
    link: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState({ type: "", message: "" });

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
        body: JSON.stringify({
          ...formData,
          category: category || title,
          interestType: formData.interestType || title,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit your request right now.");
      }

      setStatus("success");
      setToast({
        type: "success",
        message: "Thank you — your submission has been received and we will be in touch shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
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
    <div className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">
            Apply for this pathway
          </p>
          <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
        </div>
        <p className="text-sm text-ink/65">
          Share a few details and we will review your interest.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
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

        <div className="grid gap-4 md:grid-cols-2">
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

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">Relevant link</label>
            <input
              type="text"
              value={formData.link}
              onChange={handleChange("link")}
              placeholder="Portfolio, CV, or website"
              className="h-12 w-full rounded-xl border border-muted bg-paper px-4 text-sm text-ink outline-none transition focus:border-signal"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Tell us more</label>
          <textarea
            rows="4"
            value={formData.message}
            onChange={handleChange("message")}
            placeholder="Share your background, motivations, or the kind of support you are looking for."
            className="w-full resize-none rounded-xl border border-muted bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-signal"
            required
          />
        </div>

        {toast.message && (
          <div
            className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
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
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-signal px-6 text-sm font-semibold text-paper transition-all duration-300 hover:bg-deepSignal hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Submitting..." : "Submit my interest"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
