"use client";

import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Clock,
  ArrowRight
} from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { contactDetails } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-line bg-surface p-8 shadow-2xl md:p-16">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
                  Ready to start?<br />
                  Let's talk.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted">
                  Whether it's a cracked screen, a device upgrade, or a new telco plan, 
                  our team at Sunway Pyramid is ready to assist you.
                </p>
                
                <div className="mt-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">Call us directly</p>
                      <p className="font-display text-lg font-bold text-ink">{contactDetails.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">Email us</p>
                      <p className="font-display text-lg font-bold text-ink">{contactDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">Store Hours</p>
                      <p className="font-display text-lg font-bold text-ink">{contactDetails.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  <ButtonLink 
                    href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, '')}`}
                    className="px-8"
                  >
                    <MessageSquare className="mr-2" size={18} />
                    WhatsApp Us
                  </ButtonLink>
                  <ButtonLink 
                    href="https://www.google.com/maps/search/?api=1&query=One+Specialist+Mobile+Sunway+Pyramid"
                    variant="secondary"
                    className="px-8"
                  >
                    <MapPin className="mr-2" size={18} />
                    Get Directions
                  </ButtonLink>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-surface-strong">
                {/* Embedded Map Pin or Location Visual */}
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-10" />
                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-background shadow-[0_0_40px_-5px_var(--accent)]">
                    <MapPin size={40} />
                  </div>
                  <p className="font-display text-2xl font-bold text-ink">Sunway Pyramid Mall</p>
                  <p className="mt-2 text-muted">{contactDetails.address}</p>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">Visit our flagship store</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
