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
  Heart 
} from 'lucide-react'

export default function Conclusions() {
  const conclusions = [
    {
      title: "Superioridad de la Versión Móvil",
      content:
        "En todos los modelos evaluados (McCall, Boehm y FURPS), la versión móvil de Spotify demostró un rendimiento superior, obteniendo puntuaciones perfectas o cercanas a la perfección.",
      icon: CheckCircle
    },
    {
      title: "Consistencia en Funcionalidad",
      content:
        "Tanto la versión web como móvil mantienen una alta calidad en funcionalidad básica, cumpliendo eficientemente con los requisitos de reproducción musical y gestión de contenido.",
      icon: Users
    },
    {
      title: "Usabilidad Excepcional",
      content:
        "Spotify destaca significativamente en usabilidad, con interfaces intuitivas y experiencias de usuario optimizadas que facilitan la navegación y el descubrimiento de música.",
      icon: Star
    },
    {
      title: "Oportunidades de Mejora en Mantenibilidad",
      content:
        "El modelo McCall reveló que las áreas de revisión y mantenimiento presentan las puntuaciones más bajas, sugiriendo oportunidades de mejora en flexibilidad y facilidad de prueba.",
      icon: AlertTriangle
    },
    {
      title: "Rendimiento Optimizado",
      content:
        "Ambas plataformas demuestran un rendimiento sólido con tiempos de respuesta rápidos y uso eficiente de recursos, especialmente notable en la versión móvil.",
      icon: Zap
    },
    {
      title: "Fiabilidad y Disponibilidad",
      content:
        "Spotify mantiene altos estándares de fiabilidad con excelente disponibilidad del servicio y manejo adecuado de errores, contribuyendo a la confianza del usuario.",
      icon: Shield
    },
    {
      title: "Portabilidad Multiplataforma",
      content:
        "La capacidad de Spotify para funcionar consistentemente across múltiples sistemas operativos y dispositivos es una fortaleza clave identificada en todos los modelos.",
      icon: Globe
    },
    {
      title: "Validación de Modelos de Calidad",
      content:
        "Los tres modelos (McCall, Boehm, FURPS) proporcionaron perspectivas complementarias, validando la efectividad de usar múltiples frameworks para evaluación integral de calidad.",
      icon: BarChart3
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Conclusiones de la Evaluación</h1>
        <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
          Análisis integral de los resultados obtenidos mediante la aplicación de los modelos McCall, Boehm y FURPS
          sobre las plataformas web y móvil de Spotify.
        </p>
      </div>

      {/* Resumen Ejecutivo */}
      <section className="bg-spotify-green text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Resumen Ejecutivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">McCall</h3>
            <p className="text-3xl font-bold">8.95/10</p>
            <p className="text-sm opacity-90">Promedio general</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Boehm</h3>
            <p className="text-3xl font-bold">8.44/10</p>
            <p className="text-sm opacity-90">Promedio general</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">FURPS</h3>
            <p className="text-3xl font-bold">9.59/10</p>
            <p className="text-sm opacity-90">Promedio general</p>
          </div>
        </div>
      </section>

      {/* Comparación de Resultados */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-spotify-black mb-6 text-center">
          Comparación de Resultados entre Modelos
        </h2>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Puntaje Web</th>
                <th>Puntaje Móvil</th>
                <th>Promedio</th>
              </tr>
            </thead>
<tbody>
              <tr>
                <td className="font-semibold">McCall</td>
                <td className="text-center font-bold text-spotify-green">82/100</td>
                <td className="text-center font-bold text-spotify-green">97/100</td>
                <td className="text-center font-bold text-spotify-green">89.5/100</td>
              </tr>
              <tr>
                <td className="font-semibold">Boehm</td>
                <td className="text-center font-bold text-spotify-green">81 (26/32)</td>
                <td className="text-center font-bold text-spotify-green">97 (31/32)</td>
                <td className="text-center font-bold text-spotify-green">89 (57/64)</td>
              </tr>
              <tr>
                <td className="font-semibold">FURPS</td>
                <td className="text-center font-bold text-spotify-green">78 (43/55)</td>
                <td className="text-center font-bold text-spotify-green">98 (54/55)</td>
                <td className="text-center font-bold text-spotify-green">88 (97/110)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusiones Detalladas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-spotify-black text-center mb-8">Conclusiones Detalladas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conclusions.map((conclusion, index) => {
            const IconComponent = conclusion.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center text-white">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-spotify-black mb-3">{conclusion.title}</h3>
                    <p className="text-spotify-gray-dark leading-relaxed">{conclusion.content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Lightbulb className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">
            Recomendaciones para Futuras Mejoras
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-spotify-green font-bold text-lg">1.</span>
            <p className="text-spotify-gray-dark">
              <strong>Mejorar la facilidad de prueba:</strong> Implementar herramientas de testing más accesibles y
              documentación técnica más detallada para desarrolladores.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-spotify-green font-bold text-lg">2.</span>
            <p className="text-spotify-gray-dark">
              <strong>Optimizar la flexibilidad del sistema:</strong> Desarrollar APIs más modulares que permitan mayor
              personalización y adaptabilidad.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-spotify-green font-bold text-lg">3.</span>
            <p className="text-spotify-gray-dark">
              <strong>Fortalecer la versión web:</strong> Implementar características de la versión móvil en la
              plataforma web para alcanzar paridad funcional.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-spotify-green font-bold text-lg">4.</span>
            <p className="text-spotify-gray-dark">
              <strong>Documentación de soporte:</strong> Ampliar la documentación de usuario y desarrollador para
              mejorar la puntuación en el factor de soporte.
            </p>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="bg-spotify-black text-white rounded-lg p-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BookOpen className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-green">Metodología de Evaluación</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-spotify-green mb-3">McCall</h3>
            <p className="text-spotify-white text-sm">
              Evaluación basada en 11 factores de calidad organizados en tres capacidades: Operación, Transición y
              Revisión.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-spotify-green mb-3">Boehm</h3>
            <p className="text-spotify-white text-sm">
              Análisis jerárquico de características de alto nivel, intermedio y primitivas para evaluar utilidad,
              mantenibilidad y usabilidad.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-spotify-green mb-3">FURPS</h3>
            <p className="text-spotify-white text-sm">
              Evaluación integral de Funcionalidad, Usabilidad, Fiabilidad, Rendimiento y Soporte con pesos específicos.
            </p>
          </div>
        </div>
      </section>

      {/* Agradecimientos */}
      <section className="text-center bg-spotify-gray-light rounded-lg p-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Agradecimientos</h2>
        </div>
        <p className="text-spotify-gray-dark leading-relaxed max-w-3xl mx-auto">
          Agradecemos a la Universidad de La Guajira y al programa de Ingeniería de Sistemas por proporcionar el marco
          académico para realizar esta evaluación integral. Este proyecto ha permitido aplicar conocimientos teóricos de
          calidad de software en un caso de estudio real y relevante.
        </p>
      </section>
    </div>
  )
}