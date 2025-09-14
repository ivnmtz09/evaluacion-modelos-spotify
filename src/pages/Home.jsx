import { Link } from "react-router-dom"
import { BarChart3, TrendingUp, ClipboardList, FileText, Music, Target, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8 py-12">
        <h1 className="text-5xl md:text-7xl font-black text-spotify-black leading-tight">
          Evaluación de Modelos
          <span className="block text-spotify-green">de Calidad</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-spotify-green-darker">Aplicado a </h2>
        <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center mb-6">
          <img src="spotify-banner.jpg" alt="Spotify Banner" className="rounded-2xl shadow-lg w-full max-w-2xl h-auto" />
        </a >
        <p className="text-xl text-spotify-gray-dark max-w-5xl mx-auto leading-relaxed px-4">
          En este proyecto se aplicaron los modelos de calidad de software{" "}
          <strong className="text-spotify-green">McCall, Boehm y FURPS</strong>
          sobre la aplicación <strong className="text-spotify-black">Spotify</strong> (versiones Web y Móvil), con el
          objetivo de evaluar la
          <em className="text-spotify-green"> completitud de las funciones</em> y obtener métricas cuantitativas.
        </p>
      </div>

      <section className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mx-4 md:mx-0">
        <div className="flex items-center justify-center mb-8">
          <Award className="w-8 h-8 text-spotify-green mr-3" />
          <h3 className="text-3xl font-black text-spotify-black">Resultados Comparativos</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="spotify-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Spotify Web</th>
                <th>Spotify Móvil</th>
                <th>Promedio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-spotify-black">McCall</td>
                <td className="text-center font-semibold">8.21 / 10</td>
                <td className="text-center font-semibold">10 / 10</td>
                <td className="text-center font-black text-spotify-green text-lg">9.11 / 10</td>
              </tr>
              <tr>
                <td className="font-bold text-spotify-black">Boehm</td>
                <td className="text-center font-semibold">7.5 / 10</td>
                <td className="text-center font-semibold">9.38 / 10</td>
                <td className="text-center font-black text-spotify-green text-lg">8.44 / 10</td>
              </tr>
              <tr>
                <td className="font-bold text-spotify-black">FURPS</td>
                <td className="text-center font-semibold">9.17 / 10</td>
                <td className="text-center font-semibold">10 / 10</td>
                <td className="text-center font-black text-spotify-green text-lg">9.59 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-center px-4">
        <div className="flex items-center justify-center mb-10">
          <Target className="w-8 h-8 text-spotify-green mr-3" />
          <h3 className="text-3xl font-black text-spotify-black">Explorar Modelos de Evaluación</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/mccall" className="spotify-button flex items-center justify-center space-x-3 group">
            <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Ver McCall</span>
          </Link>
          <Link to="/boehm" className="spotify-button flex items-center justify-center space-x-3 group">
            <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Ver Boehm</span>
          </Link>
          <Link to="/furps" className="spotify-button flex items-center justify-center space-x-3 group">
            <ClipboardList className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Ver FURPS</span>
          </Link>
          <Link
            to="/conclusiones"
            className="spotify-button-secondary flex items-center justify-center space-x-3 group"
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Conclusiones</span>
          </Link>
        </div>
      </section>

      <section className="bg-spotify-black text-white rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-2xl">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-10 h-10 text-spotify-green mr-4" />
            <h3 className="text-3xl font-black text-spotify-green">¿Por qué evaluar Spotify?</h3>
          </div>
          <p className="text-spotify-white leading-relaxed max-w-4xl mx-auto text-lg">
            Spotify es una de las plataformas de streaming musical más populares del mundo, con millones de usuarios
            activos. Evaluar su calidad de software nos permite entender cómo los diferentes modelos de calidad pueden
            aplicarse a sistemas complejos y de gran escala.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-spotify-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-spotify-green" />
              </div>
              <h4 className="font-bold text-lg mb-2">Millones de Usuarios</h4>
              <p className="text-spotify-green text-sm">Plataforma global con alta demanda</p>
            </div>
            <div className="text-center">
              <div className="bg-spotify-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-spotify-green" />
              </div>
              <h4 className="font-bold text-lg mb-2">Sistema Complejo</h4>
              <p className="text-spotify-green text-sm">Arquitectura robusta y escalable</p>
            </div>
            <div className="text-center">
              <div className="bg-spotify-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-spotify-green" />
              </div>
              <h4 className="font-bold text-lg mb-2">Calidad Premium</h4>
              <p className="text-spotify-green text-sm">Estándares de excelencia en software</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
