"use client";

import { CheckCircle2, Award, Zap, ShieldCheck, Smartphone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { whyChooseUs } from "@/content/site";

const icons = [Award, Zap, Smartphone, ShieldCheck];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="relative bg-surface py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Video blended into the surface theme */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-30 filter blur-[1px] saturate-200 contrast-125"
        >
          <source src="/media/logo-animation-tech.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/60 to-surface" />
      </div>

      <div className="container-shell relative z-10">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl lg:text-6xl drop-shadow-sm">
              Why <span className="text-gradient">One Specialist</span>?
            </h2>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg font-medium text-muted drop-shadow-sm">
              Built on technical excellence and consumer trust since 2007.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={0.1 * index}>
                <div className="group flex flex-col items-center text-center">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-background ring-1 ring-line shadow-2xl transition-all group-hover:ring-brand-orange/30">
                    <Icon size={32} className="text-brand-orange" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">
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
