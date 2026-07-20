'use client'

import Link from 'next/link'
import { Shield, Eye, Calendar, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProcessSteps from '@/components/ProcessSteps'
import ServiceGallery from '@/components/ServiceGallery'
import PricingTiers from '@/components/PricingTiers'

const faqs = [
  {
    q: '¿Con qué frecuencia recomiendan realizar los vuelos?',
    a: 'Para monitoreo de obra estándar, recomendamos un vuelo quincenal o mensual. Sin embargo, para fases críticas (vaciado de cimientos, montaje de estructuras) podemos realizar vuelos semanales.'
  },
  {
    q: '¿En qué formato se entregan los reportes?',
    a: 'Entregamos un archivo PDF con la comparación fotográfica de avance temporal (Slider Antes/Después), fotografías ortogonales (desde arriba) y perspectivas isométricas, además de una carpeta con todas las imágenes originales.'
  },
  {
    q: '¿Tienen protocolos de seguridad para volar sobre obras activas?',
    a: 'Sí. Nuestros pilotos utilizan equipo de protección personal (EPP), coordinan el vuelo previamente con el residente de obra y operan drones con sensores anticolisión para evitar accidentes.'
  }
]

const processSteps = [
  { title: 'Registro Inicial', desc: 'Volamos y documentamos el estado base de la obra antes de iniciar el monitoreo.' },
  { title: 'Vuelos Periódicos', desc: 'Programamos vuelos mensuales o quincenales según la fase del proyecto.' },
  { title: 'Comparativa de Avance', desc: 'Generamos ortomosaicos y timelapse comparando cada vuelo con el anterior.' },
  { title: 'Reporte para Stakeholders', desc: 'Entregamos un PDF con evidencia visual lista para presentar a inversionistas.' }
]

const galleryItems = [
  { src: '/videos/458221_Construction_Building_1280x720.mp4', label: 'Monitoreo de Obra en Construcción' },
  { src: '/videos/0_Aerial_View_Landscape_1280x720.mp4', label: 'Vista General del Proyecto' }
]

const pricingTiers = [
  {
    name: 'Básico',
    price: '$300',
    period: 'por mes',
    features: ['1 vuelo mensual programado', 'Reporte de avance fotográfico en PDF', 'Entrega de fotos en alta resolución'],
    cta: 'Solicitar Básico'
  },
  {
    name: 'Estándar',
    price: '$450',
    period: 'por mes',
    highlighted: true,
    features: ['2 vuelos mensuales programados', 'Ortomosaico comparativo de avance', 'Timelapse visual entre vuelos'],
    cta: 'Solicitar Estándar'
  },
  {
    name: 'Premium',
    price: '$700',
    period: 'por mes',
    features: ['Vuelos quincenales', 'Modelo 3D básico de la obra', 'Métricas de volumen (corte/relleno) y acceso a plataforma de seguimiento'],
    cta: 'Solicitar Premium'
  }
]

export default function ConstructionLanding() {
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
          <source src="/videos/458221_Construction_Building_1280x720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', marginLeft: '0' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Supervisión de Ingeniería</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 900 }}>Monitoreo <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(201,169,97,0.85)' }}>de Obra</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Supervisa el avance de tu construcción de forma remota, documenta el progreso para inversionistas y mantén un registro histórico impecable.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contacto" className="btn-primary">Cotizar Proyecto</Link>
              <a href="#detalles" className="btn-secondary">Ver Planes Mensuales</a>
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
              Como gerente de proyecto o inversionista, tomar decisiones basándote en reportes de texto confusos o fotos a nivel de suelo que no muestran nada es ineficiente y genera puntos ciegos operativos. Si hay retrasos críticos o errores logísticos, te enteras demasiado tarde.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Nuestra Solución</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Te damos una vista panóptica y objetiva en tiempo real. Volamos tu obra periódicamente para entregarte mapas visuales y reportes cronológicos precisos. Detectas errores temprano, coordinas la logística y presentas reportes de avance impecables a tus inversionistas sin salir de la oficina.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Visión absoluta de tu proyecto</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Shield size={32}/>, title: 'Evita Disputas Legales', desc: 'El registro fotográfico temporal indiscutible del estado de la obra semana a semana.' },
            { icon: <Eye size={32}/>, title: 'Reportes para Inversionistas', desc: 'Presenta avances visuales contundentes que generan confianza en tus Stakeholders.' },
            { icon: <Calendar size={32}/>, title: 'Control de Cronograma', desc: 'Detecta atrasos estructurales o logísticos comparando los planos con la realidad aérea.' }
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
      <ProcessSteps title="Seguimiento Continuo de tu Proyecto" steps={processSteps} />

      {/* 4. GALERÍA */}
      <ServiceGallery
        title="Obras que Hemos Monitoreado"
        subtitle="Seguimiento visual de avance para proyectos de construcción."
        items={galleryItems}
      />

      {/* 5. PAQUETES (PRECIOS) */}
      <PricingTiers
        title="Planes de Suscripción Mensual"
        subtitle="Servicio recurrente diseñado para acompañar toda la vida útil de tu construcción."
        tiers={pricingTiers}
      />

      {/* 6. FAQ */}
      <section className="section-padding container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Dudas Técnicas</h2>
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
