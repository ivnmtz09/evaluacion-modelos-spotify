import { Music, ExternalLink, Heart } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-spotify-black text-white pt-12 pb-8 mt-16 border-t border-white/10">
      <div className="container mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-spotify-green">
              <Music className="w-6 h-6" />
              <span className="font-bold text-lg text-white">Evaluación de Modelos de Calidad</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Proyecto académico integral de auditoría de calidad de software aplicado a Spotify (Web & Móvil) conforme a los modelos McCall, Boehm y FURPS.
            </p>
            <p className="text-xs text-gray-500">
              Universidad de La Guajira — Facultad de Ingenierías • Programa de Ingeniería de Sistemas
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-spotify-green">
              Modelos de Calidad
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>
                <Link to="/mccall" className="hover:text-spotify-green transition-colors">
                  Modelo McCall (1977)
                </Link>
              </li>
              <li>
                <Link to="/boehm" className="hover:text-spotify-green transition-colors">
                  Modelo Boehm (1978)
                </Link>
              </li>
              <li>
                <Link to="/furps" className="hover:text-spotify-green transition-colors">
                  Modelo FURPS (1992)
                </Link>
              </li>
              <li>
                <Link to="/conclusiones" className="hover:text-spotify-green transition-colors">
                  Conclusiones & Veredicto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-spotify-green">
              Academia & Recursos
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>
                <Link to="/equipo" className="hover:text-spotify-green transition-colors">
                  Equipo Desarrollador
                </Link>
              </li>
              <li>
                <Link to="/referencias" className="hover:text-spotify-green transition-colors">
                  Referencias Bibliográficas
                </Link>
              </li>
              <li>
                <a 
                  href="https://developer.spotify.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-spotify-green transition-colors inline-flex items-center gap-1"
                >
                  <span>Spotify Developer Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="text-[11px] text-gray-500 pt-1">
                Docente: Jhon Jairo Suarez Bonilla
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Universidad de La Guajira — Ingeniería de Software II</p>
          <p className="flex items-center gap-1">
            Diseñado con precisión ergonómica y Motion System acelerado por GPU
          </p>
        </div>
      </div>
    </footer>
  )
}
