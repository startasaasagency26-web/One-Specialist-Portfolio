"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { whyChooseUs } from "@/content/site";

export function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-surface py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Why One Specialist?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Built on a foundation of technical excellence and consumer trust 
              since 2007.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * index}>
              <div className="group relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-background border border-line text-accent group-hover:bg-accent/5 transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
