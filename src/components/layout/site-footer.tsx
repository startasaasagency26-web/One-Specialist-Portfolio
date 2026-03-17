"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/content/site";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-line py-24 pb-40">
      <div className="container-shell grid gap-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center md:h-9 md:w-9">
              <Image 
                src="/branding/one-mobile-icon.png" 
                alt="One Specialist Mobile Icon" 
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[13px] font-bold tracking-tight text-ink md:text-[15px]">
              One Specialist Mobile
            </span>
          </div>
          <p className="mt-8 text-base font-medium leading-relaxed text-muted">
            The standard for premium mobile excellence at Sunway Pyramid since 
            2007. Specializing in certified repairs, high-value retail, and 
            tailored connectivity.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-muted transition hover:text-brand-orange hover:bg-black/10 dark:hover:bg-white/20">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-muted transition hover:text-brand-orange hover:bg-black/10 dark:hover:bg-white/20">
              <Phone size={18} />
            </a>
            <Link href="/outlets" className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-muted transition hover:text-brand-orange hover:bg-black/10 dark:hover:bg-white/20">
              <MapPin size={18} />
            </Link>
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
