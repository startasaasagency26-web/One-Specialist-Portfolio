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
    <section id="contact" className="bg-background py-16 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] bg-surface p-10 ring-1 ring-line md:p-20">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-7xl">
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
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-brand-orange">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted">{item.label}</p>
                        <p className="mt-1 font-display text-xl font-bold text-ink">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex flex-col sm:flex-row gap-4 w-full">
                  <ButtonLink 
                    href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, '')}`}
                    className="px-10 py-5 w-full sm:w-auto justify-center"
                  >
                    <MessageSquare className="mr-3" size={20} />
                    WhatsApp Enquire
                  </ButtonLink>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex flex-col sm:flex-row h-auto sm:h-[60px] items-center gap-4 rounded-3xl sm:rounded-full bg-surface-strong pr-6 pl-1.5 ring-1 ring-line transition-all hover:bg-white/[0.03] hover:ring-white/10 w-full sm:w-auto justify-center p-4 sm:p-0"
                  >
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-background ring-1 ring-white/10 shadow-lg transition-transform duration-500 ease-out group-hover:scale-105 group-hover:ring-brand-orange/50 overflow-hidden relative">
                      <div className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                      <MapPin 
                        size={20} 
                        className="text-white transition-all duration-300 group-hover:text-brand-orange group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                      />
                    </div>
                    <span className="font-display text-sm font-bold tracking-wide text-ink transition-colors group-hover:text-brand-orange">
                      Directions
                    </span>
                  </a>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-background ring-1 ring-line">
                <div className="absolute inset-0 bg-brand-gradient opacity-5" />
                <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-surface-strong ring-1 ring-line shadow-sm relative">
                    <div className="absolute inset-[4px] bg-surface rounded-[1.25rem] ring-1 ring-line shadow-sm flex items-center justify-center">
                      <MapPin size={24} className="text-brand-orange" strokeWidth={1.5} />
                    </div>
                  </div>


                  <h3 className="font-display text-3xl font-black text-ink">Sunway Pyramid</h3>
                  <p className="mt-4 max-w-xs text-base font-medium text-muted">{contactDetails.address}</p>
                  <div className="mt-10 inline-flex items-center rounded-full bg-black/5 dark:bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-brand-orange">
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
