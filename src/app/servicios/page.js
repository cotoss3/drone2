export const metadata = {
  title: 'Servicios | AEROVISUAL',
  description: 'Explora nuestros servicios de fotografía y video aéreo profesional.'
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div className="section-padding container" style={{marginTop: '4rem', minHeight: '100vh'}}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Nuestros Servicios</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem'}}>Soluciones de primer nivel para sectores exigentes.</p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {[
          { title: 'Bienes Raíces', desc: 'Destaca propiedades premium con vistas panorámicas.', link: '/servicios/bienes-raices' },
          { title: 'Eventos', desc: 'Cobertura impecable desde el aire para bodas y corporativos.', link: '/servicios/eventos' },
          { title: 'Construcción', desc: 'Monitoreo preciso de avance de obras.', link: '/servicios/monitoreo-obras' },
          { title: 'Inspección', desc: 'Revisión segura de infraestructuras altas o de difícil acceso.', link: '/servicios/inspeccion' },
          { title: 'Publicidad', desc: 'Tomas épicas y cinematográficas para spots y redes.', link: '/servicios/produccion-publicitaria' },
          { title: 'Agricultura y Fotogrametría', desc: 'Mapeo, levantamientos topográficos y agricultura de precisión.', link: '/servicios/mapeo-agricultura' }
        ].map((s, i) => (
          <Link key={i} href={s.link} className="glass-panel" style={{padding: '2rem', borderRadius: '4px', display: 'block', textDecoration: 'none', transition: 'transform 0.3s ease'}}>
            <h3 style={{fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>{s.title}</h3>
            <p style={{color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem'}}>{s.desc}</p>
            <span style={{color: 'var(--accent-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center'}}>Ver detalles <ArrowRight size={16} style={{marginLeft: '0.5rem'}}/></span>
          </Link>
        ))}
      </div>
    </div>
  )
}
