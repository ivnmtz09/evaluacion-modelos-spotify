import { Target, BarChart3, Award, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BoehmPage() {
  return (
    <div className="space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5" />
          Modelo de Calidad • Año 1978
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Modelo Boehm (Barry Boehm)
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Propuesto por <strong className="text-white font-semibold">Barry Boehm en 1978</strong>, este modelo estructura la calidad del software en tres niveles jerárquicos: 
          <strong className="text-white font-semibold"> Utilidad</strong>, 
          <strong className="text-white font-semibold"> Mantenibilidad</strong> y 
          <strong className="text-white font-semibold"> Flexibilidad</strong>, evaluando características primitivas que inciden directamente en el ciclo de vida del producto.
        </p>
      </div>

      {/* Cuestionario de características primitivas */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Criterios Primitivos</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Cuestionario de Características Primitivas
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
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
                <td rowSpan="4" className="font-bold bg-white/5 text-white">Utilidad</td>
                <td className="font-medium">Portabilidad → Adaptabilidad</td>
                <td className="text-gray-300">¿Spotify se adapta a diferentes dispositivos y sistemas operativos?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Confiabilidad → Tolerancia a fallos</td>
                <td className="text-gray-300">¿Maneja adecuadamente errores y caídas de conexión transitorias?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Eficiencia → Tiempo de respuesta</td>
                <td className="text-gray-300">¿Responde con rapidez a búsquedas y transiciones de reproducción?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Eficiencia → Uso de recursos</td>
                <td className="text-gray-300">¿Mantiene un consumo balanceado de memoria RAM y CPU?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
              </tr>
              <tr>
                <td rowSpan="2" className="font-bold bg-white/5 text-white">Mantenibilidad</td>
                <td className="font-medium">Testabilidad</td>
                <td className="text-gray-300">¿Facilita pruebas de integración y detección de anomalías?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Comprensión</td>
                <td className="text-gray-300">¿Su arquitectura facilita la actualización modular continua?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td rowSpan="2" className="font-bold bg-white/5 text-white">Flexibilidad</td>
                <td className="font-medium">Expansibilidad</td>
                <td className="text-gray-300">¿Permite integrar nuevas funciones sin alterar el core?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Reusabilidad</td>
                <td className="text-gray-300">¿Se integra eficientemente con servicios y hardware externos?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Puntuación obtenida (Promedios) */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Métricas Likert</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Puntuación Obtenida (Promedios por Nivel)
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Puntaje Máximo</th>
                <th>Puntos Web</th>
                <th>Puntos Móvil</th>
                <th>Promedio Web</th>
                <th>Promedio Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-white">Utilidad</td>
                <td className="text-center font-mono">16</td>
                <td className="text-center font-bold font-mono text-gray-300">13</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">15</td>
                <td className="text-center font-mono text-gray-300">3.25</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">3.75</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Mantenibilidad</td>
                <td className="text-center font-mono">8</td>
                <td className="text-center font-bold font-mono text-gray-300">6</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-mono text-gray-300">3.00</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4.00</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Flexibilidad</td>
                <td className="text-center font-mono">8</td>
                <td className="text-center font-bold font-mono text-gray-300">7</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-mono text-gray-300">3.50</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4.00</td>
              </tr>
            </tbody>
            <tfoot className="bg-black/60 text-white font-bold">
              <tr>
                <td className="text-right px-6 py-4">Promedios Totales</td>
                <td className="text-center font-mono">32</td>
                <td className="text-center font-mono text-gray-200">26</td>
                <td className="text-center font-mono text-spotify-green-light">31</td>
                <td className="text-center font-mono text-gray-200">3.25</td>
                <td className="text-center font-mono text-spotify-green-light">3.88</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Resultados globales porcentuales */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Normalización Centesimal</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Resultados Globales de la Evaluación (0 - 100%)
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Nivel Jerárquico</th>
                <th>Total Esperado</th>
                <th>Puntos Web</th>
                <th>Puntos Móvil</th>
                <th>% Web</th>
                <th>% Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-white">Utilidad</td>
                <td className="text-center font-mono">16</td>
                <td className="text-center font-mono text-gray-300">13</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">15</td>
                <td className="text-center font-mono text-gray-300">81.25%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">93.75%</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Mantenibilidad</td>
                <td className="text-center font-mono">8</td>
                <td className="text-center font-mono text-gray-300">6</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-mono text-gray-300">75.00%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">100.00%</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Flexibilidad</td>
                <td className="text-center font-mono">8</td>
                <td className="text-center font-mono text-gray-300">7</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-mono text-gray-300">87.50%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">100.00%</td>
              </tr>
            </tbody>
            <tfoot className="bg-black/60 text-white font-bold">
              <tr>
                <td className="text-right px-6 py-4">Índice Global Boehm</td>
                <td className="text-center font-mono">32</td>
                <td className="text-center font-mono text-gray-200">26</td>
                <td className="text-center font-mono text-spotify-green-light">31</td>
                <td className="text-center font-mono text-xl text-gray-200">81%</td>
                <td className="text-center font-mono text-xl text-spotify-green-light">97%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión Boehm */}
      <section className="card-interactive rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-spotify-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Resultado Final Boehm: 89 / 100 (57 / 64)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 card-interactive text-left">
              <span className="text-xs font-mono font-bold text-gray-400">Spotify Web</span>
              <p className="text-4xl font-black text-white font-mono my-2">81%</p>
              <p className="text-xs text-gray-300">26 / 32 puntos brutos</p>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Buen desempeño con oportunidad en testabilidad y adaptabilidad a entornos con cuotas estrictas de recursos.
              </p>
            </div>
            <div className="bg-black/40 border border-spotify-green/40 rounded-2xl p-6 card-interactive text-left shadow-glow-green-sm">
              <span className="text-xs font-mono font-bold text-spotify-green-light">Spotify Móvil</span>
              <p className="text-4xl font-black text-spotify-green-light font-mono my-2">97%</p>
              <p className="text-xs text-gray-300">31 / 32 puntos brutos</p>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Excelente completitud alcanzando el 100% en mantenibilidad y flexibilidad operativa.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link to="/furps" className="spotify-button inline-flex items-center gap-2 mx-auto text-xs font-bold">
              <span>Siguiente Modelo: FURPS (1992)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
