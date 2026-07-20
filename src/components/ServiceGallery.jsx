'use client'

import { motion } from 'framer-motion'

export default function ServiceGallery({ title = 'Ejemplos de Trabajo', subtitle, items }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: subtitle ? '1rem' : 0 }}>{title}</h2>
        {subtitle && <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>{subtitle}</p>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass-panel"
            style={{ borderRadius: '8px', overflow: 'hidden' }}
          >
            <video src={item.src} autoPlay muted loop playsInline style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem' }}>{item.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
