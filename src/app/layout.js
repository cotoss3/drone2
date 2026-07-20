import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AEROVISUAL | Servicios Audiovisuales con Dron',
  description: 'Fotografía y video aéreo profesional para bienes raíces, eventos, construcción, agricultura e inspección de infraestructura.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
