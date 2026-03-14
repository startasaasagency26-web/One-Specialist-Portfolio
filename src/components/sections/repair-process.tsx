"use client";

import { Search, CheckCircle2, Wrench, ShieldCheck, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { repairSteps } from "@/content/site";

const icons = [Search, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

export function RepairProcessSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Our Repair Process
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              A transparent, rigorous workflow to ensure your device returns to you 
              in factory-standard condition.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* Progress Line */}
          <div className="absolute left-[50%] top-0 hidden h-full w-px bg-line lg:block" />
          
          <div className="grid gap-12 lg:grid-cols-5">
            {repairSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={step.title} delay={0.1 * index}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-surface border border-line text-accent shadow-xl">
                      <Icon size={28} />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[xs] font-bold text-background shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
