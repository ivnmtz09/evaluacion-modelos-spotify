import { Target, BarChart3, Award } from 'lucide-react'

export default function BoehmPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Modelo Boehm</h1>
        <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
          El modelo de Boehm organiza la calidad del software en tres niveles jerárquicos: 
          <strong> Utilidad</strong>, <strong>Mantenibilidad</strong> y <strong>Flexibilidad</strong>, 
          evaluando características primitivas que contribuyen al nivel general de calidad.
        </p>
      </div>

      {/* Cuestionario de características primitivas */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Cuestionario de Características Primitivas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Característica</th>
                <th>Pregunta</th>
                <th>Esperado</th>
                <th>Web</th>
                <th>Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className="font-semibold bg-spotify-gray-light">Utilidad</td>
                <td className="font-medium">Portabilidad → Adaptabilidad</td>
                <td>¿Spotify se adapta a diferentes dispositivos y SO?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Confiabilidad → Tolerancia a fallos</td>
                <td>¿Maneja errores y caídas de conexión?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Eficiencia → Tiempo de respuesta</td>
                <td>¿Responde rápido a búsquedas y cambios?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Eficiencia → Uso de recursos</td>
                <td>¿Consumo razonable?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
              </tr>
              <tr>
                <td rowSpan="2" className="font-semibold bg-spotify-gray-light">Mantenibilidad</td>
                <td className="font-medium">Testabilidad</td>
                <td>¿Facilita pruebas e identificación de errores?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Comprensión</td>
                <td>¿Su diseño facilita actualización?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td rowSpan="2" className="font-semibold bg-spotify-gray-light">Flexibilidad</td>
                <td className="font-medium">Expansibilidad</td>
                <td>¿Permite nuevas funciones?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Reusabilidad</td>
                <td>¿Se integra con servicios externos?</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Puntuación obtenida (Promedios) */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Puntuación Obtenida (Promedios por Nivel)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Puntaje Máximo</th>
                <th>Web</th>
                <th>Móvil</th>
                <th>Promedio Web</th>
                <th>Promedio Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Utilidad</td>
                <td className="text-center">16</td>
                <td className="text-center font-semibold text-spotify-green">13</td>
                <td className="text-center font-semibold text-spotify-green">15</td>
                <td className="text-center font-bold text-spotify-green">3.25</td>
                <td className="text-center font-bold text-spotify-green">3.75</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Mantenibilidad</td>
                <td className="text-center">8</td>
                <td className="text-center font-semibold text-spotify-green">6</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-bold text-spotify-green">3.00</td>
                <td className="text-center font-bold text-spotify-green">4.00</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Flexibilidad</td>
                <td className="text-center">8</td>
                <td className="text-center font-semibold text-spotify-green">7</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-bold text-spotify-green">3.50</td>
                <td className="text-center font-bold text-spotify-green">4.00</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td className="text-right">Promedios Totales</td>
                <td className="text-center">32</td>
                <td className="text-center text-xl">26</td>
                <td className="text-center text-xl">31</td>
                <td className="text-center text-xl">3.25</td>
                <td className="text-center text-xl">3.88</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Resultados globales */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Resultados Globales de la Evaluación</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Total Esperado</th>
                <th>Web</th>
                <th>Móvil</th>
                <th>% Web</th>
                <th>% Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Utilidad</td>
                <td className="text-center">16</td>
                <td className="text-center font-semibold text-spotify-green">13</td>
                <td className="text-center font-semibold text-spotify-green">15</td>
                <td className="text-center font-bold text-spotify-green">81.25</td>
                <td className="text-center font-bold text-spotify-green">93.75</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Mantenibilidad</td>
                <td className="text-center">8</td>
                <td className="text-center font-semibold text-spotify-green">6</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-bold text-spotify-green">75.00</td>
                <td className="text-center font-bold text-spotify-green">100.00</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Flexibilidad</td>
                <td className="text-center">8</td>
                <td className="text-center font-semibold text-spotify-green">7</td>
                <td className="text-center font-semibold text-spotify-green">8</td>
                <td className="text-center font-bold text-spotify-green">87.50</td>
                <td className="text-center font-bold text-spotify-green">100.00</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td className="text-right text-lg">Total</td>
                <td className="text-center">32</td>
                <td className="text-center text-xl">26</td>
                <td className="text-center text-xl">31</td>
                <td className="text-center text-2xl">81</td>
                <td className="text-center text-2xl">97</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-spotify-black text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-spotify-green mb-4">Resultado Final Boehm</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-spotify-gray-dark rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Spotify Web</h4>
            <p className="text-3xl font-bold text-spotify-green">81</p>
            <p className="text-lg text-spotify-green">26/32 puntos</p>
            <p className="text-spotify-gray mt-2">Buen desempeño con oportunidades de mejora</p>
          </div>
          <div className="bg-spotify-gray-dark rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Spotify Móvil</h4>
            <p className="text-3xl font-bold text-spotify-green">97</p>
            <p className="text-lg text-spotify-green">31/32 puntos</p>
            <p className="text-spotify-gray mt-2">Excelente completitud en todos los niveles</p>
          </div>
        </div>
        <p className="text-spotify-gray mt-6">
          La versión móvil logra mayor completitud especialmente en mantenibilidad y flexibilidad, 
          mientras que la web requiere mejoras en utilidad y mantenibilidad.
        </p>
      </section>
    </div>
  )
}