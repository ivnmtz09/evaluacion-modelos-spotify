import { 
  CheckCircle, 
  Users, 
  Star, 
  AlertTriangle, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Lightbulb, 
  BookOpen, 
  Heart,
  ArrowRight
} from 'lucide-react'
import { Link } from "react-router-dom"

export default function Conclusions() {
  const conclusions = [
    {
      title: "Superioridad de la Versión Móvil",
      content:
        "En todos los modelos evaluados (McCall, Boehm y FURPS), la versión móvil de Spotify demostró un rendimiento superior, obteniendo puntuaciones consistentes entre 97% y 98%, superando a la versión web por más de 16 puntos porcentuales.",
      icon: CheckCircle
    },
    {
      title: "Consistencia en Funcionalidad Base",
      content:
        "Tanto la versión web como móvil mantienen una alta calidad en funcionalidad básica, cumpliendo eficientemente con los requisitos de reproducción musical, búsqueda de catálogo y gestión de playlists.",
      icon: Users
    },
    {
      title: "Usabilidad Excepcional",
      content:
        "Spotify destaca significativamente en usabilidad ergonómica, con interfaces intuitivas y experiencias de usuario optimizadas que facilitan la navegación continua y el descubrimiento algorítmico de música.",
      icon: Star
    },
    {
      title: "Oportunidades de Mejora en Mantenibilidad",
      content:
        "El modelo McCall reveló que las áreas de revisión y mantenimiento presentan las puntuaciones más bajas, sugiriendo oportunidades de mejora en flexibilidad de integración y facilidad de prueba para desarrolladores.",
      icon: AlertTriangle
    },
    {
      title: "Rendimiento y Tolerancia a Fallos",
      content:
        "Ambas plataformas demuestran un rendimiento sólido con tiempos de respuesta rápidos y uso eficiente de recursos, especialmente notable en la versión móvil gracias a su motor nativo y aceleración por GPU.",
      icon: Zap
    },
    {
      title: "Fiabilidad y Disponibilidad",
      content:
        "Spotify mantiene altos estándares de fiabilidad con excelente disponibilidad del servicio cloud (>99.9% uptime) y manejo adecuado de reconexiones ante pérdidas transitorias de conectividad.",
      icon: Shield
    },
    {
      title: "Portabilidad Multiplataforma",
      content:
        "La capacidad de Spotify para funcionar fluidamente across múltiples sistemas operativos (iOS, Android, Windows, macOS, Web) es una fortaleza clave validada por los tres modelos analizados.",
      icon: Globe
    },
    {
      title: "Validación Metodológica de Modelos",
      content:
        "Los tres modelos (McCall, Boehm, FURPS) proporcionaron perspectivas complementarias: McCall enfocó la operación, Boehm la estructura jerárquica y FURPS los atributos no funcionales de calidad de software.",
      icon: BarChart3
    },
  ]

  return (
    <div className="space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-3.5 h-3.5" />
          Síntesis Académica
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Conclusiones de la Evaluación
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          En este apartado se presentan las conclusiones derivadas de la aplicación de los modelos 
          <strong className="text-white font-semibold"> McCall</strong>, 
          <strong className="text-white font-semibold"> Boehm</strong> y 
          <strong className="text-white font-semibold"> FURPS</strong> sobre las plataformas 
          web y móvil de <strong className="text-spotify-green-light font-semibold">Spotify</strong>.
        </p>
      </div>

      {/* Resumen Ejecutivo */}
      <section className="card-interactive rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-spotify-green/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-2xl font-black mb-8 text-center text-white tracking-tight relative z-10">
          Resumen Ejecutivo de Puntuaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Modelo McCall</span>
            <p className="text-4xl font-black text-spotify-green-light font-mono my-2">89.5 / 100</p>
            <p className="text-xs text-gray-300">Promedio general ponderado</p>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Modelo Boehm</span>
            <p className="text-4xl font-black text-spotify-green-light font-mono my-2">89.0 / 100</p>
            <p className="text-xs text-gray-300">Promedio general ponderado</p>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Modelo FURPS</span>
            <p className="text-4xl font-black text-spotify-green-light font-mono my-2">88.0 / 100</p>
            <p className="text-xs text-gray-300">Promedio general ponderado</p>
          </div>
        </div>
      </section>

      {/* Comparación de Resultados */}
      <section className="card-interactive rounded-3xl p-6 md:p-10">
        <h2 className="text-2xl font-black text-white mb-6 text-center tracking-tight">
          Comparación de Resultados entre Modelos
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Puntaje Web</th>
                <th>Puntaje Móvil</th>
                <th>Promedio</th>
                <th>Diferencial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-white">McCall (1977)</td>
                <td className="text-center font-semibold text-gray-300">82 / 100</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">97 / 100</td>
                <td className="text-center font-black text-white font-mono">89.5 / 100</td>
                <td className="text-center font-bold text-spotify-green-light">+15 pts (Móvil)</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Boehm (1978)</td>
                <td className="text-center font-semibold text-gray-300">81 (26/32)</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">97 (31/32)</td>
                <td className="text-center font-black text-white font-mono">89 (57/64)</td>
                <td className="text-center font-bold text-spotify-green-light">+16 pts (Móvil)</td>
              </tr>
              <tr>
                <td className="font-bold text-white">FURPS (1992)</td>
                <td className="text-center font-semibold text-gray-300">78 (43/55)</td>
                <td className="text-center font-bold text-spotify-green-light font-mono">98 (54/55)</td>
                <td className="text-center font-black text-white font-mono">88 (97/110)</td>
                <td className="text-center font-bold text-spotify-green-light">+20 pts (Móvil)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusiones Detalladas con Stagger Delay */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-white tracking-tight">
            Conclusiones Detalladas
          </h2>
          <p className="text-gray-300 text-sm">
            Hallazgos clave organizados por dimensiones de ingeniería:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conclusions.map((conclusion, index) => {
            const IconComponent = conclusion.icon
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 60}ms` }}
                className="card-interactive rounded-3xl p-6 md:p-8 animate-fade-in-up flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {conclusion.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {conclusion.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="card-interactive rounded-3xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Propuestas Técnicas</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Recomendaciones para Futuras Mejoras
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 card-interactive">
            <span className="text-xs font-bold text-spotify-green-light font-mono">Recomendación 01</span>
            <h4 className="font-bold text-white text-sm">Facilidad de Prueba y Debugging</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Implementar APIs de telemetría más abiertas y suites de testing sintético que permitan a terceros medir latencias de audio sin depender exclusivamente de endpoints de streaming cerrados.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 card-interactive">
            <span className="text-xs font-bold text-spotify-green-light font-mono">Recomendación 02</span>
            <h4 className="font-bold text-white text-sm">Modularidad y Flexibilidad</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Desarrollar extensiones modulares que permitan configurar códecs de compresión personalizados en conexiones de ancho de banda restringido o redes satelitales.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 card-interactive">
            <span className="text-xs font-bold text-spotify-green-light font-mono">Recomendación 03</span>
            <h4 className="font-bold text-white text-sm">Paridad Funcional Web-Móvil</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Cerrar la brecha del 17% entre versiones incorporando en el Web Player soporte para descargas cifradas locales mediante File System Access API y IndexedDB.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5 card-interactive">
            <span className="text-xs font-bold text-spotify-green-light font-mono">Recomendación 04</span>
            <h4 className="font-bold text-white text-sm">Documentación y Soporte</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Ampliar la documentación técnica pública de requerimientos no funcionales (FURPS - Supportability) en el portal de desarrolladores para optimizar integraciones SDK.
            </p>
          </div>
        </div>
      </section>

      {/* Navegación a Referencias */}
      <div className="text-center pt-4">
        <Link to="/referencias" className="spotify-button inline-flex items-center gap-2 mx-auto shadow-md">
          <span>Ver Referencias Bibliográficas Completas</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
