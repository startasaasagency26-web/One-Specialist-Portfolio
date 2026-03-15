"use client";

import Link from "next/link";
import { navItems } from "@/content/site";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-line py-24 pb-40">
      <div className="container-shell grid gap-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-black text-white">
              1
            </div>
            <p className="font-display text-2xl font-black tracking-tight text-ink">
              One Specialist
            </p>
          </div>
          <p className="mt-8 text-base font-medium leading-relaxed text-muted">
            The standard for premium mobile excellence at Sunway Pyramid since 
            2007. Specializing in certified repairs, high-value retail, and 
            tailored connectivity.
          </p>
          <div className="mt-10 flex gap-4">
            {[MessageCircle, Phone, MapPin].map((Icon, i) => (
              <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-muted transition hover:text-brand-orange hover:bg-black/10 dark:hover:bg-white/20">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Navigation</p>
          <nav className="mt-10 flex flex-col gap-5 text-sm font-bold text-muted">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Legal</p>
          <nav className="mt-10 flex flex-col gap-5 text-sm font-bold text-muted">
            <Link href="#" className="transition hover:text-ink">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-ink">Terms of Service</Link>
            <Link href="#" className="transition hover:text-ink">Service Warranty</Link>
          </nav>
        </div>
      </div>
      
      <div className="container-shell mt-24 border-t border-line pt-10">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-strong">
          © 2026 One Specialist Berhad. Built for Excellence.
        </p>
      </div>
    </footer>
  );
}
