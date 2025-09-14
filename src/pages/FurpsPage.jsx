export default function FurpsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Modelo FURPS</h1>
        <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
          El modelo FURPS evalúa la calidad en 5 factores principales: <strong>Funcionalidad</strong>,
          <strong> Usabilidad</strong>, <strong>Fiabilidad</strong>, <strong>Rendimiento</strong> y{" "}
          <strong>Soporte</strong>.
        </p>
      </div>

      {/* Estructura del Modelo */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Estructura del Modelo FURPS</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Puntaje</th>
                <th>Factor</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">
                  F - Funcionalidad
                </td>
                <td rowSpan="3" className="text-center font-semibold">
                  30
                </td>
                <td>Características y capacidades del programa</td>
                <td className="text-center">10</td>
              </tr>
              <tr>
                <td>Generalidad de las funciones</td>
                <td className="text-center">10</td>
              </tr>
              <tr>
                <td>Seguridad del Sistema</td>
                <td className="text-center">10</td>
              </tr>
              <tr>
                <td rowSpan="4" className="font-semibold bg-spotify-gray-light">
                  U - Usabilidad
                </td>
                <td rowSpan="4" className="text-center font-semibold">
                  20
                </td>
                <td>Capacidad de Prueba</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Capacidad de configuración</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Compatibilidad</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Requisitos de instalación</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">
                  R - Confiabilidad
                </td>
                <td rowSpan="3" className="text-center font-semibold">
                  15
                </td>
                <td>Frecuencia y severidad de fallos</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Exactitud de las salidas</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Capacidad de predicción</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td rowSpan="4" className="font-semibold bg-spotify-gray-light">
                  P - Rendimiento
                </td>
                <td rowSpan="4" className="text-center font-semibold">
                  20
                </td>
                <td>Factores Humanos</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Factores Estéticos</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Consistencia de la interfaz</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td>Documentación</td>
                <td className="text-center">5</td>
              </tr>
              <tr>
                <td rowSpan="5" className="font-semibold bg-spotify-gray-light">
                  S - Soporte
                </td>
                <td rowSpan="5" className="text-center font-semibold">
                  15
                </td>
                <td>Velocidad de procesamiento</td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td>Tiempo de respuesta</td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td>Consumo de recursos</td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td>Rendimiento efectivo total</td>
                <td className="text-center">3</td>
              </tr>
              <tr>
                <td>Eficacia</td>
                <td className="text-center">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Evaluación */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Evaluación por Factores</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Factor</th>
                <th>Valoración (1-4) Web</th>
                <th>Valoración (1-4) Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-spotify-green">Funcionalidad</td>
                <td>Capacidades, seguridad, adecuación</td>
                <td className="text-center font-bold text-spotify-green">3</td>
                <td className="text-center font-bold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-semibold text-spotify-green">Usabilidad</td>
                <td>Facilidad de uso, consistencia interfaz</td>
                <td className="text-center font-bold text-spotify-green">3</td>
                <td className="text-center font-bold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-semibold text-spotify-green">Fiabilidad</td>
                <td>Disponibilidad, tolerancia a fallos</td>
                <td className="text-center font-bold text-spotify-green">3</td>
                <td className="text-center font-bold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-semibold text-spotify-green">Rendimiento</td>
                <td>Tiempo de respuesta, eficiencia</td>
                <td className="text-center font-bold text-spotify-green">3</td>
                <td className="text-center font-bold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-semibold text-spotify-green">Soportabilidad</td>
                <td>Mantenimiento, flexibilidad, portabilidad</td>
                <td className="text-center font-bold text-spotify-green">3</td>
                <td className="text-center font-bold text-spotify-green">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Resultados de la Valoración</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Puntaje Esperado</th>
                <th>Puntaje Obtenido (Web)</th>
                <th>Puntaje Obtenido (Móvil)</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Funcionalidad</td>
                <td className="text-center">30</td>
                <td className="text-center font-bold text-spotify-green">27</td>
                <td className="text-center font-bold text-spotify-green">30</td>
                <td className="text-center font-bold text-spotify-green">Web: 9.0 / Móvil: 10</td>
              </tr>
              <tr>
                <td className="font-semibold">Usabilidad</td>
                <td className="text-center">20</td>
                <td className="text-center font-bold text-spotify-green">18</td>
                <td className="text-center font-bold text-spotify-green">20</td>
                <td className="text-center font-bold text-spotify-green">Web: 9.0 / Móvil: 10</td>
              </tr>
              <tr>
                <td className="font-semibold">Fiabilidad</td>
                <td className="text-center">20</td>
                <td className="text-center font-bold text-spotify-green">18</td>
                <td className="text-center font-bold text-spotify-green">20</td>
                <td className="text-center font-bold text-spotify-green">Web: 9.0 / Móvil: 10</td>
              </tr>
              <tr>
                <td className="font-semibold">Rendimiento</td>
                <td className="text-center">15</td>
                <td className="text-center font-bold text-spotify-green">14</td>
                <td className="text-center font-bold text-spotify-green">15</td>
                <td className="text-center font-bold text-spotify-green">Web: 9.3 / Móvil: 10</td>
              </tr>
              <tr>
                <td className="font-semibold">Soportabilidad</td>
                <td className="text-center">15</td>
                <td className="text-center font-bold text-spotify-green">14</td>
                <td className="text-center font-bold text-spotify-green">15</td>
                <td className="text-center font-bold text-spotify-green">Web: 9.3 / Móvil: 10</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td colSpan="4" className="text-right text-lg">
                  Puntuación Total FURPS
                </td>
                <td className="text-center text-xl">Web: 9.17/10 | Móvil: 10/10</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-spotify-black text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-spotify-green mb-4">Resultado Final FURPS</h3>
        <p className="text-xl mb-4">
          Spotify Móvil obtuvo una puntuación perfecta de <span className="text-spotify-green font-bold">10/10</span>
        </p>
        <p className="text-xl mb-2">
          Mientras que Spotify Web alcanzó <span className="text-spotify-green font-bold">9.17/10</span>
        </p>
        <p className="text-spotify-gray">Ambas versiones destacan especialmente en funcionalidad y usabilidad</p>
      </section>
    </div>
  )
}
