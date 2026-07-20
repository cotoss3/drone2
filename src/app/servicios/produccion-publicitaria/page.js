'use client'

import Link from 'next/link'
import { Film, Edit, MonitorPlay, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProcessSteps from '@/components/ProcessSteps'
import ServiceGallery from '@/components/ServiceGallery'
import PricingTiers from '@/components/PricingTiers'

const faqs = [
  {
    q: '¿Ustedes dirigen la grabación o debo darles instrucciones?',
    a: 'Podemos adaptarnos a ambas metodologías. Contamos con equipo creativo para proponer guiones y tomas, pero también podemos trabajar bajo las directrices estrictas del director de tu agencia.'
  },
  {
    q: '¿Entregan material adaptado para Reels y TikTok (Vertical)?',
    a: 'Sí. A diferencia del cine tradicional (horizontal), encuadramos y exportamos los videos en múltiples formatos de relación de aspecto (9:16 para redes sociales y 16:9 para web/Youtube).'
  },
  {
    q: '¿Qué equipos de grabación utilizan?',
    a: 'Para publicidad de alto nivel utilizamos drones Inspire 2 o Mavic 3 Cine, los cuales graban en formatos Apple ProRes 422 HQ, permitiendo un rango dinámico masivo para la corrección de color.'
  }
]

const processSteps = [
  { title: 'Brief Creativo', desc: 'Definimos el guion, referencias visuales y locaciones junto a tu equipo o agencia.' },
  { title: 'Preproducción', desc: 'Coordinamos permisos de vuelo, horarios y logística de cada locación.' },
  { title: 'Rodaje Aéreo', desc: 'Ejecutamos las tomas en 4K/ProRes con perfiles de color planos (D-Log).' },
  { title: 'Postproducción', desc: 'Editamos, coloreamos y exportamos en múltiples formatos (16:9 y 9:16).' }
]

const galleryItems = [
  { src: '/videos/0_Aerial_View_Landscape_1280x720.mp4', label: 'Toma Cinemática de Paisaje' },
  { src: '/videos/1476565_People_1280x720.mp4', label: 'B-Roll Urbano para Marca' }
]

const pricingTiers = [
  {
    name: 'Básico',
    price: '$400',
    period: 'por proyecto',
    features: ['1 locación', 'Medio día de rodaje', 'Video de 30-60 segundos editado'],
    cta: 'Solicitar Básico'
  },
  {
    name: 'Estándar',
    price: '$700',
    period: 'por proyecto',
    highlighted: true,
    features: ['2 locaciones', 'Día completo de rodaje', 'Guion asistido y entrega en formatos vertical y horizontal'],
    cta: 'Solicitar Estándar'
  },
  {
    name: 'Premium',
    price: '$1,200',
    period: 'por proyecto',
    features: ['Producción multi-locación', 'Dirección creativa completa', 'Tomas FPV cinemáticas + fotos publicitarias'],
    cta: 'Solicitar Premium'
  }
]

export default function AdvertisingLanding() {
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
          <source src="/videos/1477278_People_Sports_1280x720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%)', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', marginLeft: '0' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Productoras y Agencias</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 900 }}>Publicidad <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(201,169,97,0.85)' }}>de Impacto</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Videos promocionales dinámicos, contenido para redes sociales y tomas aéreas estilo Hollywood para elevar la narrativa de tu marca.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contacto" className="btn-primary">Cotizar Producción</Link>
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
              La atención del consumidor hoy dura segundos. Si tu comercial de marca empieza con tomas estáticas aburridas, deslizarán la pantalla. Además, alquilar helicópteros o grúas de cine para lograr tomas de alto impacto destroza por completo el presupuesto de tu campaña publicitaria.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Nuestra Solución</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Desbloqueamos ángulos imposibles que atrapan la atención instantáneamente. Proveemos tomas dinámicas, seguimientos rápidos y vistas majestuosas en calidad Cine (ProRes), dándole a tus comerciales un "Production Value" gigantesco sin los altos costos de la industria de Hollywood.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>La atención de tu audiencia es limitada</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Film size={32}/>, title: 'Calidad Cine (ProRes)', desc: 'Grabamos en perfiles logarítmicos planos (D-Log) permitiendo la máxima flexibilidad en colorización.' },
            { icon: <MonitorPlay size={32}/>, title: 'Multi-Formato', desc: 'Tu proyecto se graba y edita pensando en formatos verticales (TikTok) y horizontales (Web).' },
            { icon: <Edit size={32}/>, title: 'Servicio End-to-End', desc: 'Desde la creación del guion (storyboarding), hasta el vuelo y la postproducción completa.' }
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
      <ProcessSteps title="De la Idea a la Pantalla" steps={processSteps} />

      {/* 4. GALERÍA */}
      <ServiceGallery
        title="Producciones que Hemos Realizado"
        subtitle="Contenido cinematográfico para marcas y agencias."
        items={galleryItems}
      />

      {/* 5. PAQUETES (PRECIOS) */}
      <PricingTiers
        title="Campañas Comerciales"
        subtitle="Proyectos a la medida según los requerimientos de tu agencia o marca."
        tiers={pricingTiers}
      />

      {/* 6. FAQ */}
      <section className="section-padding container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Dudas Frecuentes</h2>
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
