"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { faqs } from "@/content/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-shell">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                FAQ.
              </h2>
              <p className="mt-8 text-lg font-medium text-muted">
                Everything you need to know about our repair process, data security, 
                and device guarantees.
              </p>
              <div className="mt-12 rounded-3xl bg-surface p-8 ring-1 ring-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Enquiries</p>
                <p className="mt-4 text-sm font-medium text-white">Still have questions? Chat with our experts.</p>
                <button className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-orange hover:underline">
                  Chat Now →
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <Reveal key={idx} delay={0.05 * idx}>
                    <div className="group py-6">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <span className="font-display text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                          {faq.question}
                        </span>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${isOpen ? 'bg-brand-gradient text-white' : 'bg-white/5 text-muted group-hover:text-white'}`}>
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="pt-6 text-base leading-relaxed text-muted">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
