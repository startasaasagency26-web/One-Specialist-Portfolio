"use client";

import {
  Smartphone,
  ShieldCheck,
  RefreshCw,
  Wifi,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/content/site";

const icons = [Wrench, Smartphone, RefreshCw, Wifi];
import { Wrench } from "lucide-react";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Precision Services for<br />
              Your Mobile Life.
            </h2>
            <p className="mt-6 text-lg text-muted">
              From flagship device retail to complex structural repairs, we provide 
              comprehensive solutions with unmatched technical expertise.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={service.title} delay={0.1 * index}>
                <motion.article
                  whileHover={reduceMotion ? {} : { y: -4 }}
                  className="group relative flex flex-col items-start rounded-3xl border border-line bg-surface p-8 transition-shadow hover:shadow-2xl hover:shadow-accent/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-bold text-ink">
                    {service.title}
                  </h3>
                  
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-accent/80">
                    {service.benefit}
                  </p>

                  <p className="mt-4 text-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-line" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
