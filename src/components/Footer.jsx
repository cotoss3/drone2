import Link from 'next/link'
import { Camera, Video, Globe, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href="/" className="logo">AEROVISUAL</Link>
          <p className="brand-description">
            Servicios audiovisuales aéreos profesionales con drones. Capturando perspectivas únicas para marcas que exigen la máxima calidad.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Camera /></a>
            <a href="#" aria-label="YouTube"><Video /></a>
            <a href="#" aria-label="Website"><Globe /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Servicios</h3>
          <Link href="/servicios/bienes-raices">Bienes Raíces</Link>
          <Link href="/servicios/eventos">Cobertura de Eventos</Link>
          <Link href="/servicios/monitoreo-obras">Monitoreo de Obras</Link>
          <Link href="/servicios/inspeccion">Inspección de Infraestructura</Link>
          <Link href="/servicios/produccion-publicitaria">Producción Publicitaria</Link>
          <Link href="/servicios/mapeo-agricultura">Mapeo y Agricultura</Link>
        </div>

        <div className="footer-links">
          <h3>Empresa</h3>
          <Link href="/sobre-nosotros">Sobre Nosotros</Link>
          <Link href="/portafolio">Portafolio</Link>
          <Link href="/precios">Precios y Paquetes</Link>
          <Link href="/faq">FAQ y Normativa</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p><Phone size={16} /> +507 6713-4341</p>
          <p><Mail size={16} /> info@datakorex.com</p>
          <p><MapPin size={16} /> Ciudad de Panamá, Panamá</p>
          <div className="certifications">
            <div className="cert-badge">
              <ShieldCheck size={20} />
              <span>Pilotos Certificados por Aviación Civil</span>
            </div>
            <div className="cert-badge">
              <ShieldCheck size={20} />
              <span>Seguro de Responsabilidad Civil</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} AEROVISUAL. Todos los derechos reservados.</p>
        <div className="legal-links">
          <Link href="/privacidad">Política de Privacidad</Link>
          <Link href="/terminos">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  )
}
