"use client";

import { motion, useReducedMotion } from "motion/react";
import { Search, CheckCircle2, Wrench, ShieldCheck, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { repairSteps } from "@/content/site";

const icons = [Search, CheckCircle2, Wrench, ShieldCheck, PackageCheck];

export function RepairProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for the container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each card
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <section id="repair-process" className="bg-background py-24 md:py-32 overflow-hidden">
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

        {/* Staggered Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 md:grid-cols-3 lg:grid-cols-5"
        >
          {repairSteps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={step.title}
                variants={itemVariants}
                className="group flex flex-col items-center text-center p-6 rounded-[2rem] bg-surface ring-1 ring-white/5 transition-all hover:ring-brand-orange/30"
              >
                {/* Icon with Brand Gradient (Red -> Orange) */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-background ring-1 ring-white/10 text-brand-orange shadow-2xl transition-all group-hover:scale-110">
                  <Icon size={28} className="text-brand-orange" />
                </div>

                <div className="mb-4 inline-flex px-3 py-1 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-widest text-brand-orange">
                  Step {index + 1}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
