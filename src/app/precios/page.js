'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Pricing() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const packages = [
    {
      title: 'Bienes Raíces',
      price: 'Desde $150',
      period: 'por propiedad',
      features: ['3 niveles: Básico, Estándar y Premium', 'Fotos y video aéreo de la propiedad', 'Recorrido aéreo inmersivo', 'Ideal para listados premium'],
      link: '/servicios/bienes-raices'
    },
    {
      title: 'Eventos (Bodas, Corp.)',
      price: 'Desde $350',
      period: 'por evento',
      features: ['3 niveles: Básico, Estándar y Premium', 'De 2 horas hasta día completo', 'Video highlight con música y color', 'Tomas cinematográficas'],
      link: '/servicios/eventos'
    },
    {
      title: 'Inspección Infraestructura',
      price: 'Desde $200',
      period: 'por hora',
      features: ['3 niveles: Básico, Estándar y contrato mensual', 'Reporte técnico detallado', 'Acceso a zonas de alto riesgo', 'Opcional: Cámara térmica'],
      link: '/servicios/inspeccion'
    },
    {
      title: 'Mapeo y Agricultura',
      price: 'Desde $30',
      period: 'por hectárea (mín. $250)',
      features: ['3 niveles: Básico, Estándar y Premium', 'Generación de Ortomosaico', 'Opcional: Reporte NDVI', 'Archivos exportables GIS'],
      link: '/servicios/mapeo-agricultura'
    },
    {
      title: 'Monitoreo de Obra',
      price: 'Desde $300',
      period: 'mensual',
      features: ['3 niveles: Básico, Estándar y Premium', 'Vuelo mensual o quincenal', 'Comparativas del terreno', 'Modelado 3D en niveles superiores'],
      link: '/servicios/monitoreo-obras'
    },
    {
      title: 'Producción Publicitaria',
      price: 'Desde $400',
      period: 'por proyecto',
      features: ['3 niveles: Básico, Estándar y Premium', 'Múltiples tomas y ángulos', 'Entrega en formatos verticales y horizontales', 'Orientado a Redes Sociales'],
      link: '/servicios/produccion-publicitaria'
    }
  ]

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '5rem' }}>
      <video autoPlay muted loop playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -2 }}>
        <source src="/videos/0_Vineyard_Mountains_1280x720.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(4px)', zIndex: -1 }}></div>

      <div className="section-padding container" style={{marginTop: '2rem'}}>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{textAlign: 'center', marginBottom: '4rem'}}>
        <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Nuestras Tarifas</h1>
        <p style={{color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto'}}>Cotizaciones estandarizadas para servicios profesionales. Para proyectos de mayor escala o de varios días, contáctanos para un presupuesto personalizado.</p>
      </motion.div>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{visible: {transition: {staggerChildren: 0.1}}}}
        style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}
      >
        {packages.map((pkg, i) => (
          <motion.div key={i} variants={fadeIn} className="glass-panel" style={{padding: '3rem', borderRadius: '4px', display: 'flex', flexDirection: 'column'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-color)'}}>{pkg.title}</h3>
            <div style={{marginBottom: '2rem'}}>
              <span style={{fontSize: '3rem', fontWeight: '800'}}>{pkg.price}</span>
              <span style={{color: 'var(--text-secondary)', marginLeft: '0.5rem'}}>{pkg.period}</span>
            </div>
            
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1}}>
              {pkg.features.map((feat, idx) => (
                <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)'}}>
                  <Check size={18} color="var(--accent-color)" /> {feat}
                </li>
              ))}
            </ul>
            
            <Link href={pkg.link} className="btn-secondary" style={{width: '100%', textAlign: 'center'}}>
              Ver detalles
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} style={{marginTop: '5rem', textAlign: 'center'}}>
         <h2 style={{marginBottom: '1rem'}}>¿Tienes un proyecto especial?</h2>
         <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>Armamos planes a la medida para productoras de cine, proyectos gubernamentales y largas extensiones de terreno.</p>
         <Link href="/contacto" className="btn-primary">Cotizar a la medida</Link>
      </motion.div>
      </div>
    </div>
  )
}
