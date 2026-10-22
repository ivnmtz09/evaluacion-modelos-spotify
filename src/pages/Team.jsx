import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mail, Users, GraduationCap } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      name: "Juan Carlos",
      lastName: "Añez Ahumada",
      email: "janiez@uniguajira.edu.co",
      avatar: "JCAA",
    },
    {
      name: "Jesus Manuel",
      lastName: "Arias Deluque", 
      email: "jmanuelarias@uniguajira.edu.co",
      avatar: "JMAD",
    },
    {
      name: "Ivan Jesus",
      lastName: "Martínez Molina",
      email: "ijesusmartinez@uniguajira.edu.co",
      avatar: "IJMM",
    },
    {
      name: "Sebastián David",
      lastName: "Ramos Jaraba",
      email: "sdramos@uniguajira.edu.co",
      avatar: "SDRJ",
    },
    {
      name: "Stiven David",
      lastName: "Silva Toro",
      email: "sssilva@uniguajira.edu.co",
      avatar: "SDST",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          Investigadores & Autores
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Nuestro Equipo
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Equipo de estudiantes de Ingeniería de Software II de la Universidad de La Guajira que desarrolló esta auditoría rigurosa de modelos de calidad.
        </p>
      </div>

      {/* Team Carousel - Desktop */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Miembro anterior"
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-[#1e2026] hover:bg-spotify-green text-white hover:text-black rounded-2xl p-3.5 shadow-xl border border-white/10 transition-all duration-200 ease-spring hover:scale-110"
        >
          <ChevronLeft size={22} />
        </button>
        
        <button
          onClick={nextSlide}
          aria-label="Siguiente miembro"
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-[#1e2026] hover:bg-spotify-green text-white hover:text-black rounded-2xl p-3.5 shadow-xl border border-white/10 transition-all duration-200 ease-spring hover:scale-110"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden rounded-3xl card-interactive shadow-2xl">
          <div 
            className="flex transition-transform duration-450 ease-spring"
            style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-8 md:p-14"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Avatar con microinteracción */}
                  <div className="w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-spotify-green to-emerald-600 text-white rounded-3xl flex items-center justify-center text-4xl font-black font-mono shadow-glow-green-sm overflow-hidden shrink-0 transform transition-transform duration-200 ease-spring hover:scale-105">
                    {member.avatar}
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex-1 text-center md:text-left space-y-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-spotify-green-light uppercase tracking-wider">
                        Investigador #0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1">
                        {member.name} {member.lastName}
                      </h3>
                      <p className="text-sm font-medium text-gray-300">
                        Programa de Ingeniería de Sistemas
                      </p>
                    </div>
                    
                    <div className="pt-2 flex items-center justify-center md:justify-start">
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-spotify-green/20 border border-white/10 text-sm font-semibold text-gray-200 hover:text-spotify-green-light transition-all duration-150"
                      >
                        <Mail size={16} className="text-spotify-green-light" />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al miembro ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-250 ease-spring ${
                index === currentIndex 
                  ? 'w-8 bg-spotify-green' 
                  : 'w-2.5 bg-gray-700 hover:bg-spotify-green/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card-interactive rounded-3xl p-5 flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-spotify-green to-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-black font-mono shadow-sm shrink-0">
              {member.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-white tracking-tight truncate">
                {member.name} {member.lastName}
              </h3>
              <p className="text-xs text-gray-400 truncate mb-1">
                Ingeniería de Sistemas
              </p>
              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-spotify-green-light hover:underline font-medium truncate"
              >
                <Mail size={12} />
                <span className="truncate">{member.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* University Info Card */}
      <section className="card-interactive rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green mx-auto">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Universidad de La Guajira
          </h3>
          <p className="text-base text-gray-300 font-medium">
            Facultad de Ingenierías • Programa de Ingeniería de Sistemas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 card-interactive">
              <span className="text-xs font-mono font-bold text-spotify-green-light uppercase tracking-wider">Asignatura</span>
              <p className="text-lg font-bold text-white mt-1">Ingeniería de Software II</p>
              <p className="text-xs text-gray-400 mt-1">Evaluación cuantitativa y cualitativa de software</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 card-interactive">
              <span className="text-xs font-mono font-bold text-spotify-green-light uppercase tracking-wider">Docente Titular</span>
              <p className="text-lg font-bold text-white mt-1">Jhon Jairo Suarez Bonilla</p>
              <p className="text-xs text-gray-400 mt-1">jjsuarez@uniguajira.edu.co</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
