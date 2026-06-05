'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'
import {
  Search,
  Zap,
  Smartphone,
  ShieldCheck,
  MapPin,
  Star,
  MessageCircle,
  Monitor,
  Battery,
  Plug,
  Droplets,
  Clock,
} from 'lucide-react'

import { trackLead, trackViewContent } from '@/lib/pixel'
import { SectionHeading } from '@/components/shared/section-heading'
import { Reveal } from '@/components/shared/reveal'
import { cn } from '@/lib/utils'

const WHATSAPP_URL =
  'https://wa.me/60173346143?text=Hi%2C%20I%20saw%20your%20ad.%20I%20need%20a%20repair.'

function WhatsAppCTA({
  label,
  trackLabel,
  className,
}: {
  label: string
  trackLabel: string
  className?: string
}) {
  return (
    <a
      href={WHATSAPP_URL}
      onClick={() => trackLead({ content_name: trackLabel })}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-3 rounded-full bg-brand-gradient px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
        className,
      )}
    >
      <MessageCircle size={16} />
      {label}
    </a>
  )
}

const trustCards = [
  { icon: Search, title: 'Free Diagnosis', sub: 'No charge to inspect your device' },
  { icon: Zap, title: 'Same-Day Repair', sub: 'Most repairs done in 30–60 minutes' },
  { icon: Smartphone, title: 'iPhone + Android', sub: 'All brands and models covered' },
  { icon: ShieldCheck, title: 'Warranty Included', sub: 'Parts and workmanship guaranteed' },
]

const services = [
  { icon: Monitor, title: 'Screen Repair' },
  { icon: Battery, title: 'Battery Replacement' },
  { icon: Plug, title: 'Charging Port' },
  { icon: Droplets, title: 'Water Damage' },
  { icon: Smartphone, title: 'Android Repairs' },
  { icon: Smartphone, title: 'iPhone Repairs' },
]

const reviews = [
  {
    name: 'Alex Tan',
    review:
      'Best mobile repair shop in Sunway Pyramid. Fast, professional, and transparent about the parts being used. Highly recommended!',
  },
  {
    name: 'Sarah Jenkins',
    review:
      'Exceptional repair. No one else could fix my charging port issue without a full motherboard replacement — they did it at a fraction of the cost.',
  },
]

export default function RepairPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      trackViewContent('Repair Landing Page — Engaged')
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="w-full bg-background text-ink">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-shell py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20 items-center">

            {/* Left — Headline + CTA */}
            <div className="flex flex-col items-start">

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-8 flex flex-wrap gap-x-3 gap-y-2"
              >
                {[
                  { icon: ShieldCheck, text: 'Established 2007' },
                  { icon: MapPin, text: 'Digital Mall PJ & Sunway Pyramid' },
                  { icon: Star, text: '4.9★ Rated' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted backdrop-blur-sm"
                  >
                    <item.icon size={11} className="text-brand-orange" />
                    {item.text}
                  </div>
                ))}
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
              >
                Your Phone<br />
                <span className="text-gradient">Fixed. Today.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mb-10 max-w-md text-base leading-relaxed text-muted md:text-lg"
              >
                Screen repair, battery replacement, Android &amp; iPhone.
                Walk in — no appointment needed.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full sm:w-auto"
              >
                <WhatsAppCTA
                  label="WhatsApp Us Now"
                  trackLabel="Hero CTA"
                  className="w-full sm:w-auto"
                />
              </motion.div>
            </div>

            {/* Right — Trust signal cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              {trustCards.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-5 rounded-[2.5rem] bg-surface px-6 py-5 shadow-sm ring-1 ring-line transition-all duration-300 hover:shadow-md hover:ring-brand-orange/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-line">
                    <item.icon size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="container-shell py-16 sm:py-24 md:py-28">
          <Reveal>
            <SectionHeading
              label="Our Services"
              title="What We Repair"
              intro="From cracked screens to dead batteries — we handle all brands and models, fast."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 md:gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.07 * i}>
                <div className="group flex flex-col gap-4 rounded-[2.5rem] bg-surface px-6 py-6 shadow-sm ring-1 ring-line transition-all duration-300 hover:shadow-md hover:ring-brand-orange/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-line transition-all duration-300 group-hover:ring-brand-orange/20">
                    <service.icon size={20} className="text-brand-orange" />
                  </div>
                  <p className="font-display text-sm font-bold text-ink">{service.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────── */}
      <section className="bg-background">
        <div className="container-shell py-16 sm:py-24 md:py-28">
          <Reveal>
            <SectionHeading
              label="Customer Reviews"
              title="What Our Customers Say"
              intro="Real feedback from customers who visited our outlets at Digital Mall PJ and Sunway Pyramid."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={0.1 * i}>
                <div className="flex flex-col gap-5 rounded-[2.5rem] bg-surface p-8 shadow-sm ring-1 ring-line">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted">"{r.review}"</p>
                  <p className="text-xs font-bold text-ink">— {r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ─────────────────────────────────────────── */}
      <section className="bg-canvas">
        <div className="container-shell py-16 sm:py-20 md:py-24">
          <Reveal>
            <SectionHeading
              label="Find Us"
              title="Visit Our Stores"
              intro="Walk in at either location — no appointment needed. Open daily, 10 AM to 10 PM."
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-16">
            {[
              { name: 'Digital Mall PJ', address: 'Section 14, Petaling Jaya' },
              { name: 'Sunway Pyramid', address: 'Subang Jaya, Selangor' },
            ].map((loc, i) => (
              <Reveal key={loc.name} delay={0.1 * i}>
                <div className="flex items-start gap-4 rounded-[2.5rem] bg-surface px-6 py-6 shadow-sm ring-1 ring-line">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-line">
                    <MapPin size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{loc.name}</p>
                    <p className="mt-1 text-xs text-muted">{loc.address}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
                      <Clock size={10} className="text-brand-orange" />
                      Daily: 10:00 AM – 10:00 PM
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="bg-ink">
        <div className="container-shell py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="mb-5 font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Still have questions?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-base text-white/50 md:text-lg">
              Our team replies fast. Just drop us a message.
            </p>
            <WhatsAppCTA label="WhatsApp Us Now" trackLabel="Bottom CTA" className="mx-auto" />
            <p className="mt-10 text-xs text-white/20">
              One Specialist Mobile © 2026 &nbsp;|&nbsp; onespecialist.my
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
