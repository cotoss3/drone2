'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PricingTiers({ title, subtitle, tiers, ctaHref = '/contacto' }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="detalles" className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
          {subtitle && <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>{subtitle}</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: tier.highlighted ? '1px solid var(--accent-color)' : undefined
              }}
            >
              {tier.highlighted && (
                <span style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent-color)',
                  color: '#050505',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.35rem 1.2rem',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}>
                  Más Elegido
                </span>
              )}
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>{tier.name}</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: '800' }}>{tier.price}</span>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.4rem', fontSize: '0.9rem' }}>{tier.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
                {tier.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <Check size={18} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '2px' }} /> {feat}
                  </li>
                ))}
              </ul>
              <Link href={ctaHref} className={tier.highlighted ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%', textAlign: 'center' }}>
                {tier.cta || 'Solicitar'}
              </Link>
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '3rem', fontSize: '0.9rem' }}>
          ¿Proyecto de mayor escala o requerimientos especiales?{' '}
          <Link href="/contacto" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>
            Solicita una cotización a la medida
          </Link>.
        </p>
      </div>
    </section>
  )
}
