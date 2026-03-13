"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { HeroVideoMedia } from "@/components/media/hero-video-media";
import { ButtonLink } from "@/components/shared/button-link";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -18],
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 md:pt-36 lg:min-h-screen lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-white" />
      
      {/* Background Media - Wider presence */}
      <HeroVideoMedia className="inset-0 -z-10 lg:left-[35%] lg:right-0 lg:inset-y-0" />

      <div className="container-shell relative flex min-h-[calc(100vh-7rem)] items-center lg:justify-start pb-16 lg:pb-0">
        <motion.div
          style={{ y: textY }}
          className="relative z-10 w-full max-w-[27rem] text-center lg:text-left pt-8 md:pt-10 lg:pt-0"
        >
          {/* Subtle Neutral Luminous Wash behind text */}
          <div className="absolute -inset-x-16 -inset-y-20 -z-10 rounded-[4rem] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.85),rgba(250,250,250,0.4)_60%,transparent_100%)] blur-[40px]" />
          
          <motion.span
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="inline-flex rounded-full border border-black/8 bg-white/76 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-strong shadow-[0_14px_40px_-24px_rgba(17,17,17,0.14)] backdrop-blur-xl"
          >
            EST. 2007 · SUNWAY PYRAMID · 4.9★ RATED
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7 font-display text-5xl font-semibold tracking-[-0.075em] text-ink md:text-6xl lg:text-[4rem] lg:leading-[1.12]"
          >
            All-in-one<br />
            mobile store.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-5 text-pretty text-lg leading-relaxed text-muted md:text-xl"
          >
            Flagship devices, fast repairs, trade-ins, and telco solutions since
            2007.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <ButtonLink href="#services">
              Explore services
              <ArrowRight className="ml-2" size={16} />
            </ButtonLink>
            <ButtonLink
              href="https://www.google.com/maps/search/?api=1&query=Sunway+Pyramid+Mall,+Selangor,+Malaysia"
              variant="secondary"
            >
              <MapPin className="mr-2" size={16} />
              Visit our store
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 border-t border-black/8 pt-6 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-muted-strong"
          >
            Apple · Samsung · Xiaomi · ROG · Black Shark
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
