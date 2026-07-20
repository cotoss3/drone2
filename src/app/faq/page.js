'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

// Metadata must be in a layout or a separate server component if 'use client' is used.
// We will omit metadata export since this is a client component for the accordions.

const faqs = [
  {
    q: '¿Tienen los permisos necesarios para volar en la ciudad?',
    a: 'Sí, todos nuestros pilotos cuentan con certificación oficial de la autoridad de aviación civil. Gestionamos los permisos de vuelo correspondientes para cada locación, asegurando que toda operación se realice dentro del marco legal.'
  },
  {
    q: '¿Qué pasa si llueve o hay mal clima el día de la grabación?',
    a: 'La seguridad del equipo y la calidad del material son nuestra prioridad. Si las condiciones meteorológicas (lluvia fuerte, vientos superiores a 35 km/h) no permiten el vuelo, reprogramamos la sesión sin ningún costo adicional.'
  },
  {
    q: '¿En qué formato y resolución entregan el material?',
    a: 'Por defecto, todo nuestro material en video se graba en resolución 4K (D-Log o perfiles de color planos) y las fotografías en formato RAW de 20MP o superior, garantizando la máxima latitud para corrección de color y post-producción. Entregamos archivos finales en MP4 (H.264/H.265) y JPG/TIFF.'
  },
  {
    q: '¿Cuentan con seguro de responsabilidad civil?',
    a: 'Absolutamente. Todas nuestras aeronaves operan bajo una póliza de seguro de responsabilidad civil contra daños a terceros. Trabajamos con los más altos estándares de seguridad y protocolos de emergencia.'
  },
  {
    q: '¿Cuánto tiempo tarda la entrega del material editado?',
    a: 'Para servicios de fotografía de Bienes Raíces, la entrega es en 48 horas laborales. Para cobertura de Eventos y Producción Publicitaria (que requieren edición y colorización profunda), el tiempo de entrega oscila entre 5 y 7 días hábiles.'
  },
  {
    q: '¿Pueden operar en interiores o espacios cerrados?',
    a: 'Sí. Contamos con drones especializados tipo FPV (First Person View) con protectores de hélices (cinewhoops) que nos permiten volar de forma segura y dinámica dentro de fábricas, oficinas, restaurantes y bodegas.'
  }
]

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="glass-panel" style={{ marginBottom: '1rem', overflow: 'hidden' }}>
      <button 
        onClick={toggle} 
        style={{
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1.5rem 2rem', 
          background: 'none', 
          border: 'none', 
          color: 'var(--text-primary)', 
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.1rem', fontWeight: '600', fontFamily: 'Outfit, sans-serif' }}>{faq.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <Minus size={20} color="var(--accent-color)" /> : <Plus size={20} color="var(--accent-color)" />}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div style={{ padding: '0 2rem 1.5rem 2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="section-padding container" style={{ marginTop: '4rem', minHeight: '100vh', position: 'relative' }}>
      <div className="ambient-glow"></div>
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1rem' }}>Preguntas Frecuentes</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Resolvemos tus dudas sobre nuestros procesos operativos, normativas, y tiempos de entrega. Transparencia y profesionalismo en cada vuelo.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </div>

      </div>
    </div>
  )
}
