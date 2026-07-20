'use client'

import Link from 'next/link'
import { Leaf, Map, Database, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProcessSteps from '@/components/ProcessSteps'
import ServiceGallery from '@/components/ServiceGallery'
import PricingTiers from '@/components/PricingTiers'

const faqs = [
  {
    q: '¿Qué es exactamente un Ortomosaico?',
    a: 'Es una imagen aérea de alta precisión compuesta por cientos o miles de fotografías individuales superpuestas. A diferencia de una foto satelital de Google Earth, nuestro ortomosaico está georreferenciado, no tiene deformación de perspectiva y cuenta con un nivel de detalle donde cada píxel equivale a 1 o 2 centímetros reales.'
  },
  {
    q: '¿Cómo funciona el reporte de NDVI para salud vegetal?',
    a: 'Utilizamos sensores multiespectrales que captan longitudes de onda no visibles (Infrarrojo cercano). Las plantas sanas reflejan esta luz de manera diferente a las plantas estresadas por plagas o falta de agua, lo que nos permite crear un "mapa de calor" de tus cultivos para aplicar fertilizantes solo donde se necesita.'
  },
  {
    q: '¿En qué formato me entregan los mapas?',
    a: 'Entregamos los ortomosaicos en formato GeoTIFF y los modelos de elevación en DEM/DSM, formatos estándar que puedes importar directamente a AutoCAD, QGIS, ArcGIS o software de gestión agrícola.'
  }
]

const processSteps = [
  { title: 'Planificación de Vuelo', desc: 'Definimos el polígono del terreno y calculamos la ruta automática con traslape óptimo.' },
  { title: 'Captura Multiespectral', desc: 'Volamos el área capturando cientos de imágenes RGB y, si aplica, multiespectrales.' },
  { title: 'Procesamiento Fotogramétrico', desc: 'Generamos el ortomosaico, modelo de elevación y/o reporte NDVI.' },
  { title: 'Entrega de Datos GIS', desc: 'Recibes los archivos listos para importar en QGIS, AutoCAD o tu software agrícola.' }
]

const galleryItems = [
  { src: '/videos/6356267_Paktia_Province_Farm_Field_1280x720.mp4', label: 'Mapeo de Campo Agrícola' },
  { src: '/videos/0_Vineyard_Mountains_1280x720.mp4', label: 'Monitoreo de Viñedo en Montaña' }
]

const pricingTiers = [
  {
    name: 'Básico',
    price: '$30',
    period: 'por hectárea (mín. $250)',
    features: ['Ortomosaico en formato GeoTIFF', 'Archivos exportables GIS (KML, KMZ)', 'Vuelo programado con traslape óptimo'],
    cta: 'Solicitar Básico'
  },
  {
    name: 'Estándar',
    price: '$45',
    period: 'por hectárea (mín. $350)',
    highlighted: true,
    features: ['Todo lo del plan Básico', 'Reporte NDVI de salud vegetal', 'Identificación de zonas de estrés hídrico'],
    cta: 'Solicitar Estándar'
  },
  {
    name: 'Premium',
    price: '$65',
    period: 'por hectárea (mín. $500)',
    features: ['Todo lo del plan Estándar', 'Modelo de elevación (DEM/DSM)', 'Análisis comparativo entre vuelos periódicos'],
    cta: 'Solicitar Premium'
  }
]

export default function MappingLanding() {
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
          <source src="/videos/6356267_Paktia_Province_Farm_Field_1280x720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', marginLeft: '0' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Topografía y Agricultura</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 900 }}>Mapeo y <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(201,169,97,0.85)' }}>Precisión</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Fotogrametría avanzada para topógrafos y análisis multiespectral para maximizar el rendimiento de tus cultivos. Datos masivos en tiempo récord.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contacto" className="btn-primary">Cotizar Terreno</Link>
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
              Caminar cientos de hectáreas buscando cultivos estresados, o levantar puntos topográficos a pie con estación total, consume demasiados días de trabajo de campo. Esto retrasa proyectos de construcción o provoca que actúes demasiado tarde contra plagas en tus cultivos.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Nuestra Solución</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Digitalizamos hectáreas enteras desde el cielo en minutos. Generamos mapas 2D y 3D de altísima precisión (Ortomosaicos y Modelos de Elevación) y usamos sensores multiespectrales para ver lo que el ojo no puede. Obtienes data masiva, precisa y accionable casi de inmediato.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Decisiones basadas en Datos, no en Instinto</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Map size={32}/>, title: 'Ortomosaicos de Precisión Centimétrica', desc: 'Mapas 2D escalados sin deformación listos para importar a AutoCAD o QGIS.' },
            { icon: <Leaf size={32}/>, title: 'Índice NDVI', desc: 'Detecta estrés hídrico y plagas semanas antes de que sean visibles al ojo humano.' },
            { icon: <Database size={32}/>, title: 'Modelos de Elevación (DEM)', desc: 'Obtén curvas de nivel y cálculo de volúmenes de tierra de forma automatizada.' }
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
      <ProcessSteps title="Del Vuelo al Dato Accionable" steps={processSteps} />

      {/* 4. GALERÍA */}
      <ServiceGallery
        title="Terrenos que Hemos Mapeado"
        subtitle="Agricultura de precisión y monitoreo de cultivos desde el aire."
        items={galleryItems}
      />

      {/* 5. PAQUETES (PRECIOS) */}
      <PricingTiers
        title="Mapeo Fotogramétrico"
        subtitle="Servicio escalable según el tamaño de tu terreno, con facturación por hectárea."
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
