"use client"

import { Link, useLocation } from "react-router-dom"
import { Music, Menu, X } from "lucide-react"
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
  ]

  return (
    <nav className="bg-spotify-black shadow-2xl sticky top-0 z-50 border-b border-spotify-green/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 font-bold text-xl text-spotify-green hover:text-spotify-green-dark transition-all duration-300 hover:scale-105"
          >
            <Music className="w-8 h-8" />
            <span className="hidden sm:inline">Evaluación Modelos</span>
            <span className="sm:hidden">Evaluación</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(path)
                    ? "text-spotify-green border-b-2 border-spotify-green pb-1"
                    : "text-white hover:text-spotify-green"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-spotify-green transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-spotify-green/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-all duration-300 py-2 px-4 rounded-lg ${
                    isActive(path)
                      ? "text-spotify-green bg-spotify-green/10"
                      : "text-white hover:text-spotify-green hover:bg-spotify-green/5"
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
