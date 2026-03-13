import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutPrinciples } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="container-shell py-24 md:py-32">
      <Reveal>
        <SectionHeading
          label="About"
          title="A cleaner, more credible take on the mobile store."
          intro="1 Mobile Store has combined retail depth and technical service since 2007."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-[2rem] border border-black/8 bg-white/74 p-8 shadow-[0_24px_70px_-34px_rgba(17,17,17,0.18)] backdrop-blur-2xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-strong">
            One Specialist Mobile
          </p>
          <p className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold tracking-[-0.05em] text-ink md:text-4xl">
            Devices, repairs, trade-ins, and telco solutions under one warm,
            better-edited roof.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {aboutPrinciples.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.08 * (index + 1)}
              className="rounded-[1.75rem] border border-black/8 bg-white/72 p-5 shadow-[0_20px_60px_-34px_rgba(17,17,17,0.16)] backdrop-blur-2xl"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
