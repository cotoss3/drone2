'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Building2, Calendar, HardHat, Camera, Tractor, Pickaxe } from 'lucide-react'
import './page.css'

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <div className="home">
      <section className="hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="/videos/0_Aerial_View_Landscape_1280x720.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content center-layout">
          <motion.div 
            className="hero-titles"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="title-filled">CAPTURA</h1>
            <h1 className="title-outline">AÉREA</h1>
            <h1 className="title-filled">DE ÉLITE</h1>
          </motion.div>
          <motion.p 
            className="hero-description"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Fotografía y video con dron. Precisión técnica y resultados excepcionales para tu industria.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contacto" className="btn-primary">Solicitar Cotización</Link>
            <Link href="/portafolio" className="btn-secondary">Ver Portafolio</Link>
          </motion.div>
        </div>
      </section>

      <section className="services-summary section-padding">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Nuestros Servicios</h2>
            <p>Soluciones aéreas especializadas para cada sector de la industria.</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <Building2 />, title: 'Bienes Raíces', desc: 'Vistas panorámicas y recorridos para propiedades premium.' },
              { icon: <Calendar />, title: 'Cobertura de Eventos', desc: 'Captura cinematográfica de eventos sociales y corporativos.' },
              { icon: <HardHat />, title: 'Monitoreo de Obras', desc: 'Seguimiento de avance de obra y modelos 3D.' },
              { icon: <Pickaxe />, title: 'Inspección', desc: 'Revisión técnica de infraestructura de difícil acceso.' },
              { icon: <Camera />, title: 'Producción Publicitaria', desc: 'Tomas épicas para spots y contenido en redes sociales.' },
              { icon: <Tractor />, title: 'Agricultura', desc: 'Mapeo de terrenos y agricultura de precisión.' },
            ].map((service, index) => (
              <motion.div key={index} className="service-card glass-panel" variants={fadeIn}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href="/servicios" className="service-link">Saber más <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="testimonials section-padding">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Confían en Nosotros</h2>
            <p>Empresas que han elevado su estándar visual con Aerovisual.</p>
          </motion.div>

          <motion.div 
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[1, 2, 3].map((i) => (
              <motion.div key={i} className="testimonial-card glass-panel" variants={fadeIn}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c9a961" color="#c9a961" />)}
                </div>
                <p>"El material entregado superó nuestras expectativas. La calidad del video 4K y la profesionalidad del equipo fueron impecables."</p>
                <div className="client-info">
                  <strong>Director de Operaciones</strong>
                  <span>Empresa Cliente {i}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section section-padding">
        <div className="container flex-center">
          <motion.div 
            className="cta-content glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>¿Listo para llevar tu proyecto al siguiente nivel?</h2>
            <p>Contáctanos hoy para discutir los detalles de tu proyecto y obtener una cotización personalizada.</p>
            <Link href="/contacto" className="btn-primary">Contactar Ahora</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
