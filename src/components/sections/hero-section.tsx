"use client";

import { Award, ShieldCheck, Star, MapPin, Zap, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { ButtonLink } from "@/components/shared/button-link";
import { HeroVideoMedia } from "@/components/media/hero-video-media";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      {/* Background Media */}
      <HeroVideoMedia />

      {/* Content */}
      <div className="container-shell relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4 rounded-full border border-line bg-surface/50 px-6 py-3 backdrop-blur-md shadow-sm"
          >
            {[
              { icon: ShieldCheck, text: "Established 2007" },
              { icon: MapPin, text: "Sunway Pyramid" },
              { icon: Star, text: "4.9★ Rated" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                <item.icon size={14} className="text-brand-orange" />
                {item.text}
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-display text-5xl font-black tracking-tight text-ink md:text-7xl lg:text-8xl"
          >
            Trusted Mobile Repairs & Devices Since <span className="text-gradient">2007</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl"
          >
            Your premium destination for certified repairs, flagship devices, 
            trade-ins, and high-speed telco plans—all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <ButtonLink href="#contact" variant="primary">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/outlets" variant="secondary">
              Visit Our Store
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-strong">Explore More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-brand-orange"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
