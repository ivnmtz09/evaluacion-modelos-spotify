import { Layers, TrendingUp } from 'lucide-react'

export default function FurpsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Modelo FURPS</h1>
        <p className="text-lg text-spotify-gray-dark max-w-4xl mx-auto leading-relaxed">
          El modelo FURPS evalúa la calidad del software a través de cinco factores principales: 
          <strong> Funcionalidad</strong>, <strong>Usabilidad</strong>, <strong>Fiabilidad</strong>, 
          <strong> Rendimiento</strong> y <strong>Soportabilidad</strong>, proporcionando una 
          evaluación integral de la calidad del producto.
        </p>
      </div>

      {/* Evaluación por características */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Evaluación por Características</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Factor Evaluado</th>
                <th>Esperado</th>
                <th>Web</th>
                <th>Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">Funcionalidad</td>
                <td className="font-medium">Cobertura de funciones</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Seguridad / Integridad</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Interoperabilidad</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td rowSpan="2" className="font-semibold bg-spotify-gray-light">Usabilidad</td>
                <td className="font-medium">Facilidad de uso</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Documentación / Ayuda</td>
                <td className="text-center font-semibold">3</td>
                <td className="text-center font-semibold text-spotify-green">2</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">Fiabilidad</td>
                <td className="font-medium">Tolerancia a fallos</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Recuperación de errores</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Consistencia</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">Rendimiento</td>
                <td className="font-medium">Tiempo de respuesta</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Consumo de recursos</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
              </tr>
              <tr>
                <td className="font-medium">Estabilidad</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td rowSpan="3" className="font-semibold bg-spotify-gray-light">Soportabilidad</td>
                <td className="font-medium">Facilidad de instalación</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Portabilidad</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
              <tr>
                <td className="font-medium">Facilidad de mantenimiento</td>
                <td className="text-center font-semibold">4</td>
                <td className="text-center font-semibold text-spotify-green">3</td>
                <td className="text-center font-semibold text-spotify-green">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados de la valoración */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-spotify-green" size={28} />
          <h2 className="text-2xl font-bold text-spotify-black">Resultados de la Valoración</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Puntaje Máximo</th>
                <th>Web</th>
                <th>Móvil</th>
                <th>% Web</th>
                <th>% Móvil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Funcionalidad</td>
                <td className="text-center">12</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">12</td>
                <td className="text-center font-bold text-spotify-green">75</td>
                <td className="text-center font-bold text-spotify-green">100</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Usabilidad</td>
                <td className="text-center">7</td>
                <td className="text-center font-semibold text-spotify-green">5</td>
                <td className="text-center font-semibold text-spotify-green">7</td>
                <td className="text-center font-bold text-spotify-green">71</td>
                <td className="text-center font-bold text-spotify-green">100</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Fiabilidad</td>
                <td className="text-center">12</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
                <td className="text-center font-semibold text-spotify-green">12</td>
                <td className="text-center font-bold text-spotify-green">83</td>
                <td className="text-center font-bold text-spotify-green">100</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Rendimiento</td>
                <td className="text-center">12</td>
                <td className="text-center font-semibold text-spotify-green">10</td>
                <td className="text-center font-semibold text-spotify-green">11</td>
                <td className="text-center font-bold text-spotify-green">83</td>
                <td className="text-center font-bold text-spotify-green">92</td>
              </tr>
              <tr>
                <td className="font-semibold bg-spotify-gray-light">Soportabilidad</td>
                <td className="text-center">12</td>
                <td className="text-center font-semibold text-spotify-green">9</td>
                <td className="text-center font-semibold text-spotify-green">12</td>
                <td className="text-center font-bold text-spotify-green">75</td>
                <td className="text-center font-bold text-spotify-green">100</td>
              </tr>
            </tbody>
            <tfoot className="bg-spotify-green text-white font-bold">
              <tr>
                <td className="text-right text-lg">Total FURPS</td>
                <td className="text-center">55</td>
                <td className="text-center text-xl">43</td>
                <td className="text-center text-xl">54</td>
                <td className="text-center text-2xl">78</td>
                <td className="text-center text-2xl">98</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-spotify-black text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-spotify-green mb-4">Resultado Final FURPS</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-spotify-gray-dark rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Spotify Web</h4>
            <p className="text-3xl font-bold text-spotify-green">78</p>
            <p className="text-lg text-spotify-green">43/55 puntos</p>
            <p className="text-spotify-gray mt-2">Buen desempeño con áreas de mejora</p>
          </div>
          <div className="bg-spotify-gray-dark rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Spotify Móvil</h4>
            <p className="text-3xl font-bold text-spotify-green">98</p>
            <p className="text-lg text-spotify-green">54/55 puntos</p>
            <p className="text-spotify-gray mt-2">Excelencia casi perfecta en todos los factores</p>
          </div>
        </div>
        <p className="text-spotify-gray mt-6">
          Ambas versiones destacan especialmente en funcionalidad y fiabilidad, 
          mientras que la versión web requiere mejoras principalmente en usabilidad y documentación.
        </p>
      </section>
    </div>
  )
}