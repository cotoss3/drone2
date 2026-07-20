'use client'

import Link from 'next/link'
import { Heart, Video, Star, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProcessSteps from '@/components/ProcessSteps'
import ServiceGallery from '@/components/ServiceGallery'
import PricingTiers from '@/components/PricingTiers'

const faqs = [
  {
    q: '¿Vuelan durante la ceremonia religiosa o civil?',
    a: 'Evaluamos cada locación. Para exteriores, realizamos vuelos respetuosos a distancia para no interrumpir el sonido del evento. En interiores, solemos volar solo durante sesiones posadas antes o después de la ceremonia.'
  },
  {
    q: '¿Se entregan las tomas crudas (RAW)?',
    a: 'Entregamos un video resumen (Highlight Reel) perfectamente editado y colorizado. Si requieres todos los clips originales en crudo, tiene un pequeño costo adicional por la gestión de datos.'
  },
  {
    q: '¿Qué pasa si el evento dura más del medio día?',
    a: 'Nuestro paquete Estándar cubre 4 horas continuas (ideal para recepción o coctel). Si necesitas cobertura total (preparativos, ceremonia y fiesta completa), nuestro paquete Premium cubre el día completo.'
  }
]

const processSteps = [
  { title: 'Consulta y Logística', desc: 'Coordinamos horario, locación y permisos de vuelo necesarios para tu evento.' },
  { title: 'Cobertura en Vivo', desc: 'Capturamos tomas aéreas discretas durante los momentos clave sin interrumpir el evento.' },
  { title: 'Edición y Colorización', desc: 'Montamos un video resumen con música y color grading profesional.' },
  { title: 'Entrega del Highlight', desc: 'Recibes tu video editado y fotografías en 5 a 7 días hábiles.' }
]

const galleryItems = [
  { src: '/videos/4934753_Wedding_Ceremony_1280x720.mp4', label: 'Boda en Exterior' },
  { src: '/videos/1477278_People_Sports_1280x720.mp4', label: 'Evento Deportivo / Corporativo' }
]

const pricingTiers = [
  {
    name: 'Básico',
    price: '$350',
    period: 'por evento',
    features: ['2 horas de cobertura presencial', 'Video resumen de 3-5 minutos', '10 fotografías digitales', 'Permisos de vuelo básicos'],
    cta: 'Solicitar Básico'
  },
  {
    name: 'Estándar',
    price: '$550',
    period: 'por evento',
    highlighted: true,
    features: ['4 horas de cobertura presencial', 'Video highlight de 5-8 min con música y color grading', '20 fotografías digitales', 'Tomas FPV opcionales'],
    cta: 'Solicitar Estándar'
  },
  {
    name: 'Premium',
    price: '$900',
    period: 'por evento',
    features: ['Día completo (hasta 8 horas)', 'Video cinematográfico multi-momento', '40+ fotografías digitales', 'Entrega prioritaria en 72h + teaser vertical para redes'],
    cta: 'Solicitar Premium'
  }
]

export default function EventsLanding() {
  const [openFAQ, setOpenFAQ] = useState(-1)

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="landing-page">
      {/* 1. HERO SECTION */}
      <section className="hero" style={{ height: '90vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}>
          <source src="/videos/4934753_Wedding_Ceremony_1280x720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', marginLeft: '0' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Cobertura de Eventos</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 900 }}>Recuerdos <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(201,169,97,0.85)' }}>Épicos</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Inmortaliza la magnitud de bodas, maratones, festivales y eventos corporativos con tomas cinematográficas aéreas que te dejarán sin aliento.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contacto" className="btn-primary">Reservar Fecha</Link>
              <a href="#detalles" className="btn-secondary">Ver Paquetes</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EL DOLOR Y LA SOLUCIÓN */}
      <section className="section-padding container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid #ff4444' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ff4444' }}>El Problema</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Organizar un evento masivo o una boda requiere meses de esfuerzo, pero la fotografía tradicional a nivel de piso solo captura fragmentos cerrados de la acción. Es imposible mostrar la escala real, la cantidad de asistentes o la belleza del entorno exterior. Tu recuerdo queda incompleto.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Nuestra Solución</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Te entregamos la gran perspectiva. Inmortalizamos la majestuosidad de tu locación y la energía de tus invitados en tomas épicas. Nuestro dron se convierte en una "cámara de cine" en el cielo, dándole a tu evento un nivel de producción hollywoodense que será inolvidable.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>La fotografía tradicional tiene un límite</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Heart size={32}/>, title: 'Emociones desde el Cielo', desc: 'Ángulos románticos y dramáticos perfectos para bodas y recepciones.' },
            { icon: <Video size={32}/>, title: 'Look Cinematográfico', desc: 'Grabación fluida en 4K y edición profesional para tu video highlight.' },
            { icon: <Star size={32}/>, title: 'Fotografía de Gran Grupo', desc: 'La única forma de reunir a todos tus invitados en una sola foto perfecta.' }
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CÓMO TRABAJAMOS */}
      <ProcessSteps title="Tu Evento, Cubierto de Principio a Fin" steps={processSteps} />

      {/* 4. GALERÍA */}
      <ServiceGallery
        title="Momentos que Hemos Capturado"
        subtitle="Bodas, eventos corporativos y deportivos vistos desde el cielo."
        items={galleryItems}
      />

      {/* 5. PAQUETES (PRECIOS) */}
      <PricingTiers
        title="Cobertura de Eventos"
        subtitle="Diseñado para cubrir los momentos más importantes de tu día, sin importar la escala del evento."
        tiers={pricingTiers}
      />

      {/* 6. FAQ */}
      <section className="section-padding container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Dudas Comunes</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel" style={{ marginBottom: '1rem', padding: '1.5rem', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{faq.q}</h4>
                <motion.div animate={{ rotate: openFAQ === i ? 180 : 0 }}><ChevronDown /></motion.div>
              </div>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.6 }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
