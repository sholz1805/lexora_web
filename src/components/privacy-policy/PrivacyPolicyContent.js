"use client";

export default function PrivacyPolicyContent() {
  const sections = [
    {
      number: "1",
      title: "Introduction",
      content: [
        "Lexora Africa is committed to protecting the privacy and confidentiality of Personal Information (information that directly or indirectly identifies individuals who may be clients, employees, consultants, partners, applicants, or other persons who interact with us).",
        "This Privacy Policy outlines Lexora Africa's commitment to ensuring that all personal data, including special category personal data where applicable, is processed in compliance with applicable data protection laws in Nigeria and other relevant international data protection standards.",
        "Lexora Africa is dedicated to ensuring that all processing of personal information is conducted responsibly, transparently, and in accordance with applicable legal requirements."
      ]
    },
    {
      number: "2",
      title: "Purpose of this Policy",
      content: [
        "This Privacy Policy (\"Policy\") explains how Lexora Africa collects, uses, stores, protects, and manages personal information.",
        "The Policy is guided by applicable privacy and data protection principles, our professional obligations, and our commitment to protecting confidential information entrusted to us by our clients, partners, employees, and other stakeholders.",
        "This Policy applies to all personal data processed by Lexora Africa and forms part of our broader approach to maintaining privacy, confidentiality, and compliance with applicable Data Protection Laws.",
        "All Lexora Africa personnel are expected to comply with this Policy. Failure to comply may result in appropriate disciplinary action."
      ]
    },
    {
      number: "3",
      title: "Who We Are, What We Do and How to Contact Us",
      content: [
        "The website and services are operated by Lexora Africa (\"we\", \"us\", or \"our\").",
        "Lexora Africa is responsible for the processing and protection of personal information collected through our website, services, communications, and other business activities.",
        "Our services include professional advisory, legal, corporate, and related solutions provided to individuals, businesses, and organisations.",
        "If you have any questions regarding this Privacy Policy or how your information is handled, please contact us through our official communication channels."
      ]
    },
    {
      number: "4",
      title: "Data Protection Principles",
      content: [
        "Lexora Africa processes personal information in accordance with applicable data protection principles. When processing personal data, we ensure that:",
        "• Personal information is processed lawfully, fairly, and transparently.",
        "• Information is collected for specific, clear, and legitimate purposes.",
        "• Only information that is adequate, relevant, and necessary for the intended purpose is collected and processed.",
        "• Personal information is kept accurate and updated where necessary.",
        "• Information is retained only for as long as required for the purpose it was collected or as required by law.",
        "• Appropriate technical and organisational measures are implemented to protect personal information from unauthorised access, misuse, loss, alteration, or disclosure."
      ]
    },
    {
      number: "5",
      title: "Information We Collect",
      content: [
        "The personal information processed by Lexora Africa may include:",
        "• Background information provided by you or collected during engagement processes.",
        "• Basic personal details such as name, organisation, position, age, and professional relationships.",
        "• Contact information including email address, telephone number, postal address, and other communication details.",
        "• Technical information such as IP address, browser details, device information, and website usage information.",
        "• Confidential information provided by clients or generated during the delivery of our services.",
        "• Any other information voluntarily provided to us."
      ]
    },
    {
      number: "6",
      title: "How We Collect Information",
      content: [
        "Lexora Africa may collect personal information in the following circumstances:",
        "• When you visit or interact with our website.",
        "• When you request our services or professional advice.",
        "• During recruitment and engagement processes.",
        "• When working with third-party service providers, consultants, or vendors.",
        "• Through communications made via email, social media platforms, forms, or other business channels."
      ]
    },
    {
      number: "7",
      title: "Processing Procedures and Guidelines",
      content: [
        "Lexora Africa will:",
        "• Ensure that all processing activities comply with applicable laws and regulations.",
        "• Only process personal information for legitimate and clearly identified purposes.",
        "• Collect only the information reasonably required for those purposes.",
        "• Take reasonable steps to ensure information held is accurate and updated.",
        "• Maintain appropriate security measures to safeguard personal information.",
        "• Ensure that access to personal data is limited to authorised individuals who require it for legitimate purposes.",
        "Lexora Africa ensures that employees and representatives handling personal information understand their responsibilities and receive appropriate guidance on privacy and information security obligations.",
        "Any breach of this Policy may result in corrective action."
      ]
    },
    {
      number: "8",
      title: "Cookies",
      content: [
        "Cookies are small text files stored on your device when you visit a website. They help websites recognise users, remember preferences, improve functionality, and enhance user experience.",
        "By using our website, you consent to the use of cookies where applicable.",
        "You may manage or restrict cookies through your browser settings. However, disabling certain cookies may affect some features or functionality of our website."
      ]
    },
    {
      number: "9",
      title: "Security of Personal Information",
      content: [
        "Lexora Africa takes the protection of personal information seriously and maintains appropriate physical, technical, and organisational safeguards designed to protect information entrusted to us.",
        "While we implement reasonable security measures, no method of electronic storage or transmission can be guaranteed to be completely secure.",
        "We require third-party service providers, consultants, and vendors who process information on our behalf to maintain appropriate privacy and security standards."
      ],
      subsections: [
        {
          title: "Disclosure and Transfer of Personal Information",
          content: [
            "Where necessary for providing our services, complying with legal obligations, or supporting our operations, personal information may be shared with trusted service providers, professional advisers, or authorised third parties.",
            "Where information is transferred or shared, Lexora Africa takes reasonable steps to ensure that appropriate safeguards are in place to protect such information."
          ]
        },
        {
          title: "Retention of Personal Data",
          content: [
            "Lexora Africa retains personal information only for as long as necessary to fulfil the purpose for which it was collected, comply with legal obligations, resolve disputes, or protect our legitimate interests.",
            "Once information is no longer required, it will be securely deleted or anonymised where appropriate."
          ]
        }
      ]
    },
    {
      number: "10",
      title: "Data Subject Rights",
      content: [
        "Lexora Africa recognises the rights of individuals regarding their personal information.",
        "Individuals may have the right to:",
        "• Request access to their personal information.",
        "• Request correction of inaccurate information.",
        "• Request deletion of information where applicable.",
        "• Object to certain processing activities.",
        "• Withdraw consent where processing is based on consent.",
        "All requests will be reviewed and addressed within a reasonable timeframe in accordance with applicable data protection laws."
      ]
    },
    {
      number: "11",
      title: "Monitoring and Review",
      content: [
        "This Privacy Policy will be reviewed periodically to ensure that it remains accurate, effective, and aligned with applicable legal and regulatory requirements.",
        "Lexora Africa reserves the right to update this Policy when necessary to reflect changes in our practices, services, or applicable privacy obligations."
      ]
    }
  ];

  return (
    <section className="bg-surface px-6 py-16 sm:py-24 text-ink">
      <div className="mx-auto max-w-4xl space-y-16">
        {sections.map((section) => (
          <div key={section.number} className="space-y-6">
            {/* Section Header */}
            <div className="border-l-2 border-signal pl-6">
              <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                <span className="text-signal font-bold">{section.number}.</span> {section.title}
              </h2>
            </div>

            {/* Section Content */}
            <div className="space-y-4 pl-6">
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
                  {paragraph}
                </p>
              ))}

              {/* Subsections if they exist */}
              {section.subsections && (
                <div className="mt-8 space-y-8">
                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx} className="space-y-4">
                      <h3 className="text-lg font-semibold text-ink">
                        {subsection.title}
                      </h3>
                      <div className="space-y-4">
                        {subsection.content.map((para, paraIdx) => (
                          <p key={paraIdx} className="text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            {section.number !== "11" && (
              <div className="pt-4">
                <div className="h-px w-12 bg-gradient-to-r from-signal/30 to-transparent" />
              </div>
            )}
          </div>
        ))}

        {/* Contact Section */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen bg-white mt-16">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="rounded-lg border border-paper/10 bg-gradient-to-br from-paper/5 to-transparent p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-signal font-semibold">
                Questions?
              </p>
              <h3 className="text-2xl font-semibold text-ink mb-4">
                Need Clarification?
              </h3>
              <p className="text-base text-ink/70 mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, please don't hesitate to reach out to us. We're here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-deepSignal"
              >
                Get in Touch
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
