import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-signal/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-paper/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 pb-10 pt-20 lg:px-12">
        {/* TOP GRID */}
        <div className="grid gap-14 border-b border-paper/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr]">
          {/* BRAND */}
          <div className="max-w-sm">
            {/* Logo */}


<div className="flex items-center">
  <Image
    src="/assets/LexoraLogoWhite.png"
    alt="Lexora"
    width={200}
    height={40}
    className="h-20 w-auto object-contain"
    priority
  />
</div>

            {/* Main Copy */}
            <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight text-paper sm:text-4xl">
              Precise counsel.
              <br />
              Commercial instinct.
              <br />
              Global reach.
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-paper/65">
              Legal execution for regulated businesses operating
              across Africa and global markets.
            </p>

            {/* Website */}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-paper/80 transition hover:text-signal"
              >
                lexora.africa
              </Link>
            </div>
          </div>

          {/* CAPABILITIES */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">
              Capabilities
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Licensing & Approvals",
                "Compliance Management",
                "Investigations & Recovery",
                "Corporate Services",
                "Legal Partnership",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm leading-6 text-paper/65 transition hover:text-paper"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTORS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">
              Sectors
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Financial Services",
                "Digital Assets",
                "Energy",
                "Trade & Logistics",
                "Consumer Markets",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm leading-6 text-paper/65 transition hover:text-paper"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INSIGHTS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">
              Insights
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Regulatory Updates",
                "Licensing Guides",
                "Compliance Briefings",
                "Investigation Reports",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/insight"
                    className="text-sm leading-6 text-paper/65 transition hover:text-paper"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FIRM */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper">
              Firm
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "About Lexora",
                "Careers",
                "Contact Us",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/about"
                    className="text-sm leading-6 text-paper/65 transition hover:text-paper"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lexora. All rights
            reserved.
          </p>

          <p>
            Legal Execution for Regulated Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}