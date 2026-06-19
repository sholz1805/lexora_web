import ContactForm from "./ContactForm";

const contactDetails = [
  {
    title: "Email",
    value: "info@lexora.africa",
  },

  {
    title: "Phone",
    value: "+234 816 087 4826",
  },

  {
    title: "Response Window",
    value: "Within 48 business hours",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-container gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            Start A Mandate
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Speak Directly
            <br />
            With Lexora.
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-ink/72">
            Tell us what you are dealing with.
            Our team will assess the mandate and
            determine the best execution pathway.
          </p>

          {/* Details */}
          <div className="mt-10 space-y-5">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5rem] border border-muted bg-surface p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                  {item.title}
                </p>

                <p className="mt-3 text-base font-medium text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}