"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X, MessageSquare } from "lucide-react";
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
          "container-shell flex items-center justify-between rounded-full border px-4 py-2 shadow-2xl transition-all duration-300 md:px-6",
          scrolled
            ? "border-line bg-surface/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-lg font-black text-background">
            1
          </div>
          <div className="hidden lg:block leading-none">
            <div className="font-display text-base font-black tracking-tight text-ink">
              One Specialist
            </div>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">
              Premium Mobile
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="#contact"
            className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest"
          >
            Get a Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-accent md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container-shell mt-3 rounded-[2rem] border border-line bg-surface p-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-muted hover:text-accent"
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
