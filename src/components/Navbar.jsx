import { Link, useLocation } from "react-router-dom"
import { Music, Menu, X, BookOpen } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: "/equipo", label: "Equipo" },
    { path: "/mccall", label: "McCall" },
    { path: "/boehm", label: "Boehm" },
    { path: "/furps", label: "FURPS" },
    { path: "/conclusiones", label: "Conclusiones" },
    { path: "/referencias", label: "Referencias" },
  ]

  return (
    <nav className="bg-spotify-black/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 font-bold text-xl text-spotify-green hover:text-spotify-green-light transition-all duration-200 ease-spring hover:scale-105 group"
          >
            <div className="p-2 rounded-xl bg-spotify-green/15 text-spotify-green group-hover:bg-spotify-green group-hover:text-spotify-black transition-colors duration-200">
              <Music className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="hidden sm:inline font-black tracking-tight text-white leading-none">
                Evaluación <span className="text-spotify-green">Modelos</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                Spotify Software Quality
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(({ path, label }) => {
              const active = isActive(path)
              return (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 ease-spring ${
                    active
                      ? "text-white bg-white/10 shadow-sm border border-spotify-green/40 shadow-glow-green-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu with 350ms panel transition */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-white/10 animate-fade-in-up">
            <div className="flex flex-col space-y-1.5 pt-3">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-semibold transition-all duration-200 py-2.5 px-4 rounded-xl ${
                    isActive(path)
                      ? "text-spotify-green-light bg-spotify-green/15 border border-spotify-green/30"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
