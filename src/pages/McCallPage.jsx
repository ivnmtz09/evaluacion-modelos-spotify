export default function McCallPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Modelo McCall</h1>
        <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
          El modelo McCall evalúa la calidad en tres capacidades: <strong>Operación</strong>,
          <strong> Transición</strong> y <strong>Revisión</strong>, a través de factores como corrección, confiabilidad,
          usabilidad, seguridad, portabilidad, reusabilidad, interoperabilidad, mantenimiento, flexibilidad y facilidad
          de prueba.
        </p>
      </div>

      {/* Software a Evaluar */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Software a Evaluar</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nombre del Software</th>
                <th>Repositorio</th>
                <th>Descripción</th>
                <th>Licencia de Uso</th>
                <th>Área de Aplicación</th>
                <th>Link de Acceso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Spotify</td>
                <td>Propietario</td>
                <td>Plataforma de streaming musical</td>
                <td>Freemium/Premium</td>
                <td>Entretenimiento Digital</td>
                <td>https://spotify.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Escala de Valoraciones */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Escala de Valoraciones</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Cuantificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Excelente</td>
                <td className="text-center font-bold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Bueno</td>
                <td className="text-center font-bold">3</td>
              </tr>
              <tr>
                <td className="font-medium">Regular</td>
                <td className="text-center font-bold">2</td>
              </tr>
              <tr>
                <td className="font-medium">Malo</td>
                <td className="text-center font-bold">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cuestionario */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Cuestionario - Compleción de Funciones</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Descripción</th>
                <th>Pregunta</th>
                <th>Puntaje Esperado</th>
                <th>Puntaje Obtenido (Web)</th>
                <th>Puntaje Obtenido (Móvil)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Operaciones básicas</td>
                <td>Reproducir, pausar, saltar</td>
                <td>¿Spotify ejecuta operaciones básicas de reproducción sin fallos?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Playlists</td>
                <td>Crear, editar, eliminar</td>
                <td>¿Se gestionan las playlists correctamente?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Búsqueda</td>
                <td>Localizar contenidos</td>
                <td>¿Los resultados de búsqueda son adecuados?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Recomendaciones</td>
                <td>Algoritmos de Discover/Radio</td>
                <td>¿Las recomendaciones son relevantes?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Gestión de cuenta</td>
                <td>Registro, login, suscripción</td>
                <td>¿Las funciones de cuenta funcionan bien?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Reproducción offline</td>
                <td>Descargas y uso sin red</td>
                <td>¿Se soporta la reproducción offline?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">1</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Integración externa</td>
                <td>Chromecast, AirPlay, Bluetooth</td>
                <td>¿Funciona la integración con otros dispositivos?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación entre Factores y Métricas */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Relación entre Factores de Calidad y Métricas</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Operación (Corrección, Confiabilidad, Usabilidad, Integridad)</th>
                <th>Transición (Portabilidad, Reusabilidad, Interoperabilidad)</th>
                <th>Revisión (Mantenibilidad, Flexibilidad, Prueba)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Compleción de funciones</td>
                <td className="text-center text-spotify-green font-semibold">Corrección</td>
                <td className="text-center text-spotify-gray">-</td>
                <td className="text-center text-spotify-gray">-</td>
              </tr>
              <tr>
                <td className="font-medium">Complejidad / Integración externa</td>
                <td className="text-center text-spotify-green font-semibold">Usabilidad</td>
                <td className="text-center text-spotify-green font-semibold">Interoperabilidad</td>
                <td className="text-center text-spotify-gray">-</td>
              </tr>
              <tr>
                <td className="font-medium">Reproducción offline</td>
                <td className="text-center text-spotify-green font-semibold">Integridad</td>
                <td className="text-center text-spotify-green font-semibold">Portabilidad</td>
                <td className="text-center text-spotify-gray">-</td>
              </tr>
              <tr>
                <td className="font-medium">Gestión de cuenta</td>
                <td className="text-center text-spotify-green font-semibold">Confiabilidad</td>
                <td className="text-center text-spotify-gray">-</td>
                <td className="text-center text-spotify-gray">-</td>
              </tr>
              <tr>
                <td className="font-medium">Recomendaciones</td>
                <td className="text-center text-spotify-green font-semibold">Usabilidad</td>
                <td className="text-center text-spotify-gray">-</td>
                <td className="text-center text-spotify-gray">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Resultados de la Evaluación</h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Capacidad</th>
                <th>Puntaje Global</th>
                <th>Factor</th>
                <th>Puntaje Factor</th>
                <th>Puntaje Obtenido (Web)</th>
                <th>Puntaje Obtenido (Móvil)</th>
                <th>Puntaje Capacidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className="font-semibold bg-spotify-gray-light">
                  Operación (40)
                </td>
                <td rowSpan="4" className="text-center font-semibold">
                  40
                </td>
                <td className="font-medium">Corrección</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
                <td rowSpan="4" className="text-center font-bold text-spotify-green text-lg">
                  Web: 36 / Móvil: 40
                </td>
              </tr>
              <tr>
                <td className="font-medium">Confiabilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
              </tr>
              <tr>
                <td className="font-medium">Usabilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
              </tr>
              <tr>
                <td className="font-medium">Integridad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">
                  Transición (30)
                </td>
                <td rowSpan="3" className="text-center font-semibold">
                  30
                </td>
                <td className="font-medium">Portabilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
                <td rowSpan="3" className="text-center font-bold text-spotify-green text-lg">
                  Web: 23 / Móvil: 30
                </td>
              </tr>
              <tr>
                <td className="font-medium">Reusabilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">7</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
              </tr>
              <tr>
                <td className="font-medium">Interoperabilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">
                  Revisión (30)
                </td>
                <td rowSpan="3" className="text-center font-semibold">
                  30
                </td>
                <td className="font-medium">Mantenibilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td rowSpan="3" className="text-center font-bold text-spotify-green text-lg">
                  Web: 24 / Móvil: 27
                </td>
              </tr>
              <tr>
                <td className="font-medium">Flexibilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
              </tr>
              <tr>
                <td className="font-medium">Facilidad de Prueba</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td colSpan="6" className="text-right text-lg">
                  Puntaje Total
                </td>
                <td className="text-center text-xl">Web: 82/100 | Móvil: 97/100</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-spotify-black text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-spotify-green mb-4">Resultado Final McCall</h3>
        <p className="text-xl mb-2">
          Spotify Web obtuvo <span className="text-spotify-green font-bold">8.2/10</span>
        </p>
        <p className="text-xl mb-2">
          Spotify Móvil obtuvo <span className="text-spotify-green font-bold">9.7/10</span>
        </p>
        <p className="text-spotify-gray">La versión móvil destaca especialmente en todas las capacidades evaluadas</p>
      </section>
    </div>
  )
}
