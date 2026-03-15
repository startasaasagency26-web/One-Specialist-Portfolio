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
        <Link href="#top" className="flex items-center px-2">
          {/* Transparent Logo Lockup Image Asset */}
          <div className="relative h-9 w-48 md:h-10 md:w-56">
            <Image 
              src="/media/logo.png" 
              alt="One Specialist Mobile" 
              fill
              className="object-contain object-left"
              priority
            />
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
