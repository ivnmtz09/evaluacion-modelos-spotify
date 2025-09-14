export default function BoehmPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Modelo Boehm</h1>
        <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
          El modelo de Boehm organiza la calidad en <strong>características de alto nivel</strong>,
          <strong> nivel intermedio</strong> y <strong>primitivas</strong>, cada una contribuye al nivel general de
          calidad.
        </p>
      </div>

      {/* Estructura del Modelo */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Estructura del Modelo Boehm</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Características de Alto Nivel</th>
                <th>Puntaje</th>
                <th>Características de Nivel Intermedio</th>
                <th>Características Primitivas</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2" className="font-semibold bg-spotify-gray-light">
                  Utilidad General
                </td>
                <td rowSpan="2" className="text-center font-semibold">
                  10
                </td>
                <td className="font-medium">Portabilidad</td>
                <td>Independencia de Dispositivos, Auto-contención</td>
                <td className="text-center">5, 5</td>
              </tr>
              <tr>
                <td className="font-medium">-</td>
                <td>-</td>
                <td className="text-center">-</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">
                  Utilidad
                </td>
                <td rowSpan="3" className="text-center font-semibold">
                  70
                </td>
                <td className="font-medium">Fiabilidad</td>
                <td>Precisión, Completitud, Robustez, Consistencia</td>
                <td className="text-center">40</td>
              </tr>
              <tr>
                <td className="font-medium">Eficiencia</td>
                <td>Responsabilidad, Eficiencia de dispositivos, Accesibilidad</td>
                <td className="text-center">15</td>
              </tr>
              <tr>
                <td className="font-medium">Interactividad</td>
                <td>Robustez, Accesibilidad, Capacidad de comunicación</td>
                <td className="text-center">15</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">
                  Mantenibilidad
                </td>
                <td rowSpan="3" className="text-center font-semibold">
                  20
                </td>
                <td className="font-medium">Facilidad de Prueba</td>
                <td>Auto descripción, Estructuración</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td className="font-medium">Facilidad de Entendimiento</td>
                <td>Concisión, Legibilidad</td>
                <td className="text-center">10</td>
              </tr>
              <tr>
                <td className="font-medium">Modificabilidad</td>
                <td>Estructuración, Escalabilidad</td>
                <td className="text-center">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cuestionario */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Características Primitivas y Cuestionario</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica (Nivel)</th>
                <th>Pregunta</th>
                <th>Puntaje Esperado</th>
                <th>Puntaje Obtenido (Web)</th>
                <th>Puntaje Obtenido (Móvil)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Portabilidad (Independencia)</td>
                <td>¿Funciona en múltiples SO/plataformas?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Confiabilidad (Tolerancia a fallos)</td>
                <td>¿Se mantiene la calidad de reproducción?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Eficiencia (Uso de recursos)</td>
                <td>¿Consume recursos de manera adecuada?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Usabilidad</td>
                <td>¿Interfaz intuitiva y clara?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Testabilidad / Mantenibilidad</td>
                <td>¿Es posible detectar y corregir errores fácilmente?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Puntuación obtenida */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Puntuación Obtenida</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Promedio Nivel (Web)</th>
                <th>Puntaje Nivel (Web)</th>
                <th>Promedio Nivel (Móvil)</th>
                <th>Puntaje Nivel (Móvil)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Utilidad general</td>
                <td className="text-center font-semibold">3.2</td>
                <td className="text-center font-semibold text-spotify-green">7.5</td>
                <td className="text-center font-semibold">3.8</td>
                <td className="text-center font-semibold text-spotify-green">9.3</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Facilidad de uso</td>
                <td className="text-center font-semibold">3.0</td>
                <td className="text-center font-semibold text-spotify-green">7.0</td>
                <td className="text-center font-semibold">3.8</td>
                <td className="text-center font-semibold text-spotify-green">9.3</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Mantenibilidad</td>
                <td className="text-center font-semibold">3.0</td>
                <td className="text-center font-semibold text-spotify-green">7.0</td>
                <td className="text-center font-semibold">3.7</td>
                <td className="text-center font-semibold text-spotify-green">9.0</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td className="text-right text-lg">Promedio Total</td>
                <td colSpan="2" className="text-center text-xl">
                  Web: 7.5/10
                </td>
                <td colSpan="2" className="text-center text-xl">
                  Móvil: 9.38/10
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-spotify-black text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-spotify-green mb-4">Resultado Final Boehm</h3>
        <p className="text-xl mb-4">
          Spotify Móvil logra mayor completitud con <span className="text-spotify-green font-bold">9.38/10</span>
        </p>
        <p className="text-xl mb-2">
          Mientras que la versión Web obtiene <span className="text-spotify-green font-bold">7.5/10</span>
        </p>
        <p className="text-spotify-gray">La versión móvil destaca especialmente en facilidad de uso y mantenimiento</p>
      </section>
    </div>
  )
}
