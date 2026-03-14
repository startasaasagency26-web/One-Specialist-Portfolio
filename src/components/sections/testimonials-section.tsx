"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { GoogleReviewsSection } from "./google-reviews";

const BEFORE_AFTER = [
  { id: 1, title: "iPhone Screen Repair", before: "Cracked beyond use.", after: "Factory standard.", category: "Screen", img: "/media/iphone-repair-before-after.jpg", alt: "Cracked smartphone screen before and after repair" },
  { id: 2, title: "Samsung Board Repair", before: "Zero power/no boot.", after: "Fully restored.", category: "Board", img: "/media/samsung-board-before-after.jpg", alt: "Damaged circuit board before and after restoration" },
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
                  <img 
                    src={item.img} 
                    alt={item.alt}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
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
        <GoogleReviewsSection />
      </div>
    </section>
  );
}
