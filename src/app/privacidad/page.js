import '../terminos/terminos.css'

export const metadata = {
  title: 'Política de Privacidad | AERO PANAMÁ',
  description: 'Política de privacidad sobre cómo recopilamos, usamos y protegemos tus datos.',
}

export default function PoliticaPrivacidad() {
  return (
    <div className="terminos-page">
      <div className="terminos-hero">
        <div className="terminos-hero-content">
          <h1>Política de Privacidad</h1>
          <p>Transparencia y protección sobre el manejo de tu información</p>
        </div>
      </div>

      <div className="container terminos-container">
        <div className="glass-panel terminos-content">
          <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

          <section>
            <h2>1. Introducción</h2>
            <p>
              En AERO PANAMÁ (en adelante, "la Empresa"), respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. 
              Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y compartimos la información obtenida a través de nuestro sitio web y durante la prestación de nuestros servicios audiovisuales aéreos.
            </p>
          </section>

          <section>
            <h2>2. Información que Recopilamos</h2>
            <p>
              Podemos recopilar y procesar los siguientes tipos de datos:
            </p>
            <ul>
              <li><strong>Datos de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono y dirección postal.</li>
              <li><strong>Datos del servicio:</strong> Ubicaciones geográficas (coordenadas GPS de propiedades a sobrevolar), detalles del evento o requerimientos técnicos del proyecto.</li>
              <li><strong>Imágenes y Video:</strong> Fotografías y grabaciones en video capturadas por nuestros drones durante la prestación del servicio.</li>
              <li><strong>Datos de navegación (Cookies):</strong> Información técnica como tu dirección IP, tipo de navegador y comportamiento de navegación en nuestro sitio web.</li>
            </ul>
          </section>

          <section>
            <h2>3. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para los siguientes fines:
            </p>
            <ul>
              <li>Contactarte para enviar cotizaciones, facturas y coordinar la logística de vuelo.</li>
              <li>Planificar rutas de vuelo seguras y evaluar riesgos operativos en las ubicaciones solicitadas.</li>
              <li>Entregar el producto final contratado (enlaces de descarga de fotos y videos).</li>
              <li>Mejorar nuestro sitio web y analizar tendencias de tráfico.</li>
            </ul>
          </section>

          <section>
            <h2>4. Privacidad en Grabaciones Aéreas (Drones)</h2>
            <p>
              Debido a la naturaleza de nuestro trabajo, los drones pueden capturar incidentalmente imágenes de personas o propiedades vecinas. Nos comprometemos a:
            </p>
            <ul>
              <li>Enfocar nuestras cámaras exclusivamente en la propiedad o evento para el que fuimos contratados.</li>
              <li>Evitar sobrevolar propiedades privadas colindantes de manera invasiva.</li>
              <li>Difuminar rostros o placas de vehículos identificables no relacionados con el proyecto si el material se utiliza con fines promocionales públicos, salvo autorización expresa.</li>
            </ul>
          </section>

          <section>
            <h2>5. Protección y Retención de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado. 
              Los archivos crudos (RAW) y finales de foto y video se almacenan en servidores seguros durante un máximo de <strong>6 meses</strong> tras la entrega final. 
              Después de este período, no garantizamos el respaldo de los archivos.
            </p>
          </section>

          <section>
            <h2>6. Compartir con Terceros</h2>
            <p>
              No vendemos, comercializamos ni alquilamos tu información personal a terceros. Solo compartiremos tus datos:
            </p>
            <ul>
              <li>Con proveedores de servicios externos de confianza (ej. plataformas de almacenamiento en la nube, pasarelas de pago) estrictamente necesarios para operar nuestro negocio.</li>
              <li>Si es requerido por autoridades competentes (como la Autoridad de Aviación Civil o autoridades judiciales) para cumplir con obligaciones legales.</li>
            </ul>
          </section>

          <section>
            <h2>7. Tus Derechos</h2>
            <p>
              Tienes derecho a solicitar el acceso, rectificación, eliminación o restricción del uso de tus datos personales. 
              Si deseas ejercer alguno de estos derechos o si deseas que retiremos un material audiovisual de nuestro portafolio público, contáctanos inmediatamente.
            </p>
          </section>

          <section>
            <h2>8. Contacto</h2>
            <p>
              Para cualquier consulta, queja o solicitud relacionada con esta Política de Privacidad, por favor comunícate con nosotros:
            </p>
            <p>
              <strong>Email:</strong> info@datakorex.com<br />
              <strong>Teléfono:</strong> +507 6713-4341<br />
              <strong>Dirección:</strong> Ciudad de Panamá, Panamá
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
