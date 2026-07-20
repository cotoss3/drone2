'use client'

import Link from 'next/link'
import { ShieldAlert, Zap, Thermometer, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProcessSteps from '@/components/ProcessSteps'
import ServiceGallery from '@/components/ServiceGallery'
import PricingTiers from '@/components/PricingTiers'

const faqs = [
  {
    q: '¿Hasta qué altura pueden volar para inspeccionar?',
    a: 'Legalmente podemos volar hasta 120 metros (400 pies) sobre el nivel del suelo, lo cual es suficiente para la mayoría de torres de telecomunicaciones y edificios. Para estructuras más altas, gestionamos un permiso especial (NOTAM).'
  },
  {
    q: '¿Qué precisión tiene la cámara térmica?',
    a: 'Usamos sensores radiométricos de alta sensibilidad (FLIR) capaces de detectar variaciones de temperatura de hasta 0.05°C, ideal para encontrar microfisuras, fallas en paneles solares o puentes térmicos en techos.'
  },
  {
    q: '¿Es necesario apagar las antenas o equipos durante la inspección?',
    a: 'Generalmente no. Nuestros drones industriales tienen protección magnética contra interferencia (doble IMU), lo que nos permite volar cerca de antenas celulares o líneas eléctricas activas sin perder señal.'
  }
]

const processSteps = [
  { title: 'Evaluación de Riesgo', desc: 'Revisamos la estructura y definimos el plan de vuelo seguro según la normativa vigente.' },
  { title: 'Vuelo de Precisión', desc: 'Inspeccionamos la infraestructura con cámaras RGB y térmica de alta resolución.' },
  { title: 'Análisis Técnico', desc: 'Procesamos las imágenes para identificar anomalías, fisuras o fallas térmicas.' },
  { title: 'Reporte Entregado', desc: 'Recibes un informe técnico detallado con hallazgos y recomendaciones.' }
]

const galleryItems = [
  { src: '/videos/7031076_3g_4g_1280x720.mp4', label: 'Inspección de Torre de Telecomunicación' },
  { src: '/videos/458221_Construction_Building_1280x720.mp4', label: 'Inspección de Techos Industriales' }
]

const pricingTiers = [
  {
    name: 'Básico',
    price: '$200',
    period: 'por hora',
    features: ['Vuelo de inspección visual en 4K', 'Reporte fotográfico básico con hallazgos', 'Acceso a zonas de alto riesgo'],
    cta: 'Solicitar Básico'
  },
  {
    name: 'Estándar',
    price: '$280',
    period: 'por hora',
    highlighted: true,
    features: ['Todo lo del plan Básico', 'Cámara térmica radiométrica incluida', 'Reporte técnico detallado con georreferencia'],
    cta: 'Solicitar Estándar'
  },
  {
    name: 'Premium',
    price: '$220',
    period: 'por hora (contrato mensual, mín. 4h/mes)',
    features: ['Inspecciones recurrentes programadas', 'Historial comparativo entre visitas', 'Alertas tempranas de deterioro estructural'],
    cta: 'Solicitar Contrato'
  }
]

export default function InspectionLanding() {
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
          <source src="/videos/7031076_3g_4g_1280x720.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '800px', marginLeft: '0' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Inspección Industrial</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 900 }}>Seguridad y <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(201,169,97,0.85)' }}>Precisión</span></h1>
            <p style={{ fontSize: '1.25rem', color: '#e0e0e0', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Reduce costos y elimina el riesgo humano. Inspeccionamos techos, torres de telecomunicación, paneles solares y líneas eléctricas con cámaras de ultra-alta definición y térmicas.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contacto" className="btn-primary">Solicitar Inspección</Link>
              <a href="#detalles" className="btn-secondary">Ver Tarifas</a>
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
              Revisar infraestructuras altas (techos, torres, aerogeneradores) es extremadamente peligroso, lento y costoso. Obliga a frenar operaciones, alquilar andamios carísimos o grúas, y lo peor: expone a tus trabajadores a riesgos mortales de caída o electrocución.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Nuestra Solución</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Mantenemos a tu equipo a salvo en tierra. Volamos drones industriales a centímetros de las estructuras para captar microfisuras, óxido o fallas térmicas con cámaras de ultra precisión. Hacemos en horas lo que antes tomaba días, a una fracción del costo y con cero riesgo humano.
            </p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>El fin de los andamios y las grúas peligrosas</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <ShieldAlert size={32}/>, title: 'Cero Riesgo Humano', desc: 'No más escalar torres, caminar sobre techos frágiles o acercarse a líneas de alta tensión.' },
            { icon: <Zap size={32}/>, title: 'Velocidad Operativa', desc: 'Una inspección que tomaba días con andamios ahora se realiza en horas.' },
            { icon: <Thermometer size={32}/>, title: 'Análisis Térmico', desc: 'Detecta fallas invisibles al ojo humano usando cámaras radiométricas especializadas.' }
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
      <ProcessSteps title="Un Proceso Seguro y Documentado" steps={processSteps} />

      {/* 4. GALERÍA */}
      <ServiceGallery
        title="Estructuras que Hemos Inspeccionado"
        subtitle="Torres, techos y activos industriales de difícil acceso."
        items={galleryItems}
      />

      {/* 5. PAQUETES (PRECIOS) */}
      <PricingTiers
        title="Tarifas de Inspección"
        subtitle="Facturación transparente basada en el tiempo de vuelo y análisis técnico."
        tiers={pricingTiers}
      />

      {/* 6. FAQ */}
      <section className="section-padding container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Preguntas Operativas</h2>
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
