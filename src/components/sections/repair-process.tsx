"use client";

import { motion, useReducedMotion } from "motion/react";
import { Search, CheckCircle2, Wrench, ShieldCheck, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { repairSteps } from "@/content/site";

const icons = [Search, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

// Duplicate steps for seamless loop (triple for extra safety on wide screens)
const duplicatedSteps = [...repairSteps, ...repairSteps, ...repairSteps];

export function RepairProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="brand-gradient-tri" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E4221D" />
            <stop offset="50%" stopColor="#F7762D" />
            <stop offset="100%" stopColor="#E4221D" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-shell">
        <Reveal>
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Our <span className="text-gradient">Repair Process</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-muted">
              A transparent, rigorous workflow to ensure your device returns to you 
              in factory-standard condition.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative flex">
        <motion.div
          className="flex gap-16 px-8"
          animate={shouldReduceMotion ? {} : {
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedSteps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={`${step.title}-${index}`}
                className="flex min-w-[280px] flex-col items-center text-center group"
              >
                {/* Icon & Divider Container */}
                <div className="relative mb-10 flex items-center justify-center w-full">
                  {/* Icon Circle */}
                  <div className="z-10 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-surface ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-brand-orange/40">
                    <Icon 
                      size={32} 
                      stroke="url(#brand-gradient-tri)" 
                      className="transition-transform duration-500 group-hover:rotate-12" 
                    />
                  </div>

                  {/* Connecting Divider - using the tri-color gradient */}
                  <div className="absolute left-[50%] top-1/2 h-[2px] w-[calc(100%+4rem)] -translate-y-1/2 bg-brand-gradient-tri opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Step Label */}
                <div className="inline-flex px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-widest text-brand-orange border border-white/5 mb-6">
                  {step.title}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted max-w-[240px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
