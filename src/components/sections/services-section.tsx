"use client";

import {
  Smartphone,
  TabletSmartphone,
  Wifi,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/content/site";

const icons = [Smartphone, TabletSmartphone, Wrench, Wifi];

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="container-shell py-24 md:py-32">
      <Reveal>
        <SectionHeading
          label="Services"
          title="Core services, kept focused."
          intro="A tighter view of the main retail and service offer."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((item, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={item.title} delay={0.08 * (index + 1)} className="h-full">
              <motion.article
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6, scale: 1.01, transition: { duration: 0.25 } }
                }
                className="group flex h-full flex-col rounded-[1.9rem] border border-black/8 bg-white/76 p-6 shadow-[0_20px_60px_-34px_rgba(17,17,17,0.18)] backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(225,6,0,0.12)_0%,rgba(255,77,26,0.14)_48%,rgba(255,179,71,0.18)_100%)] text-[var(--brand-red-orange)] ring-1 ring-black/6">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-balance font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(225,6,0,0.24),rgba(255,179,71,0.08),transparent)]" />
                <p className="mt-3 text-sm font-medium text-muted-strong">
                  {item.meta}
                </p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
