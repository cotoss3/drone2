'use client'

import { motion } from 'framer-motion'

export default function ProcessSteps({ eyebrow = 'Cómo Trabajamos', title, steps }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '0.8rem' }}>{eyebrow}</span>
        <h2 style={{ fontSize: '2.5rem' }}>{title}</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass-panel"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid var(--accent-color)',
              color: 'var(--accent-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>{step.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
