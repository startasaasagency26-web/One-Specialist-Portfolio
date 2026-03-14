"use client";

import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Clock,
} from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { contactDetails } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] bg-surface p-10 ring-1 ring-white/5 md:p-20">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-7xl">
                  Let's <span className="text-gradient">Talk</span>.
                </h2>
                <p className="mt-8 text-lg font-medium leading-relaxed text-muted">
                  Whether it's a structural repair, flagship upgrade, or a custom 
                  telco solution, we're here to help.
                </p>
                
                <div className="mt-14 space-y-8">
                  {[
                    { icon: Phone, label: "Official Line", value: contactDetails.phone },
                    { icon: Mail, label: "Email Support", value: contactDetails.email },
                    { icon: Clock, label: "Store Hours", value: contactDetails.hours },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-brand-orange">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted">{item.label}</p>
                        <p className="mt-1 font-display text-xl font-bold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex flex-wrap gap-5">
                  <ButtonLink 
                    href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, '')}`}
                    className="px-10 py-5"
                  >
                    <MessageSquare className="mr-3" size={20} />
                    WhatsApp Enquire
                  </ButtonLink>
                  <ButtonLink 
                    href="https://maps.google.com"
                    variant="secondary"
                    className="px-10 py-5"
                  >
                    <MapPin className="mr-3" size={20} />
                    Directions
                  </ButtonLink>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-background ring-1 ring-white/5">
                <div className="absolute inset-0 bg-brand-gradient opacity-5" />
                <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-gradient text-white shadow-2xl">
                    <MapPin size={40} />
                  </div>
                  <h3 className="font-display text-3xl font-black text-white">Sunway Pyramid</h3>
                  <p className="mt-4 max-w-xs text-base font-medium text-muted">{contactDetails.address}</p>
                  <div className="mt-10 inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-brand-orange">
                    Flagship Store
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
