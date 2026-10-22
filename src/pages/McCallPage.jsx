import { CheckCircle, Settings, RotateCcw, BarChart3, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function McCallPage() {
  return (
    <div className="space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-3.5 h-3.5" />
          Modelo de Calidad • Año 1977
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Modelo McCall (Richards & Walters)
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          El modelo McCall evalúa la calidad del software a través de tres capacidades fundamentales: 
          <strong className="text-white font-semibold"> Operación</strong>, 
          <strong className="text-white font-semibold"> Transición</strong> y 
          <strong className="text-white font-semibold"> Revisión</strong>, 
          midiendo 11 factores como corrección, confiabilidad, usabilidad, integridad, portabilidad y mantenibilidad.
        </p>
      </div>

      {/* Cuestionario - Métrica de Compleción de Funciones */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Rúbrica Likert</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Cuestionario: Métrica de Compleción de Funciones
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
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
                <td className="font-bold text-white">Operaciones básicas</td>
                <td className="text-gray-300">¿El sistema permite ejecutar las operaciones básicas de reproducción sin fallos?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Playlists</td>
                <td className="text-gray-300">¿Spotify gestiona adecuadamente las playlists del usuario?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Búsqueda</td>
                <td className="text-gray-300">¿La búsqueda devuelve resultados relevantes y rápidos?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Recomendaciones</td>
                <td className="text-gray-300">¿El sistema genera recomendaciones útiles?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Gestión de cuenta</td>
                <td className="text-gray-300">¿Las funciones de gestión de cuenta funcionan correctamente?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Reproducción offline</td>
                <td className="text-gray-300">¿La app permite la reproducción offline estable?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-red-400 bg-red-950/20 font-mono">1</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Integración externa</td>
                <td className="text-gray-300">¿Spotify se integra con dispositivos externos?</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación entre Factores de Calidad y Métricas */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Mapeo Conceptual</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Relación entre Factores de Calidad y Métricas
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Métrica de Evaluación</th>
                <th>Factor de Calidad Asociado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-white">Operaciones básicas</td>
                <td className="text-spotify-green-light font-bold">Corrección</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Playlists</td>
                <td className="text-spotify-green-light font-bold">Confiabilidad, Usabilidad</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Búsqueda</td>
                <td className="text-spotify-green-light font-bold">Usabilidad</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Recomendaciones</td>
                <td className="text-spotify-green-light font-bold">Usabilidad</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Gestión de cuenta</td>
                <td className="text-spotify-green-light font-bold">Confiabilidad, Integridad</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Reproducción offline</td>
                <td className="text-spotify-green-light font-bold">Integridad, Portabilidad</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Integración externa</td>
                <td className="text-spotify-green-light font-bold">Usabilidad, Interoperabilidad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados de la Evaluación */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Desglose de Factores</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Resultados Cuantitativos por Capacidad
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Capacidad</th>
                <th>Factor</th>
                <th>Puntaje Máx.</th>
                <th>Web</th>
                <th>Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className="font-bold bg-white/5 text-white">Operación (40 pts)</td>
                <td className="font-medium">Corrección</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td className="font-medium">Confiabilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td className="font-medium">Usabilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td className="font-medium">Integridad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-bold bg-white/5 text-white">Transición (30 pts)</td>
                <td className="font-medium">Portabilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td className="font-medium">Reusabilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-amber-400 font-mono">7</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td className="font-medium">Interoperabilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">10</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-bold bg-white/5 text-white">Revisión (30 pts)</td>
                <td className="font-medium">Mantenibilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
              </tr>
              <tr>
                <td className="font-medium">Flexibilidad</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
              </tr>
              <tr>
                <td className="font-medium">Facilidad de prueba</td>
                <td className="text-center font-mono">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">8</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">9</td>
              </tr>
            </tbody>
            <tfoot className="bg-black/60 text-white font-bold">
              <tr>
                <td colSpan="2" className="text-right text-base px-6 py-4">Puntuación Total (100 pts)</td>
                <td className="text-center font-mono">100</td>
                <td className="text-center text-xl font-mono text-gray-200">82</td>
                <td className="text-center text-xl font-mono text-spotify-green-light">97</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión McCall */}
      <section className="card-interactive rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-spotify-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Resultado Final McCall: 89.5 / 100
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 card-interactive text-left">
              <span className="text-xs font-mono font-bold text-gray-400">Plataforma Web</span>
              <p className="text-4xl font-black text-white font-mono my-2">82 / 100</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Puntuación sólida con penalización en reproducción offline y persistencia en sandbox web.
              </p>
            </div>
            <div className="bg-black/40 border border-spotify-green/40 rounded-2xl p-6 card-interactive text-left shadow-glow-green-sm">
              <span className="text-xs font-mono font-bold text-spotify-green-light">Plataforma Móvil</span>
              <p className="text-4xl font-black text-spotify-green-light font-mono my-2">97 / 100</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Excelente desempeño en todas las capacidades con paridad completa de funciones operativas.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            La versión móvil destaca especialmente en operación y transición, mientras que la web requiere mejoras principalmente en reproducción offline y reusabilidad de componentes.
          </p>

          <div className="pt-2">
            <Link to="/boehm" className="spotify-button inline-flex items-center gap-2 mx-auto text-xs font-bold">
              <span>Siguiente Modelo: Boehm (1978)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
