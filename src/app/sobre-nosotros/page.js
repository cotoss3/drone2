export const metadata = {
  title: 'Sobre Nosotros | AEROVISUAL',
  description: 'Conoce al equipo de pilotos certificados.'
}

export default function About() {
  return (
    <div className="section-padding container" style={{marginTop: '4rem', minHeight: '100vh'}}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Sobre Aerovisual</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem'}}>Elevando los estándares visuales en cada vuelo.</p>
      
      <div className="glass-panel" style={{padding: '3rem', borderRadius: '4px', marginBottom: '3rem'}}>
        <h2 style={{marginBottom: '1.5rem', fontSize: '2rem'}}>Nuestra Historia</h2>
        <p style={{color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem'}}>Fundada por pilotos certificados y cineastas, Aerovisual nació con la misión de proporcionar calidad cinematográfica al sector corporativo e industrial. No somos vendedores de drones; somos expertos en captura de imagen aérea y soluciones visuales.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
         <div className="glass-panel" style={{padding: '2rem', borderRadius: '4px'}}>
            <h3 style={{marginBottom: '1rem', color: 'var(--accent-color)'}}>Licencias y Certificaciones</h3>
            <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>Operamos bajo estricto cumplimiento de todas las regulaciones de la Autoridad de Aviación Civil. Nuestros pilotos cuentan con certificación vigente para operaciones comerciales.</p>
         </div>
         <div className="glass-panel" style={{padding: '2rem', borderRadius: '4px'}}>
            <h3 style={{marginBottom: '1rem', color: 'var(--accent-color)'}}>Seguro de Operaciones</h3>
            <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>La seguridad es prioridad. Contamos con cobertura total de Responsabilidad Civil (Liability Insurance) para cada vuelo, garantizando tranquilidad absoluta a nuestros clientes.</p>
         </div>
      </div>
    </div>
  )
}
