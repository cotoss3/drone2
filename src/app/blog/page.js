'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Calendar } from 'lucide-react'

const posts = [
  {
    date: 'Julio 2026',
    title: '5 razones por las que el video aéreo vende propiedades más rápido',
    excerpt: 'La fotografía tradicional desde el suelo ya no es suficiente para destacar en portales inmobiliarios saturados. Así es como una toma aérea cambia la percepción de una propiedad.',
    body: `Un listado inmobiliario compite por segundos de atención. Cuando un comprador hace scroll por decenas de propiedades similares, lo que detiene el dedo es la perspectiva que no ha visto antes: el tamaño real del terreno, la relación con el vecindario, los accesos y las áreas verdes cercanas.

El video y la fotografía aérea resuelven cinco problemas concretos de la venta tradicional: muestran la escala real de la propiedad (algo que una foto de suelo distorsiona), revelan el entorno y las amenidades cercanas (parques, avenidas, costa), permiten un recorrido inmersivo sin necesidad de visitar físicamente, transmiten una sensación de exclusividad que justifica el precio, y se adaptan perfectamente a redes sociales y formatos verticales para campañas pagadas.

En nuestra experiencia, los listados con contenido aéreo generan más consultas calificadas y reducen el tiempo que la propiedad permanece publicada. Si vendes o rentas propiedades premium, una sesión aérea de 15 a 25 fotos y un video de 60 segundos suele ser la diferencia entre pasar desapercibido y destacar.`
  },
  {
    date: 'Julio 2026',
    title: 'Permisos y regulación de drones comerciales en Panamá: lo que debe saber tu proveedor',
    excerpt: 'Antes de contratar un servicio audiovisual con dron, es clave verificar que el operador cumpla con la normativa de la Autoridad Aeronáutica Civil (AAC) de Panamá.',
    body: `Operar un dron con fines comerciales en Panamá no es un simple trámite de "comprar y volar". La Autoridad Aeronáutica Civil (AAC) regula el uso del espacio aéreo, y cualquier empresa que ofrezca servicios audiovisuales con drones debe contar con piloto certificado, registro de la aeronave y, en muchos casos, autorización específica según la zona de vuelo (cercanía a aeropuertos, zonas urbanas densas o áreas restringidas).

Como cliente, esto se traduce en preguntas simples pero importantes antes de contratar: ¿el piloto tiene certificación vigente?, ¿la empresa cuenta con seguro de responsabilidad civil ante daños a terceros?, ¿gestionan el permiso de vuelo para la ubicación específica de tu proyecto?

En Datakorex / AEROVISUAL operamos bajo cumplimiento estricto de la normativa vigente, con pólizas de responsabilidad civil activas y gestión de permisos para cada locación. Esto no solo evita sanciones, también protege al cliente: un vuelo no autorizado puede significar la pérdida del material grabado si la autoridad interviene la operación.`
  },
  {
    date: 'Julio 2026',
    title: 'Fotogrametría con dron: cómo se construye un mapa aéreo preciso',
    excerpt: 'Del vuelo a la nube de puntos: así es el proceso técnico detrás de un ortomosaico o un modelo 3D para agricultura, topografía o monitoreo de obra.',
    body: `La fotogrametría aérea convierte cientos de fotografías superpuestas en un modelo digital preciso del terreno. El proceso comienza con la planificación de vuelo: se define el área a cubrir y el software calcula una ruta automática que garantiza el traslape necesario entre imágenes (generalmente 70-80% frontal y lateral).

Durante el vuelo, el dron captura las fotografías de forma autónoma a una altura y velocidad constantes. Ese set de imágenes se procesa luego con software especializado que identifica puntos comunes entre fotos consecutivas, reconstruye la posición tridimensional del terreno y genera dos productos principales: un ortomosaico (una imagen aérea corregida geométricamente, útil para medir distancias y áreas con precisión) y, si el proyecto lo requiere, un modelo 3D o nube de puntos para análisis volumétrico.

Estos productos tienen aplicaciones muy distintas según la industria: en agricultura de precisión permiten generar mapas de vigor vegetal (NDVI) para detectar zonas de estrés hídrico o plagas; en construcción, sirven para calcular avances de movimiento de tierra comparando vuelos mensuales; y en topografía, agilizan levantamientos que tomarían días con métodos tradicionales.`
  }
]

export default function Blog() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="section-padding container" style={{marginTop: '4rem', minHeight: '100vh'}}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Blog</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', fontSize: '1.1rem'}}>
        Noticias, casos de uso y artículos técnicos sobre servicios audiovisuales y de análisis con dron.
      </p>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px'}}>
        {posts.map((post, i) => (
          <div key={i} className="glass-panel" style={{padding: '2rem', borderRadius: '8px'}}>
            <div
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem'}}
            >
              <div>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.85rem', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                  <Calendar size={14} /> {post.date}
                </span>
                <h2 style={{fontSize: '1.5rem', marginBottom: '0.8rem'}}>{post.title}</h2>
                <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>{post.excerpt}</p>
              </div>
              <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }} style={{flexShrink: 0, marginTop: '0.3rem'}}>
                <ChevronDown color="var(--accent-color)" />
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', lineHeight: '1.8', whiteSpace: 'pre-line'}}>
                    {post.body}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
