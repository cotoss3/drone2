'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  
  const videos = [
    { src: '/videos/456589_Venice_Los_Angeles_1280x720.mp4', cat: 'real-estate', title: 'Bienes Raíces - Venice' },
    { src: '/videos/4934753_Wedding_Ceremony_1280x720.mp4', cat: 'events', title: 'Boda en Exterior' },
    { src: '/videos/458221_Construction_Building_1280x720.mp4', cat: 'construction', title: 'Monitoreo de Obra' },
    { src: '/videos/6356267_Paktia_Province_Farm_Field_1280x720.mp4', cat: 'agriculture', title: 'Mapeo Agrícola' },
    { src: '/videos/606983_Cities_City_1280x720.mp4', cat: 'real-estate', title: 'Vista de Ciudad' },
    { src: '/videos/7031076_3g_4g_1280x720.mp4', cat: 'infrastructure', title: 'Inspección de Torre' },
  ]
  
  const filtered = filter === 'all' ? videos : videos.filter(v => v.cat === filter)

  return (
    <div className="section-padding container" style={{marginTop: '4rem', minHeight: '100vh'}}>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
        <h1 style={{marginBottom: '1rem', fontSize: '3rem'}}>Portafolio Aéreo</h1>
        <p style={{color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '700px'}}>Una selección de nuestros mejores trabajos aéreos. Calidad cinematográfica aplicada a soluciones empresariales.</p>
        
        <div style={{display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
          <button className={filter === 'all' ? 'btn-primary' : 'btn-secondary'} onClick={() => setFilter('all')}>Todos</button>
          <button className={filter === 'real-estate' ? 'btn-primary' : 'btn-secondary'} onClick={() => setFilter('real-estate')}>Bienes Raíces</button>
          <button className={filter === 'events' ? 'btn-primary' : 'btn-secondary'} onClick={() => setFilter('events')}>Eventos</button>
          <button className={filter === 'construction' ? 'btn-primary' : 'btn-secondary'} onClick={() => setFilter('construction')}>Construcción</button>
          <button className={filter === 'infrastructure' ? 'btn-primary' : 'btn-secondary'} onClick={() => setFilter('infrastructure')}>Infraestructura</button>
          <button className={filter === 'agriculture' ? 'btn-primary' : 'btn-secondary'} onClick={() => setFilter('agriculture')}>Agricultura</button>
        </div>

        <motion.div layout style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem'}}>
          {filtered.map((v, i) => (
            <motion.div layout key={v.src} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: i * 0.1}} className="glass-panel" style={{borderRadius: '4px', overflow: 'hidden'}}>
              <video src={v.src} autoPlay muted loop playsInline style={{width: '100%', height: '250px', objectFit: 'cover'}} />
              <div style={{padding: '1.5rem'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
