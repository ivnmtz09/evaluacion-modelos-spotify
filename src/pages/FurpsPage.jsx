import { Layers, TrendingUp, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FurpsPage() {
  return (
    <div className="space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          Modelo de Calidad • Año 1992
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Modelo FURPS (Robert Grady / Hewlett-Packard)
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Propuesto por <strong className="text-white font-semibold">Robert Grady y Hewlett-Packard (HP)</strong>, 
          evalúa la calidad del software a través de cinco dimensiones críticas: 
          <strong className="text-white font-semibold"> Funcionalidad (F)</strong>, 
          <strong className="text-white font-semibold"> Usabilidad (U)</strong>, 
          <strong className="text-white font-semibold"> Fiabilidad (R)</strong>, 
          <strong className="text-white font-semibold"> Rendimiento (P)</strong> y 
          <strong className="text-white font-semibold"> Soportabilidad (S)</strong>, 
          diferenciando requisitos funcionales de atributos no funcionales.
        </p>
      </div>

      {/* Evaluación por características */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Dimensiones FURPS</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Evaluación por Características y Factores
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>Factor Evaluado</th>
                <th>Esperado</th>
                <th>Web</th>
                <th>Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" className="font-bold bg-white/5 text-white">Funcionalidad (F)</td>
                <td className="font-medium">Cobertura de funciones</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Seguridad / Integridad</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Interoperabilidad</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td rowSpan="2" className="font-bold bg-white/5 text-white">Usabilidad (U)</td>
                <td className="font-medium">Facilidad de uso ergonómica</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Documentación y Ayuda integrada</td>
                <td className="text-center font-mono">3</td>
                <td className="text-center font-bold text-amber-400 font-mono">2</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">3</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-bold bg-white/5 text-white">Fiabilidad (R)</td>
                <td className="font-medium">Tolerancia a fallos de red</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Recuperación de errores y reintentos</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Consistencia de reproducción</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-bold bg-white/5 text-white">Rendimiento (P)</td>
                <td className="font-medium">Tiempo de respuesta y buffer</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Consumo de recursos (CPU / RAM)</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
              </tr>
              <tr>
                <td className="font-medium">Estabilidad continua en sesión</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-bold bg-white/5 text-white">Soportabilidad (S)</td>
                <td className="font-medium">Facilidad de instalación / onboarding</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Portabilidad entre plataformas</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
              <tr>
                <td className="font-medium">Facilidad de mantenimiento y parches</td>
                <td className="text-center font-mono">4</td>
                <td className="text-center font-bold text-amber-400 font-mono">3</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados de la valoración */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Métricas Porcentuales</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Resultados de la Valoración por Dimensión FURPS
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Puntaje Máximo</th>
                <th>Puntos Web</th>
                <th>Puntos Móvil</th>
                <th>% Web</th>
                <th>% Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-white">Funcionalidad (F)</td>
                <td className="text-center font-mono">12</td>
                <td className="text-center font-mono text-gray-300">9</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">12</td>
                <td className="text-center font-mono text-gray-300">75%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">100%</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Usabilidad (U)</td>
                <td className="text-center font-mono">7</td>
                <td className="text-center font-mono text-gray-300">5</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">7</td>
                <td className="text-center font-mono text-gray-300">71%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">100%</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Fiabilidad (R)</td>
                <td className="text-center font-mono">12</td>
                <td className="text-center font-mono text-gray-300">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">12</td>
                <td className="text-center font-mono text-gray-300">83%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">100%</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Rendimiento (P)</td>
                <td className="text-center font-mono">12</td>
                <td className="text-center font-mono text-gray-300">10</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">11</td>
                <td className="text-center font-mono text-gray-300">83%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">92%</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Soportabilidad (S)</td>
                <td className="text-center font-mono">12</td>
                <td className="text-center font-mono text-gray-300">9</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">12</td>
                <td className="text-center font-mono text-gray-300">75%</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">100%</td>
              </tr>
            </tbody>
            <tfoot className="bg-black/60 text-white font-bold">
              <tr>
                <td className="text-right px-6 py-4">Total FURPS Consolidado</td>
                <td className="text-center font-mono">55</td>
                <td className="text-center font-mono text-gray-200">43</td>
                <td className="text-center font-mono text-spotify-green-light">54</td>
                <td className="text-center font-mono text-xl text-gray-200">78%</td>
                <td className="text-center font-mono text-xl text-spotify-green-light">98%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión FURPS */}
      <section className="card-interactive rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-spotify-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Resultado Final FURPS: 88% (97 / 110)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 card-interactive text-left">
              <span className="text-xs font-mono font-bold text-gray-400">Spotify Web</span>
              <p className="text-4xl font-black text-white font-mono my-2">78%</p>
              <p className="text-xs text-gray-300">43 / 55 puntos</p>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Buen desempeño con áreas de mejora en usabilidad, documentación de ayuda y soportabilidad.
              </p>
            </div>
            <div className="bg-black/40 border border-spotify-green/40 rounded-2xl p-6 card-interactive text-left shadow-glow-green-sm">
              <span className="text-xs font-mono font-bold text-spotify-green-light">Spotify Móvil</span>
              <p className="text-4xl font-black text-spotify-green-light font-mono my-2">98%</p>
              <p className="text-xs text-gray-300">54 / 55 puntos</p>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Excelencia casi perfecta, alcanzando 100% en Funcionalidad, Usabilidad, Fiabilidad y Soporte.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link to="/conclusiones" className="spotify-button inline-flex items-center gap-2 mx-auto text-xs font-bold">
              <span>Ver Conclusiones & Veredicto Comparativo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
