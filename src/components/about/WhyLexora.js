import Image from "next/image";
import law6 from "@/images/law6.jpg";

export default function WhyLexora() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-signal/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-paper/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-container gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
  
        <div>
       
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-paper/10 bg-paper/5 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-signal" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/70">
              Why Lexora
            </p>
          </div>

     
          <div className="space-y-2">
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Law That Works
            </h2>

            <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl">
              Inside Your Business
            </h2>
          </div>

      
          <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-paper/72 sm:text-lg sm:leading-9">
            <p>
              In highly regulated industries, legal and regulatory
              compliance is not a mere function. It is an
              infrastructure.
            </p>

            <p>
              Lexora operates as an extension of your business. We
              take ownership of regulatory processes, compliance
              obligations and legal risk so your leadership team can
              focus on growth, operations and execution.
            </p>
          </div>
        </div>

   
        <div className="relative">
      
          <div className="absolute inset-0 rounded-[2rem] bg-signal/10 blur-2xl" />

       
          <div className=" h-[520px] w-full group relative overflow-hidden rounded-[2rem] border border-paper/10 bg-paper/5 backdrop-blur-md">
            <Image
              src={law6}
              alt="Lexora legal professionals"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className=" object-cover transition duration-700 group-hover:scale-105"
            />

      
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}