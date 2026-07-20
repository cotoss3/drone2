'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Camera, Video, Building2, ShieldAlert, Map } from 'lucide-react'
import './Navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          AEROVISUAL
        </Link>
        
        <div className="desktop-links">
          <div className="nav-dropdown-wrapper">
            <Link href="/servicios">Servicios</Link>
            <div className="nav-dropdown mega-menu glass-panel">
              <div className="mega-menu-column">
                <h4 className="mega-menu-title">PRODUCCIÓN AUDIOVISUAL</h4>
                
                <Link href="/servicios/bienes-raices" className="mega-menu-item">
                  <div className="mega-icon"><Home size={20} /></div>
                  <div className="mega-text">
                    <strong>Bienes Raíces</strong>
                    <span>Fotos y video para listados</span>
                  </div>
                </Link>
                
                <Link href="/servicios/eventos" className="mega-menu-item">
                  <div className="mega-icon"><Camera size={20} /></div>
                  <div className="mega-text">
                    <strong>Eventos</strong>
                    <span>Bodas y corporativos</span>
                  </div>
                </Link>
                
                <Link href="/servicios/produccion-publicitaria" className="mega-menu-item">
                  <div className="mega-icon"><Video size={20} /></div>
                  <div className="mega-text">
                    <strong>Publicidad</strong>
                    <span>Spots y redes sociales</span>
                  </div>
                </Link>
              </div>

              <div className="mega-menu-column">
                <h4 className="mega-menu-title">INGENIERÍA Y ANÁLISIS</h4>
                
                <Link href="/servicios/monitoreo-obras" className="mega-menu-item">
                  <div className="mega-icon"><Building2 size={20} /></div>
                  <div className="mega-text">
                    <strong>Monitoreo de Obras</strong>
                    <span>Avance fotográfico 360°</span>
                  </div>
                </Link>
                
                <Link href="/servicios/inspeccion" className="mega-menu-item">
                  <div className="mega-icon"><ShieldAlert size={20} /></div>
                  <div className="mega-text">
                    <strong>Inspección</strong>
                    <span>Revisión de infraestructura</span>
                  </div>
                </Link>
                
                <Link href="/servicios/mapeo-agricultura" className="mega-menu-item">
                  <div className="mega-icon"><Map size={20} /></div>
                  <div className="mega-text">
                    <strong>Mapeo y Agricultura</strong>
                    <span>Ortomosaicos y topografía</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/portafolio">Portafolio</Link>
          <Link href="/sobre-nosotros">Nosotros</Link>
          <Link href="/precios">Precios</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <div className="nav-actions">
          <Link href="/contacto" className="btn-primary">Cotizar Ahora</Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link href="/servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
          <Link href="/portafolio" onClick={() => setMobileMenuOpen(false)}>Portafolio</Link>
          <Link href="/sobre-nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
          <Link href="/precios" onClick={() => setMobileMenuOpen(false)}>Precios</Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  )
}
