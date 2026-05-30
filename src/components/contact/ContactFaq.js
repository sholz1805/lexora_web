import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What happens after you receive our initial mandate request?",
    answer:
      "We start with a short intake call to clarify scope, regulators involved, timelines and required outcomes. You then receive a written engagement outline (roles, deliverables, milestones) and a project plan aligned to your internal governance process.",
  },
  {
    question: "How quickly can Lexora mobilise for time-sensitive licensing and approvals?",
    answer:
      "For urgent regulatory matters, we prioritise mobilisation immediately and confirm the workplan within days—not weeks. Your mandate lead assigns owners for filings, communications and stakeholder tracking to keep approvals moving.",
  },
  {
    question: "Can Lexora support cross-border cases across multiple countries?",
    answer:
      "Yes. We coordinate multi-jurisdictional compliance, investigations and recovery mandates by mapping regulators, local requirements and document flows. You get a single, consolidated project view with country-level execution tracked throughout.",
  },
  {
    question: "Do you work with our internal legal team or replace it?",
    answer:
      "Either model is possible. Our Legal Partnership approach is designed to embed with your team—augmenting existing capabilities, providing structured oversight, and supporting leadership stakeholders—while preserving internal control and decision-making.",
  },
  {
    question: "How do you handle confidentiality and regulator-sensitive information?",
    answer:
      "We operate with mandate-specific confidentiality controls. That includes controlled access to documents, clear communication protocols, and documented handling of filings and regulator correspondence throughout the engagement lifecycle.",
  },
  {
    question: "What commercial models do you offer for recurring compliance and licensing work?",
    answer:
      "We commonly use fixed-scope project pricing for defined filings and approvals, and retainer-based partnership models for ongoing compliance management, governance support and repeat mandates.",
  },
];

export default function ContactFaq() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            FAQs
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Common Questions
            <br />
            Before Engagement.
          </h2>
        </div>

        {/* Items */}
        <Accordion items={faqs} className="space-y-5" />
      </div>
    </section>
  );
}
