"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { HeroVideoMedia } from "@/components/media/hero-video-media";
import { ButtonLink } from "@/components/shared/button-link";
import { heroHighlights } from "@/content/site";

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
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_18%,rgba(255,179,71,0.2),transparent_26%),radial-gradient(circle_at_82%_14%,rgba(225,6,0,0.1),transparent_22%),linear-gradient(180deg,#fbfaf8_0%,#f7f7f5_42%,#f3f0eb_100%)]" />
      <HeroVideoMedia className="inset-y-[6%] left-[14%] right-[-10%] -z-10 md:inset-y-[4%] md:left-[14%] md:right-[-12%] lg:inset-y-[2%] lg:left-[28%] lg:right-[-14%] xl:left-[32%] xl:right-[-15%]" />

      <div className="container-shell relative flex min-h-[calc(100vh-7rem)] items-center pb-16 lg:pb-20">
        <motion.div
          style={{ y: textY }}
          className="relative z-10 max-w-[27rem] pt-8 md:pt-10 lg:pt-0"
        >
          <div className="absolute -inset-x-10 -inset-y-12 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_16%_26%,rgba(255,255,255,0.98)_0%,rgba(247,247,245,0.94)_36%,rgba(247,247,245,0.72)_58%,rgba(247,247,245,0.3)_78%,transparent_100%)] blur-[34px]" />
          <div className="absolute -left-8 top-4 -z-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,179,71,0.14),transparent_72%)] blur-3xl" />
          <div className="absolute left-[16%] top-[38%] -z-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,77,26,0.08),transparent_74%)] blur-3xl" />

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
            className="mt-6 max-w-[18rem] text-balance font-display text-5xl font-semibold tracking-[-0.075em] text-ink md:max-w-[22rem] md:text-6xl lg:max-w-[24rem] lg:text-[4rem] lg:leading-[0.96]"
          >
            Malaysia&apos;s premium all-in-one mobile store.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-5 max-w-[23rem] text-pretty text-lg leading-8 text-muted md:text-xl"
          >
            Flagship devices, fast repairs, trade-ins, and telco solutions since
            2007.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            className="mt-7 border-t border-black/8 pt-4 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-muted-strong"
          >
            {heroHighlights.join(" · ")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
