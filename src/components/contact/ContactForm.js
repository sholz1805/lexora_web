export default function ContactForm() {
  return (
    <div className="rounded-[2rem] border border-muted bg-surface p-8 shadow-soft sm:p-10">
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-3 block text-sm font-medium text-ink">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="h-14 w-full rounded-xl border border-muted bg-paper px-5 text-sm text-ink outline-none transition focus:border-signal"
          />
        </div>

        {/* Company */}
        <div>
          <label className="mb-3 block text-sm font-medium text-ink">
            Company
          </label>

          <input
            type="text"
            placeholder="Your company name"
            className="h-14 w-full rounded-xl border border-muted bg-paper px-5 text-sm text-ink outline-none transition focus:border-signal"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-3 block text-sm font-medium text-ink">
            Email Address
          </label>

          <input
            type="email"
            placeholder="you@company.com"
            className="h-14 w-full rounded-xl border border-muted bg-paper px-5 text-sm text-ink outline-none transition focus:border-signal"
          />
        </div>

        {/* Service */}
        <div>
          <label className="mb-3 block text-sm font-medium text-ink">
            Service Area
          </label>

          <div className="relative">
            <select
              className="h-14 w-full appearance-none rounded-xl border border-muted bg-paper px-5 pr-12 text-sm text-ink outline-none transition focus:border-signal"
            >
              <option>Licensing & Approvals</option>

              <option>Compliance Management</option>

              <option>Investigations & Recovery</option>

              <option>Corporate Transactions</option>

              <option>Legal Partnership</option>
            </select>

            {/* Dropdown icon */}
            <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>


        {/* Message */}
        <div>
          <label className="mb-3 block text-sm font-medium text-ink">
            Mandate Overview
          </label>

          <textarea
            rows="6"
            placeholder="Tell us about the issue, regulator, timeline or support required."
            className="w-full resize-none rounded-xl border border-muted bg-paper px-5 py-4 text-sm text-ink outline-none transition focus:border-signal"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex h-14 items-center justify-center rounded-xl bg-signal px-8 text-sm font-semibold text-paper transition-all duration-300 hover:bg-deepSignal hover:shadow-soft cursor-pointer"
        >
          Submit Mandate Inquiry
        </button>
      </form>
    </div>
  );
}