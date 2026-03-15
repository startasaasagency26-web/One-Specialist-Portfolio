"use client";

import { Wrench, Smartphone, RefreshCw, Wifi } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Reveal } from "@/components/shared/reveal";
import { services } from "@/content/site";

const icons = [Wrench, Smartphone, RefreshCw, Wifi];

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              Precision Services for Your Mobile Life.
            </h2>
            <p className="mt-8 text-lg font-medium text-muted">
              From flagship device retail to complex board repairs, we provide 
              comprehensive solutions with unmatched technical expertise.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={service.title} delay={0.1 * index}>
                <motion.article
                  whileHover={reduceMotion ? {} : { y: -5 }}
                  className="group relative flex flex-col items-start overflow-hidden rounded-[2.5rem] bg-surface p-10 ring-1 ring-line transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:ring-brand-orange/30"
                >
                  <div className="relative mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 group-hover:bg-brand-orange/10 text-brand-orange transition-colors duration-500">
                    <Icon size={28} />
                  </div>

                  <h3 className="relative font-display text-2xl font-bold text-ink">
                    {service.title}
                  </h3>
                  
                  <p className="relative mt-3 text-xs font-black uppercase tracking-widest text-brand-orange/80">
                    {service.benefit}
                  </p>

                  <p className="relative mt-6 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
