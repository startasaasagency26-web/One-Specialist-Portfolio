"use client";

import { Award, CalendarCheck, MapPin, MessageSquare, ShieldCheck, Star, Zap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { HeroVideoMedia } from "@/components/media/hero-video-media";
import { ButtonLink } from "@/components/shared/button-link";

const TRUST_ITEMS = [
  { icon: Award, text: "Established 2007" },
  { icon: MapPin, text: "Sunway Pyramid" },
  { icon: Star, text: "4.9 ★ Rated" },
  { icon: Zap, text: "Same-Day Repairs" },
  { icon: ShieldCheck, text: "Genuine Parts" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20"
    >
      {/* Background Media */}
      <HeroVideoMedia className="absolute inset-0 z-0 h-full w-full" />

      <div className="container-shell relative z-10">
        <motion.div
          style={{ y: contentY, opacity }}
          className="max-w-4xl pt-10"
        >
          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_ITEMS.map((item, i) => (
              <div key={item.text} className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-accent">
                <item.icon size={14} className="opacity-80" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-ink md:text-7xl lg:text-8xl"
          >
            Trusted Mobile<br />
            Repairs & Devices<br />
            Since 2007.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
          >
            Sunway Pyramid's premier 4.9★ rated destination for certified repairs, 
            flagship devices, instant trade-ins, and expert telco solutions. 
            All in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <ButtonLink 
              href="https://wa.me/your-number" 
              className="px-8 py-4 text-base font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_var(--accent)]"
            >
              <MessageSquare className="mr-3" size={20} />
              WhatsApp Us
            </ButtonLink>
            <ButtonLink
              href="https://www.google.com/maps/search/?api=1&query=One+Specialist+Mobile+Sunway+Pyramid"
              variant="secondary"
              className="border-white/10 bg-white/5 px-8 py-4 text-base font-bold backdrop-blur-md hover:bg-white/10"
            >
              <MapPin className="mr-3" size={20} />
              Visit Our Store
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [4, 24, 4], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 h-2 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
