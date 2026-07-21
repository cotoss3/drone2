export const metadata = {
  title: 'Contacto | AERO PANAMÁ',
  description: 'Solicita un presupuesto para servicios audiovisuales con dron.'
}

export default function Contact() {
  return (
    <div className="section-padding container" style={{marginTop: '4rem', minHeight: '100vh'}}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Cotización y Contacto</h1>
      <p style={{color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', fontSize: '1.1rem'}}>Completa el siguiente formulario para solicitar un presupuesto personalizado. Nuestro equipo se pondrá en contacto contigo a la brevedad.</p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem'}}>
        <form
          action="https://formsubmit.co/info@datakorex.com"
          method="POST"
          style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}
        >
          <input type="hidden" name="_subject" value="Nueva solicitud de cotización - AERO PANAMÁ" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <input type="text" name="Nombre" placeholder="Nombre completo" required style={inputStyle} />
          <input type="email" name="Correo" placeholder="Correo electrónico" required style={inputStyle} />
          <input type="tel" name="Teléfono" placeholder="Teléfono / WhatsApp" required style={inputStyle} />
          <select name="Servicio" style={inputStyle} required defaultValue="">
            <option value="" disabled>Selecciona un servicio</option>
            <option>Bienes Raíces</option>
            <option>Eventos y Bodas</option>
            <option>Construcción y Avance de Obra</option>
            <option>Inspección de Infraestructura</option>
            <option>Producción Publicitaria</option>
            <option>Topografía y Modelado 3D</option>
            <option>Otro</option>
          </select>
          <textarea name="Detalles" placeholder="Detalles del proyecto (ubicación, fecha estimada, requerimientos específicos)..." rows="6" style={inputStyle}></textarea>
          <button type="submit" className="btn-primary" style={{alignSelf: 'flex-start'}}>Enviar Solicitud</button>
        </form>

        <div>
          <div className="glass-panel" style={{padding: '3rem', borderRadius: '4px', marginBottom: '2rem'}}>
            <h3 style={{marginBottom: '2rem', fontSize: '1.5rem'}}>Información Directa</h3>
            <p style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem'}}><span style={{color: 'var(--text-secondary)'}}>Email:</span> info@datakorex.com</p>
            <p style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem'}}><span style={{color: 'var(--text-secondary)'}}>Teléfono:</span> +507 6713-4341</p>
            <p style={{marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem'}}><span style={{color: 'var(--text-secondary)'}}>Ubicación:</span> Ciudad de Panamá, Panamá</p>

            <a href="https://wa.me/50767134341" className="btn-secondary" style={{width: '100%', textAlign: 'center'}}>
              Contactar por WhatsApp
            </a>
          </div>

          <div className="glass-panel" style={{padding: '2rem', borderRadius: '4px'}}>
            <h4 style={{marginBottom: '1rem', color: 'var(--accent-color)'}}>Área de Cobertura</h4>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6'}}>
              Operamos a nivel nacional desde Ciudad de Panamá. Para proyectos internacionales, requerimos un pre-aviso de 30 días para tramitar permisos aéreos de operación en el extranjero.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '1rem 1.2rem',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-primary)',
  borderRadius: '4px',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
}
