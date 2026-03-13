import { BadgeCheck, Layers3, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { whyChooseUs } from "@/content/site";

const icons = [Layers3, BadgeCheck, ShieldCheck];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="container-shell py-24 md:py-32">
      <Reveal>
        <SectionHeading
          label="Why Us"
          title="Why customers keep coming back."
          intro="Trust, expertise, and convenience in one destination."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {whyChooseUs.map((item, index) => {
          const Icon = icons[index];

          return (
            <Reveal
              key={item.title}
              delay={0.08 * (index + 1)}
              className="rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(252,252,252,0.8)_100%)] p-6 shadow-[0_22px_65px_-34px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(225,6,0,0.12)_0%,rgba(255,77,26,0.14)_48%,rgba(255,179,71,0.18)_100%)] text-[var(--brand-red-orange)] ring-1 ring-black/6">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
