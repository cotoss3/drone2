import './terminos.css'

export const metadata = {
  title: 'Términos de Servicio | AERO PANAMÁ',
  description: 'Términos y condiciones de nuestros servicios de fotografía y video con drones.',
}

export default function TerminosDeServicio() {
  return (
    <div className="terminos-page">
      <div className="terminos-hero">
        <div className="terminos-hero-content">
          <h1>Términos de Servicio</h1>
          <p>Condiciones generales para la contratación y prestación de servicios aéreos</p>
        </div>
      </div>

      <div className="container terminos-container">
        <div className="glass-panel terminos-content">
          <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

          <section>
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al contratar los servicios de AERO PANAMÁ (en adelante, "la Empresa"), el cliente acepta íntegramente los siguientes Términos y Condiciones. 
              Estas políticas están diseñadas para garantizar la seguridad de las operaciones, el cumplimiento de la normativa aeronáutica y la calidad del material entregado.
            </p>
          </section>

          <section>
            <h2>2. Condiciones y Seguridad de Vuelo</h2>
            <p>
              La operación de drones está estrictamente sujeta a las condiciones meteorológicas y a las regulaciones de la Autoridad de Aviación Civil.
            </p>
            <ul>
              <li><strong>Clima:</strong> No volaremos en condiciones de lluvia, llovizna, vientos superiores a 35 km/h, neblina densa o tormentas eléctricas. Si el clima impide el vuelo, se reprogramará sin costo adicional.</li>
              <li><strong>Autoridad del Piloto:</strong> El piloto al mando tiene la autoridad final para cancelar, suspender o abortar cualquier vuelo si considera que existe un riesgo para las personas, la propiedad o la aeronave.</li>
            </ul>
          </section>

          <section>
            <h2>3. Permisos y Restricciones de Espacio Aéreo</h2>
            <p>
              Es responsabilidad del <strong>cliente</strong> garantizar que cuenta con los permisos necesarios del propietario del terreno o las instalaciones donde se realizará el despegue y aterrizaje.
            </p>
            <p>
              Si el lugar de vuelo se encuentra en una zona restringida (cerca de aeropuertos, bases militares, prisiones o zonas de exclusión aérea gubernamental), la Empresa tramitará los permisos correspondientes. Si la autorización es denegada por las autoridades, el servicio no podrá realizarse y se reembolsará cualquier anticipo descontando gastos administrativos.
            </p>
          </section>

          <section>
            <h2>4. Pagos, Reservas y Cancelaciones</h2>
            <ul>
              <li><strong>Reserva:</strong> Se requiere un anticipo del 50% del total para bloquear la fecha y hora del servicio. El 50% restante deberá abonarse contra entrega de las muestras del material final.</li>
              <li><strong>Cancelaciones por el cliente:</strong> Las cancelaciones realizadas con más de 72 horas de anticipación recibirán un reembolso completo del anticipo. Si se cancela con menos de 72 horas, la Empresa retendrá el 50% del anticipo en concepto de penalización.</li>
              <li><strong>Reprogramación:</strong> Se permite una reprogramación gratuita si se notifica con al menos 48 horas de antelación.</li>
            </ul>
          </section>

          <section>
            <h2>5. Entrega de Material y Revisiones</h2>
            <p>
              El tiempo estándar de entrega para fotografías es de 2 a 3 días hábiles. Para videos editados, el plazo es de 5 a 7 días hábiles tras la grabación.
            </p>
            <p>
              Los paquetes de edición de video incluyen hasta dos (2) rondas de revisiones menores (cambios de música, ajustes de color, cortes específicos). Revisiones adicionales u horas extra de edición serán facturadas por separado. Los archivos crudos (RAW) no se entregan por defecto, a menos que se estipule en el contrato inicial.
            </p>
          </section>

          <section>
            <h2>6. Derechos de Autor y Uso de Imagen</h2>
            <p>
              La Empresa retiene los derechos de autor de todo el material grabado. Al completarse el pago, se otorga al cliente una <strong>licencia de uso comercial y promocional ilimitada</strong> sobre el producto final.
            </p>
            <p>
              La Empresa se reserva el derecho de utilizar el material (fotografías o clips de video) para su propio portafolio, sitio web, redes sociales y material de marketing, a menos que el cliente solicite explícitamente un <strong>Acuerdo de Confidencialidad (NDA)</strong> antes de la realización del vuelo.
            </p>
          </section>

          <section>
            <h2>7. Límite de Responsabilidad</h2>
            <p>
              La Empresa opera con seguros de responsabilidad civil para daños a terceros. Sin embargo, no seremos responsables por pérdidas indirectas, lucro cesante o daños derivados del uso del material por parte del cliente. En el improbable caso de que se pierda el material digital por falla técnica antes de la entrega, nuestra responsabilidad máxima se limita al reembolso total de los importes pagados por el cliente y la oferta de repetir el vuelo sin costo.
            </p>
          </section>

          <section>
            <h2>8. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos de Servicio, puede contactarnos en:
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
