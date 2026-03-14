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
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                Common Questions
              </h2>
              <p className="mt-6 text-lg text-muted">
                Everything you need to know about our repair process, data security, 
                and device guarantees.
              </p>
              <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-sm font-bold text-ink uppercase tracking-widest">Still have questions?</p>
                <p className="mt-2 text-sm text-muted">Contact our team directly on WhatsApp for immediate assistance.</p>
                <button className="mt-4 text-xs font-bold uppercase tracking-widest text-accent hover:underline">
                  Chat Now →
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <Reveal key={idx} delay={0.05 * idx}>
                    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-surface-strong"
                      >
                        <span className="font-display text-lg font-bold text-ink">
                          {faq.question}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background border border-line text-accent">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 text-muted leading-relaxed">
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
