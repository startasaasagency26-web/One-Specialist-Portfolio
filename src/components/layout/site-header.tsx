"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { ButtonLink } from "@/components/shared/button-link";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 12);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 backdrop-blur-md transition-all duration-300",
          "rounded-[2.5rem] bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]",
          scrolled
            ? "border-line bg-surface/90 shadow-lg"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#top" className="flex items-center gap-3 px-2">
          {/* Brand Icon SVG */}
          <div className="relative h-9 w-9">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 176" className="h-full w-full" role="img" aria-label="One Specialist Mobile icon">
              <defs>
                <linearGradient id="brandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ED1C24" />
                  <stop offset="100%" stopColor="#F15A24" />
                </linearGradient>
              </defs>
              {/* Outer Ring with top-left break */}
              <circle 
                cx="88.5" 
                cy="88" 
                r="74" 
                fill="none" 
                stroke="url(#brandGrad)" 
                strokeWidth="18" 
                strokeDasharray="370 110" 
                strokeDashoffset="-12"
                strokeLinecap="round"
              />
              {/* Precise Serif Inside digit 1 */}
              <path 
                d="M 68.6, 51 C 75.6, 47.5 77.4, 40.5 80, 27.6 H 96 V 126 H 111 V 135 H 65 V 126 H 80 V 40.5 C 74.8, 45 72.1, 48.4 68.6, 51 Z" 
                fill="url(#brandGrad)" 
              />
              {/* Star Overlap top-left accurately styled */}
              <g transform="translate(39, 39)">
                <line x1="-15" y1="0" x2="15" y2="0" stroke="url(#brandGrad)" strokeWidth="7" strokeLinecap="round" />
                <line x1="0" y1="-15" x2="0" y2="15" stroke="url(#brandGrad)" strokeWidth="7" strokeLinecap="round" />
                <line x1="-11" y1="-11" x2="11" y2="11" stroke="url(#brandGrad)" strokeWidth="7" strokeLinecap="round" />
                <line x1="-11" y1="11" x2="11" y2="-11" stroke="url(#brandGrad)" strokeWidth="7" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* Brand Name Text */}
          <div className="font-display text-sm font-black tracking-tight text-ink">
            One Specialist Mobile
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            className="hidden px-5 py-2.5 text-[10px] md:inline-flex"
          >
            Get a Quote
          </ButtonLink>

          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-black/5 dark:bg-white/5 text-ink transition hover:border-brand-orange/40 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-4 overflow-hidden rounded-[2.5rem] border border-line bg-surface p-8 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-xs font-black uppercase tracking-[0.2em] text-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px w-full bg-line" />
              <ButtonLink href="#contact" onClick={() => setOpen(false)} className="w-full">
                Get a Quote
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
