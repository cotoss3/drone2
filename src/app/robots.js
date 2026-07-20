// IMPORTANTE: reemplazar BASE_URL por el dominio real una vez publicado el sitio.
const BASE_URL = 'https://aerovisual.com'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
