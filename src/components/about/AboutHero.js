import AboutHeroLabel from "./AboutHeroLabel";
import { aboutHeroContent } from "./AboutHeroContent";

export default function AboutHero() {
  return (
    <section className="px-6 pb-10 pt-14 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-container">
        <div className="max-w-5xl">
          <div className="mb-6">
            <AboutHeroLabel label={aboutHeroContent.label} />
          </div>

          <div className="space-y-1">
            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              {aboutHeroContent.title}
            </h1>

            <h1 className="font-display text-4xl leading-[1.02] tracking-tight text-signal sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
              {aboutHeroContent.highlight}
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">
            {aboutHeroContent.description}
          </p>
        </div>
      </div>
    </section>
  );
}