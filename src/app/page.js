'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, HardHat, Camera, Map, ShieldCheck, Award, Maximize, Cpu } from 'lucide-react'
import './page.css'

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <div className="home corporate-theme">
      {/* HERO B2B */}
      <section className="hero corporate-hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="/videos/458221_Construction_Building_1280x720.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay-dark"></div>
        <div className="container hero-content left-align">
          <motion.div 
            className="hero-text-block"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="hero-badge">Ingeniería & Audiovisual</span>
            <h1 className="hero-main-title">Soluciones Aéreas<br/>Profesionales con Drones</h1>
            <p className="hero-subtitle">
              Inspección industrial, monitoreo de infraestructuras, topografía de precisión y filmación técnica. Llevamos tus proyectos al más alto nivel.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="btn-primary solid-btn">Solicitar Asesoría</Link>
              <Link href="/servicios" className="btn-secondary outline-btn">Nuestros Servicios</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTORES DE APLICACIÓN (Banda rápida) */}
      <section className="application-sectors">
        <div className="container">
          <motion.div className="sectors-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div className="sector-item" variants={fadeIn}>
              <HardHat size={32} />
              <h3>Industria e Ingeniería</h3>
              <p>Inspección y obras</p>
            </motion.div>
            <div className="sector-divider"></div>
            <motion.div className="sector-item" variants={fadeIn}>
              <Map size={32} />
              <h3>Topografía y Agronomía</h3>
              <p>Mapeo de precisión</p>
            </motion.div>
            <div className="sector-divider"></div>
            <motion.div className="sector-item" variants={fadeIn}>
              <Camera size={32} />
              <h3>Audiovisual y Medios</h3>
              <p>Producción comercial</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS TÉCNICOS */}
      <section className="corporate-services section-padding">
        <div className="container">
          <motion.div className="section-header-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="section-subtitle">CAPACIDAD TÉCNICA</span>
            <h2>Servicios Especializados</h2>
            <p>Implementamos tecnología UAS (Unmanned Aerial Systems) para optimizar costos, mitigar riesgos y capturar datos exactos en todos los sectores.</p>
          </motion.div>

          <motion.div className="technical-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: <Building2 />, title: 'Inspección Industrial', desc: 'Revisión estructural, torres de telecomunicaciones, aerogeneradores y cubiertas sin poner vidas en riesgo.' },
              { icon: <HardHat />, title: 'Monitoreo de Obras', desc: 'Control de progreso visual (Time-lapse), levantamiento 3D y auditoría fotográfica de proyectos de construcción.' },
              { icon: <Map />, title: 'Topografía y Mapeo', desc: 'Ortomosaicos de alta resolución, modelos digitales de elevación (DEM) y fotogrametría técnica.' },
              { icon: <Camera />, title: 'Producción Audiovisual', desc: 'Tomas cinemáticas para publicidad, bienes raíces y cobertura corporativa de alto impacto visual.' }
            ].map((service, index) => (
              <motion.div key={index} className="tech-service-card" variants={fadeIn}>
                <div className="card-icon">{service.icon}</div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href="/servicios" className="text-link">Conocer detalles <ArrowRight size={16} /></Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS (Trust Factors) */}
      <section className="trust-factors section-padding dark-bg">
        <div className="container">
          <div className="trust-layout">
            <motion.div className="trust-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <span className="section-subtitle">COMPROMISO Y CALIDAD</span>
              <h2>Por qué Aerovisual es tu socio estratégico</h2>
              <p>No somos solo pilotos; somos especialistas técnicos que entienden las necesidades de tu industria. Operamos bajo los más estrictos estándares de seguridad y eficiencia.</p>
              
              <ul className="trust-list">
                <li><ShieldCheck size={24} /> <strong>Cumplimiento Normativo:</strong> Pilotos certificados por la Autoridad de Aviación Civil y seguros de responsabilidad a terceros.</li>
                <li><Cpu size={24} /> <strong>Flota de Vanguardia:</strong> Equipos de última generación con sensores 4K, térmicos y multiespectrales según los requerimientos.</li>
                <li><Award size={24} /> <strong>Precisión y Puntualidad:</strong> Entregables exactos, con tiempos de respuesta que mantienen tus proyectos en cronograma.</li>
              </ul>
              
              <Link href="/sobre-nosotros" className="btn-primary solid-btn mt-4">Nuestra Empresa</Link>
            </motion.div>
            
            <motion.div className="trust-stats" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <div className="stat-box">
                <span className="stat-number">+500</span>
                <span className="stat-label">Horas de Vuelo</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Seguridad Operacional</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">4K</span>
                <span className="stat-label">Resolución Nativa</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">24h</span>
                <span className="stat-label">Respuesta Técnica</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA CORPORATIVO */}
      <section className="cta-corporate section-padding">
        <div className="container">
          <motion.div className="cta-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="cta-text">
              <h2>¿Listo para elevar la perspectiva de tu proyecto?</h2>
              <p>Contáctanos hoy mismo para una asesoría técnica y cotización sin compromiso.</p>
            </div>
            <div className="cta-button">
              <Link href="/contacto" className="btn-primary solid-btn large-btn">Contactar a un Especialista</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
