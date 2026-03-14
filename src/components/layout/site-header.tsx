"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "border-white/10 bg-surface/80 shadow-2xl backdrop-blur-2xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#top" className="flex items-center gap-4 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-black text-white">
            1
          </div>
          <div className="hidden lg:block">
            <div className="font-display text-sm font-black tracking-tight text-white">
              One Specialist
            </div>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-orange">
              Premium Mobile
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-muted transition hover:text-white"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand-orange/40 md:hidden"
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
            className="mt-4 overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface p-8 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-xs font-black uppercase tracking-[0.2em] text-muted hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px w-full bg-white/5" />
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
