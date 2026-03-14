"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const BEFORE_AFTER = [
  { id: 1, title: "iPhone Screen Repair", before: "Cracked beyond use.", after: "Factory standard.", category: "Screen" },
  { id: 2, title: "Samsung Board Repair", before: "Zero power/no boot.", after: "Fully restored.", category: "Board" },
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
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Results & Recognition
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-muted">
              Excellence defined by data recovery, hardware precision, and over <span className="text-brand-orange">15 years</span> of trust.
            </p>
          </div>
        </Reveal>

        {/* Before & After Gallery */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {BEFORE_AFTER.map((item) => (
            <Reveal key={item.id}>
              <div className="group overflow-hidden rounded-[2.5rem] bg-background p-6 ring-1 ring-white/5 transition-all hover:ring-brand-orange/30">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-surface-strong">
                  <div className="flex h-full w-full items-center justify-center text-xs font-bold uppercase tracking-widest text-muted/20">
                    {item.title} Media
                  </div>
                  <div className="absolute top-4 left-4 rounded-full bg-brand-gradient px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    {item.category}
                  </div>
                </div>
                <div className="mt-6 flex justify-between px-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-strong">Before</span>
                    <p className="text-sm font-medium text-muted">{item.before}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">After</span>
                    <p className="text-sm font-bold text-white">{item.after}</p>
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
              <div className="relative rounded-[2rem] bg-background p-10 ring-1 ring-white/5">
                <Quote className="absolute top-8 right-8 h-8 w-8 text-brand-orange/5" />
                <div className="flex gap-1 text-brand-orange">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-8 text-lg leading-relaxed text-white/90 italic">
                  "{t.text}"
                </p>
                <div className="mt-10 border-t border-white/5 pt-8">
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-muted">Verified Customer</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
