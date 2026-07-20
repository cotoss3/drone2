'use client'

import Link from 'next/link'
import { Target, TrendingUp, Clock, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProcessSteps from '@/components/ProcessSteps'
import ServiceGallery from '@/components/ServiceGallery'
import PricingTiers from '@/components/PricingTiers'

const faqs = [
  {
    q: '¿Qué diferencia hay entre foto de suelo y aérea para ventas?',
    a: 'La fotografía aérea muestra el tamaño real del terreno, los límites de la propiedad y su ubicación en relación al vecindario o amenidades (parques, avenidas), lo que ayuda al comprador a tomar decisiones más rápido.'
  },
  {
    q: '¿Toman fotos de interiores también?',
    a: 'Nuestro enfoque principal es la espectacularidad desde el cielo, sin embargo, podemos complementar con fotografía de interiores estabilizada si el proyecto lo requiere.'
  },
  {
    q: '¿Cuánto tardan en entregar el material?',
    a: 'Entendemos que el mercado inmobiliario se mueve rápido. Entregamos las fotografías editadas y listas para subir al portal MLS (o tus redes) en un máximo de 48 horas laborales.'
  }
]

const processSteps = [
  { title: 'Consulta y Planificación', desc: 'Evaluamos la propiedad, definimos los ángulos clave y el mejor horario de luz para la sesión.' },
  { title: 'Vuelo y Captura', desc: 'Ejecutamos el vuelo con dron 4K, capturando fotos y video de la propiedad y su entorno.' },
  { title: 'Edición y Color', desc: 'Procesamos el material con corrección de color y retoque profesional.' },
  { title: 'Entrega Lista para Publicar', desc: 'Recibes el material optimizado para MLS, portales y redes sociales en 48 horas.' }
]

const galleryItems = [
  { src: '/videos/456589_Venice_Los_Angeles_1280x720.mp4', label: 'Propiedad Residencial - Venice' },
  { src: '/videos/606983_Cities_City_1280x720.mp4', label: 'Vista Panorámica de Ciudad' }
]

const pricingTiers = [
  {
    name: 'Básico',
    price: '$150',
    period: 'por propiedad',
    features: ['10 fotografías aéreas editadas en 4K', '1 video aéreo de 30-45 segundos', 'Entrega en 48 horas', 'Ideal para propiedades medianas'],
    cta: 'Solicitar Básico'
  },
  {
    name: 'Estándar',
    price: '$220',
    period: 'por propiedad',
    highlighted: true,
    features: ['20 fotografías aéreas en 4K', 'Video cinemático de 60 segundos', 'Mapeo gráfico de límites del terreno', 'Entrega en 48 horas'],
    cta: 'Solicitar Estándar'
  },
  {
    name: 'Premium',
    price: '$350',
    period: 'por propiedad',
    features: ['30+ fotografías de alta resolución', 'Video cinemático de 90 segundos con narrativa', 'Tomas al atardecer (Twilight)', 'Entrega prioritaria en 24 horas'],
    cta: 'Solicitar Premium'
  }
]

export default function RealEstateLanding() {
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
          <source src="/videos/456589_Venice_Los_Angeles_1280x720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', marginLeft: '0' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Servicios Inmobiliarios</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 900 }}>Vende más <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(201,169,97,0.85)' }}>Rápido</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Eleva tus listados inmobiliarios. Capturamos la magnitud de tu propiedad, sus colindancias y el entorno con fotografía y video aéreo de nivel cinematográfico.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contacto" className="btn-primary">Agendar Vuelo</Link>
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
              Vender una propiedad premium usando fotos tradicionales desde el suelo no transmite la verdadera escala, los linderos, ni el prestigio del entorno. Los compradores hacen scroll rápido y tu listado se pierde en un mar de ofertas idénticas. Estás perdiendo visitas por no destacar visualmente.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Nuestra Solución</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Elevamos la perspectiva literalmente. Capturamos la magnitud total de la propiedad, su ubicación estratégica (parques, avenidas) y la topografía mediante tomas cinemáticas aéreas. Tu propiedad se verá más imponente y exclusiva, logrando que los compradores quieran visitarla de inmediato.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>No es solo una foto, es una perspectiva ganadora</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Target size={32}/>, title: 'Destaca en los Portales', desc: 'Llama la atención en listados saturados con una portada aérea impactante.' },
            { icon: <TrendingUp size={32}/>, title: 'Cierra Ventas más Rápido', desc: 'Las propiedades con video aéreo reciben significativamente más consultas calificadas.' },
            { icon: <Clock size={32}/>, title: 'Entrega Express 48h', desc: 'Sabemos que el tiempo es dinero. Tu material listo para publicar rápidamente.' }
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
      <ProcessSteps title="De la Consulta a tu Listado" steps={processSteps} />

      {/* 4. GALERÍA */}
      <ServiceGallery
        title="Propiedades que Hemos Elevado"
        subtitle="Una muestra de nuestro trabajo en el sector inmobiliario."
        items={galleryItems}
      />

      {/* 5. PAQUETES (PRECIOS) */}
      <PricingTiers
        title="Paquetes Inmobiliarios"
        subtitle="Elige el nivel de cobertura ideal para tu listado. Todos incluyen entrega digital lista para publicar."
        tiers={pricingTiers}
      />

      {/* 6. FAQ */}
      <section className="section-padding container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Preguntas Frecuentes</h2>
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
