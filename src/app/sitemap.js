// IMPORTANTE: reemplazar BASE_URL por el dominio real una vez publicado el sitio.
const BASE_URL = 'https://aerovisual.com'

const routes = [
  '',
  '/servicios',
  '/servicios/bienes-raices',
  '/servicios/eventos',
  '/servicios/monitoreo-obras',
  '/servicios/inspeccion',
  '/servicios/produccion-publicitaria',
  '/servicios/mapeo-agricultura',
  '/portafolio',
  '/sobre-nosotros',
  '/precios',
  '/faq',
  '/blog',
  '/contacto',
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
