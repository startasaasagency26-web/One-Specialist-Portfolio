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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "container-shell flex items-center justify-between rounded-[2rem] border px-4 py-3 shadow-[0_18px_60px_-28px_rgba(17,17,17,0.16)] backdrop-blur-2xl md:px-5",
          scrolled
            ? "border-black/10 bg-white/88"
            : "border-white/60 bg-white/72",
        )}
      >
        <Link href="#top" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(145deg,var(--brand-red)_0%,var(--brand-red-orange)_48%,var(--brand-orange)_82%,var(--brand-amber)_100%)] shadow-[0_16px_40px_-18px_rgba(225,6,0,0.5)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-display font-semibold text-ink">
              1
            </div>
            <div className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full border border-white/70 bg-white/80" />
          </div>
          <div className="leading-none">
            <div className="font-display text-base font-semibold tracking-[-0.03em] text-ink">
              1 Mobile Store
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
              One Specialist Mobile
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-strong transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="https://www.google.com/maps/search/?api=1&query=Sunway+Pyramid+Mall,+Selangor,+Malaysia"
            variant="secondary"
          >
            Visit our store
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/82 text-ink shadow-[0_12px_30px_-18px_rgba(17,17,17,0.2)] transition hover:border-black/14 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="container-shell mt-3 rounded-[1.75rem] border border-black/10 bg-white/92 p-4 shadow-[0_20px_60px_-28px_rgba(17,17,17,0.24)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-strong transition hover:bg-black/4 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ButtonLink
              href="https://www.google.com/maps/search/?api=1&query=Sunway+Pyramid+Mall,+Selangor,+Malaysia"
              variant="primary"
              className="mt-4 w-full"
            >
              Visit our store
            </ButtonLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
