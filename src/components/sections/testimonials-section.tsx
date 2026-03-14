"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const BEFORE_AFTER = [
  { id: 1, title: "iPhone Screen Repair", before: "Cracked beyond use.", after: "Like new condition.", category: "Screen" },
  { id: 2, title: "Samsung Board Repair", before: "Zero power/no boot.", after: "Full data recovery.", category: "Board" },
];

const TESTIMONIALS = [
  { name: "John D.", rating: 5, text: "Fixed my iPhone screen in 30 minutes! Exceptional service at Sunway Pyramid." },
  { name: "Sarah L.", rating: 5, text: "The only place I trust for board-level repairs. They saved my data when others couldn't." },
  { name: "Michael R.", rating: 5, text: "Amazing trade-in value. Professional, transparent, and fast." },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Results & Recognition
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Don't just take our word for it. See our technical work and what 
              our customers have to say.
            </p>
          </div>
        </Reveal>

        {/* Before & After Gallery */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {BEFORE_AFTER.map((item) => (
            <Reveal key={item.id}>
              <div className="group overflow-hidden rounded-[2rem] border border-line bg-background p-4 transition-all hover:border-accent/40">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-strong">
                  {/* Placeholder for real images */}
                  <div className="flex h-full w-full items-center justify-center text-xs font-bold uppercase tracking-widest text-muted/30">
                    {item.title} Media
                  </div>
                  <div className="absolute top-4 left-4 rounded-full bg-background/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-md">
                    {item.category}
                  </div>
                </div>
                <div className="mt-6 flex justify-between px-2 pb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Before</span>
                    <p className="text-sm font-medium text-ink/60">{item.before}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">After</span>
                    <p className="text-sm font-bold text-ink">{item.after}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.name} delay={0.1 * idx}>
              <div className="relative rounded-3xl border border-line bg-background p-8">
                <Quote className="absolute top-8 right-8 h-8 w-8 text-accent/10" />
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink/90 italic">
                  "{t.text}"
                </p>
                <div className="mt-8">
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="text-xs font-medium text-muted uppercase tracking-widest mt-1">Verified Customer</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
