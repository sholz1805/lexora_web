import ServiceCard from "./ServiceCard";
import { services } from "./ServiceData";


export default function ServicesGrid() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-container space-y-10 px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            What We Execute
          </p>

          <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Defined Mandates.
            <br />
            Dedicated Engagement Pathways.
          </h2>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}