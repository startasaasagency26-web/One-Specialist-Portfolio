"use client";

import { CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { whyChooseUs } from "@/content/site";

const icons = [Award, Zap, Smartphone, ShieldCheck];
import { Smartphone } from "lucide-react";

export function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-surface py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Why <span className="text-gradient">One Specialist</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-muted">
              Built on technical excellence and consumer trust since 2007.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={0.1 * index}>
                <div className="group flex flex-col items-center text-center">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-background ring-1 ring-white/5 shadow-2xl transition-all group-hover:ring-brand-orange/30">
                    <Icon size={32} className="text-brand-orange" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
