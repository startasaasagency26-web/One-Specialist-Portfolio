"use client";

import Link from "next/link";
import { Mail, MapPin, MessageSquare, Phone, Clock } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { contactDetails } from "@/content/site";
import { toMailtoHref, toTelHref, toWhatsAppHref } from "@/lib/utils";

export function ContactSection() {
  const contactItems = [
    {
      icon: Phone,
      label: "Official Line",
      value: contactDetails.phone,
      href: toTelHref(contactDetails.phone),
    },
    {
      icon: Mail,
      label: "Email Support",
      value: contactDetails.email,
      href: toMailtoHref(contactDetails.email, {
        subject: "Inquiry from One Specialist website",
        body: "Hi One Specialist,\n\nI would like to enquire about your services.\n\nThank you.",
      }),
    },
    {
      icon: Clock,
      label: "Store Hours",
      value: contactDetails.hours,
    },
  ];

  return (
    <section id="contact" className="bg-background py-16 md:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] bg-surface p-6 md:p-20 ring-1 ring-line">
            <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-7xl">
                  Let&apos;s <span className="text-gradient">Talk</span>.
                </h2>
                <p className="mt-8 text-lg font-medium leading-relaxed text-muted">
                  Whether it&apos;s a precision repair, a device upgrade, or expert
                  guidance, we&apos;re here to help.
                </p>
                
                <div className="mt-10 md:mt-14 space-y-6 md:space-y-8">
                  {contactItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-brand-orange">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            aria-label={`${item.label}: ${item.value}`}
                            className="mt-1 inline-flex font-display text-xl font-bold text-ink transition hover:text-brand-orange"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-display text-xl font-bold text-ink">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex justify-center md:mt-14">
                  <a 
                    href={toWhatsAppHref(contactDetails.whatsapp)}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-[52px] w-full max-w-xs items-center justify-center gap-2.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 px-8 text-xs font-bold uppercase tracking-widest text-ink shadow-[0_8px_16px_rgba(242,75,38,0.03)] transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:shadow-md"
                  >
                    <MessageSquare size={16} className="text-brand-orange transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>

              <div className="relative aspect-auto md:aspect-square h-auto md:h-full overflow-hidden rounded-[2.5rem] bg-background ring-1 ring-line py-16 md:py-0">
                <div className="absolute inset-0 bg-brand-gradient opacity-5" />
                <div className="relative flex h-full flex-col items-center justify-center p-8 md:p-12 text-center">
                  <Link href="/outlets" className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-surface-strong ring-1 ring-line shadow-sm relative hover:scale-105 transition-all cursor-pointer">
                    <div className="absolute inset-[4px] bg-surface rounded-[1.25rem] ring-1 ring-line shadow-sm flex items-center justify-center hover:bg-surface/90">
                      <MapPin size={24} className="text-brand-orange" strokeWidth={1.5} />
                    </div>
                  </Link>


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
