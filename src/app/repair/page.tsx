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
    <main style={{ fontFamily: 'inherit', background: '#fff', color: '#111', maxWidth: '480px', margin: '0 auto', padding: '0' }}>

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', padding: '32px 24px 40px', textAlign: 'center' }}>
        <div style={{ marginBottom: '24px' }}>
          <img src="/branding/one-mobile-icon.png" alt="One Specialist Mobile" style={{ height: '40px' }} />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '12px' }}>
          Your Phone Fixed.<br />Today.
        </h1>
        <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '28px', lineHeight: '1.6' }}>
          Screen repair, battery replacement, Android & iPhone.<br />
          Walk in — no appointment needed.
        </p>
        <a
          href={whatsappUrl}
          onClick={() => trackLead({ content_name: 'Hero CTA' })}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#E8001C',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: '700',
            padding: '16px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            marginBottom: '16px',
          }}
        >
          💬 WhatsApp Us Now
        </a>
        <p style={{ fontSize: '0.8rem', color: '#aaa' }}>
          ⭐ 4.9 Rated &nbsp;|&nbsp; Since 2007 &nbsp;|&nbsp; Digital Mall PJ & Sunway Pyramid
        </p>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: '#f9f9f9', padding: '24px 16px', display: 'flex', justifyContent: 'space-around', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        {[
          { icon: '🔍', title: 'Free Diagnosis', sub: 'No charge to look' },
          { icon: '⚡', title: 'Same-Day Repair', sub: 'Done in 30–60 min' },
          { icon: '📱', title: 'iPhone + Android', sub: 'All brands covered' },
        ].map((item) => (
          <div key={item.title} style={{ flex: 1, padding: '0 4px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{item.icon}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', marginBottom: '2px' }}>{item.title}</div>
            <div style={{ fontSize: '0.7rem', color: '#666' }}>{item.sub}</div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section style={{ padding: '32px 24px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>
          What We Repair
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
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
              style={{
                background: '#fff',
                border: '1px solid #eee',
                borderLeft: '3px solid #E8001C',
                borderRadius: '6px',
                padding: '12px 14px',
                fontSize: '0.85rem',
                fontWeight: '600',
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ background: '#f9f9f9', padding: '32px 24px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
          What Our Customers Say
        </h2>
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
            style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '12px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ color: '#E8001C', fontSize: '0.9rem', marginBottom: '6px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ fontSize: '0.85rem', color: '#333', lineHeight: '1.5', marginBottom: '8px' }}>
              "{r.review}"
            </p>
            <p style={{ fontSize: '0.75rem', color: '#888', fontWeight: '600' }}>— {r.name}</p>
          </div>
        ))}
      </section>

      {/* LOCATIONS */}
      <section style={{ padding: '28px 24px', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '12px' }}>Find Us Here</h2>
        <p style={{ fontSize: '0.85rem', color: '#444', marginBottom: '4px' }}>
          📍 Digital Mall, Section 14, Petaling Jaya
        </p>
        <p style={{ fontSize: '0.85rem', color: '#444', marginBottom: '12px' }}>
          📍 Sunway Pyramid, Subang Jaya
        </p>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>Daily: 10:00 AM – 10:00 PM</p>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: '#111', padding: '36px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '8px' }}>
          Still have questions?
        </h2>
        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '24px' }}>
          Just ask. Our team replies fast.
        </p>
        <a
          href={whatsappUrl}
          onClick={() => trackLead({ content_name: 'Bottom CTA' })}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#E8001C',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: '700',
            padding: '16px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            marginBottom: '20px',
          }}
        >
          💬 WhatsApp Us Now
        </a>
        <p style={{ fontSize: '0.75rem', color: '#555' }}>
          One Specialist Mobile © 2026 &nbsp;|&nbsp; onespecialist.my
        </p>
      </section>

    </main>
  )
}
