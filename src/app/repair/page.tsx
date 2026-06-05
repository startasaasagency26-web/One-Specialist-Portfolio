'use client'

import { useEffect } from 'react'
import { trackLead, trackViewContent } from '@/lib/pixel'

export default function RepairPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      trackViewContent('Repair Landing Page — Engaged')
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = 'https://wa.me/60173346143?text=Hi%2C%20I%20saw%20your%20ad.%20I%20need%20a%20repair.'

  return (
    <main className="w-full bg-white font-sans text-ink">

      {/* HERO */}
      <section className="bg-[#111] text-white">
        <div className="container-shell py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left — Headline + CTA */}
            <div className="flex flex-col items-start">
              <div className="mb-8">
                <img
                  src="/branding/one-mobile-icon.png"
                  alt="One Specialist Mobile"
                  className="h-10"
                />
              </div>
              <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-5">
                Your Phone<br />Fixed. Today.
              </h1>
              <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed max-w-md">
                Screen repair, battery replacement, Android &amp; iPhone.
                Walk in — no appointment needed.
              </p>
              <a
                href={whatsappUrl}
                onClick={() => trackLead({ content_name: 'Hero CTA' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 bg-[#E8001C] hover:bg-[#c4001a] text-white w-full md:w-auto"
              >
                💬 WhatsApp Us Now
              </a>
              <p className="mt-5 text-xs text-white/40 tracking-wide">
                ⭐ 4.9 Rated &nbsp;·&nbsp; Since 2007 &nbsp;·&nbsp; Digital Mall PJ &amp; Sunway Pyramid
              </p>
            </div>

            {/* Right — Trust Signals (desktop only visual block) */}
            <div className="hidden md:flex flex-col gap-5">
              {[
                { icon: '🔍', title: 'Free Diagnosis', sub: 'No charge to inspect your device' },
                { icon: '⚡', title: 'Same-Day Repair', sub: 'Most repairs done in 30–60 minutes' },
                { icon: '📱', title: 'iPhone + Android', sub: 'All brands and models covered' },
                { icon: '🛡️', title: 'Warranty Included', sub: 'Parts and workmanship guaranteed' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-display font-bold text-sm text-white">{item.title}</p>
                    <p className="text-xs text-white/50 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR — mobile only (desktop shows trust in hero right col) */}
      <section className="md:hidden bg-canvas border-b border-line">
        <div className="container-shell py-6">
          <div className="flex justify-around text-center">
            {[
              { icon: '🔍', title: 'Free Diagnosis', sub: 'No charge to look' },
              { icon: '⚡', title: 'Same-Day', sub: '30–60 min' },
              { icon: '📱', title: 'All Brands', sub: 'iOS & Android' },
            ].map((item) => (
              <div key={item.title} className="flex-1 px-1">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-[11px] font-bold text-ink">{item.title}</p>
                <p className="text-[10px] text-muted">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="container-shell py-16 md:py-24">
          <h2 className="font-display font-extrabold tracking-tight text-3xl md:text-4xl text-center text-ink mb-10">
            What We Repair
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              'Screen Repair',
              'Battery Replacement',
              'Charging Port',
              'Water Damage',
              'Android Repairs',
              'iPhone Repairs',
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl ring-1 ring-line bg-white px-5 py-4 border-l-4 border-[#E8001C] text-sm font-bold text-ink hover:shadow-md transition-shadow duration-200"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-canvas">
        <div className="container-shell py-16 md:py-24">
          <h2 className="font-display font-extrabold tracking-tight text-3xl md:text-4xl text-center text-ink mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: 'Alex Tan',
                review: 'Best mobile repair shop in Sunway Pyramid. Fast, professional, and transparent about the parts being used. Highly recommended!',
              },
              {
                name: 'Sarah Jenkins',
                review: 'Exceptional repair. No one else could fix my charging port issue without a full motherboard replacement — they did it at a fraction of the cost.',
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-[2.5rem] ring-1 ring-line p-8 shadow-sm"
              >
                <div className="text-[#E8001C] text-sm mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-muted leading-relaxed mb-4">"{r.review}"</p>
                <p className="text-xs font-bold text-ink">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-white border-t border-line">
        <div className="container-shell py-12 md:py-16 text-center">
          <h2 className="font-display font-bold text-xl md:text-2xl text-ink mb-8">Find Us Here</h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 justify-center items-center">
            <div>
              <p className="text-sm font-bold text-ink mb-1">📍 Digital Mall PJ</p>
              <p className="text-xs text-muted">Section 14, Petaling Jaya</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-line" />
            <div>
              <p className="text-sm font-bold text-ink mb-1">📍 Sunway Pyramid</p>
              <p className="text-xs text-muted">Subang Jaya, Selangor</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted">Daily: 10:00 AM – 10:00 PM</p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#111]">
        <div className="container-shell py-16 md:py-24 text-center">
          <h2 className="font-display font-extrabold tracking-tight text-3xl md:text-5xl text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-10">
            Just ask. Our team replies fast.
          </p>
          <a
            href={whatsappUrl}
            onClick={() => trackLead({ content_name: 'Bottom CTA' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 bg-[#E8001C] hover:bg-[#c4001a] text-white max-w-sm w-full mx-auto"
          >
            💬 WhatsApp Us Now
          </a>
          <p className="mt-8 text-xs text-white/20">
            One Specialist Mobile © 2026 &nbsp;|&nbsp; onespecialist.my
          </p>
        </div>
      </section>

    </main>
  )
}
