import { CheckCircle, Settings, RotateCcw } from 'lucide-react'

export default function McCallPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-spotify-black">Modelo McCall</h1>
          <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
            El modelo McCall evalúa la calidad del software a través de tres capacidades principales: 
            <strong> Operación</strong>, <strong>Transición</strong> y <strong>Revisión</strong>, 
            midiendo factores como corrección, confiabilidad, usabilidad, integridad, portabilidad, 
            reusabilidad, interoperabilidad, mantenibilidad, flexibilidad y facilidad de prueba.
          </p>
          <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
            Este modelo de calidad fue presentado en <strong>1977</strong> y propone una serie de factores de calidad
            conocidos como factores de McCall, <strong>Richards, & Walters (1977).</strong> La idea del modelo es la descomposición
            del concepto genérico de calidad en tres capacidades importantes para un producto software, 
            todo desde la mirada del usuario. A su vez, cada capacidad se descompone en un conjunto de factores 
            y finalmente se definen criterios para evaluar el factor a través de métricas que indican en qué medida 
            el sistema posee una característica dada.
          </p>
        </div>

      {/* Cuestionario - Métrica de Compleción de Funciones */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Cuestionario: Métrica de Compleción de Funciones</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Función</th>
                <th>Pregunta</th>
                <th>Esperado</th>
                <th>Web</th>
                <th>Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Operaciones básicas</td>
                <td>¿El sistema permite ejecutar las operaciones básicas de reproducción sin fallos?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Playlists</td>
                <td>¿Spotify gestiona adecuadamente las playlists del usuario?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Búsqueda</td>
                <td>¿La búsqueda devuelve resultados relevantes y rápidos?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Recomendaciones</td>
                <td>¿El sistema genera recomendaciones útiles?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Gestión de cuenta</td>
                <td>¿Las funciones de gestión de cuenta funcionan correctamente?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Reproducción offline</td>
                <td>¿La app permite la reproducción offline estable?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-red-600">1</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Integración externa</td>
                <td>¿Spotify se integra con dispositivos externos?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación entre Factores de Calidad y Métricas */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Relación entre Factores de Calidad y Métricas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Factor de Calidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Operaciones básicas</td>
                <td className="text-spotify-green font-semibold">Corrección</td>
              </tr>
              <tr>
                <td className="font-medium">Playlists</td>
                <td className="text-spotify-green font-semibold">Confiabilidad, Usabilidad</td>
              </tr>
              <tr>
                <td className="font-medium">Búsqueda</td>
                <td className="text-spotify-green font-semibold">Usabilidad</td>
              </tr>
              <tr>
                <td className="font-medium">Recomendaciones</td>
                <td className="text-spotify-green font-semibold">Usabilidad</td>
              </tr>
              <tr>
                <td className="font-medium">Gestión de cuenta</td>
                <td className="text-spotify-green font-semibold">Confiabilidad, Integridad</td>
              </tr>
              <tr>
                <td className="font-medium">Reproducción offline</td>
                <td className="text-spotify-green font-semibold">Integridad, Portabilidad</td>
              </tr>
              <tr>
                <td className="font-medium">Integración externa</td>
                <td className="text-spotify-green font-semibold">Usabilidad, Interoperabilidad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados de la Evaluación */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <RotateCcw className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Resultados de la Evaluación</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Capacidad</th>
                <th>Factor</th>
                <th>Puntaje Máximo</th>
                <th>Web</th>
                <th>Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className="font-semibold bg-spotify-gray-light">Operación (40 pts)</td>
                <td className="font-medium">Corrección</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
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
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">Transición (30 pts)</td>
                <td className="font-medium">Portabilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
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
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">Revisión (30 pts)</td>
                <td className="font-medium">Mantenibilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
              </tr>
              <tr>
                <td className="font-medium">Flexibilidad</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
              </tr>
              <tr>
                <td className="font-medium">Facilidad de prueba</td>
                <td className="text-center">10</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td colSpan="2" className="text-right text-lg">Total (100 pts)</td>
                <td className="text-center">100</td>
                <td className="text-center text-xl">82</td>
                <td className="text-center text-xl">97</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-spotify-black text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-spotify-green mb-4">Resultado Final McCall</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-spotify-gray-dark rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Spotify Web</h4>
            <p className="text-3xl font-bold text-spotify-green">82/100</p>
            <p className="text-spotify-gray mt-2">Puntuación sólida con oportunidades de mejora</p>
          </div>
          <div className="bg-spotify-gray-dark rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Spotify Móvil</h4>
            <p className="text-3xl font-bold text-spotify-green">97/100</p>
            <p className="text-spotify-gray mt-2">Excelente desempeño en todas las capacidades</p>
          </div>
        </div>
        <p className="text-spotify-gray mt-6">
          La versión móvil destaca especialmente en operación y transición, mientras que la web 
          requiere mejoras principalmente en reproducción offline y reusabilidad.
        </p>
      </section>
    </div>
  )
}