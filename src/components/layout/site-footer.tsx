"use client";

import Link from "next/link";
import { navItems } from "@/content/site";
import { MessageSquare, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-line py-20 pb-32">
      <div className="container-shell grid gap-16 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-lg font-black text-background">
              1
            </div>
            <p className="font-display text-2xl font-black tracking-tight text-ink">
              One Specialist
            </p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Premium mobile destination at Sunway Pyramid since 2007. 
            Shaping the standard for repairs, device retail, and telco 
            excellence in Malaysia.
          </p>
        </div>

        <div className="md:col-span-4 lg:col-span-3 lg:col-offset-1">
          <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-accent">Quick Links</p>
          <nav className="mt-8 flex flex-col gap-4 text-sm font-medium text-muted">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:col-span-4 lg:col-span-4">
          <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-accent">Get in Touch</p>
          <div className="mt-8 space-y-4">
            <Link href="#contact" className="flex items-center gap-3 text-sm text-muted hover:text-ink transition">
              <MessageSquare size={16} className="text-accent" />
              WhatsApp Business Enquiry
            </Link>
            <Link href="#contact" className="flex items-center gap-3 text-sm text-muted hover:text-ink transition">
              <Phone size={16} className="text-accent" />
              Official Store Line
            </Link>
            <Link href="#contact" className="flex items-center gap-3 text-sm text-muted hover:text-ink transition">
              <MapPin size={16} className="text-accent" />
              Sunway Pyramid, Selangor
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container-shell mt-20 pt-8 border-t border-line">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-strong">
            © 2026 One Specialist Berhad. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-muted-strong hover:text-ink">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-muted-strong hover:text-ink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
