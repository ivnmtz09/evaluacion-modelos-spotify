import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      name: "Juan Carlos",
      lastName: "Añez Ahumada",
      email: "janiez@uniguajira.edu.co",
      avatar: "JCA",
    },
    {
      name: "Jesus Manuel",
      lastName: "Arias Deluque", 
      email: "jmanuelarias@uniguajira.edu.co",
      avatar: "JA",
    },
    {
      name: "Ivan Jesus",
      lastName: "Martínez Molina",
      email: "ijesusmartinez@uniguajira.edu.co",
      avatar: "IM",
    },
    {
      name: "Sebastián David",
      lastName: "Ramos Jaraba",
      email: "sdramos@uniguajira.edu.co",
      avatar: "SR",
    },
    {
      name: "Stiven David",
      lastName: "Silva Toro",
      email: "sssilva@uniguajira.edu.co",
      avatar: "SS",
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
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">Nuestro Equipo</h1>
        <p className="text-lg text-spotify-gray-dark max-w-2xl mx-auto">
          Conoce al equipo de estudiantes de Ingeniería de Software II de la Universidad de La Guajira que desarrolló
          esta evaluación de modelos de calidad.
        </p>
      </div>

      {/* Team Carousel - Solo visible en desktop */}
      <div className="hidden md:block relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-spotify-green text-spotify-black hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-spotify-green text-spotify-black hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-spotify-green text-white rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold shadow-xl">
                    {member.avatar}
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-spotify-green mb-2">
                        {member.name}
                      </h3>
                      <h4 className="text-xl md:text-2xl font-semibold text-spotify-black mb-4">
                        {member.lastName}
                      </h4>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-3 text-spotify-gray-dark">
                      <Mail size={20} className="text-spotify-green" />
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-lg hover:text-spotify-green transition-colors duration-300"
                      >
                        {member.email}
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-spotify-green scale-125' 
                  : 'bg-gray-300 hover:bg-spotify-green-lighter'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Cards - Solo visible en móvil */}
      <div className="md:hidden space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 team-card"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-spotify-green text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                {member.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-spotify-black">
                  {member.name}
                </h3>
                <h4 className="text-lg font-semibold text-spotify-gray-dark mb-3">
                  {member.lastName}
                </h4>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-spotify-green" />
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-spotify-gray-dark hover:text-spotify-green transition-colors duration-300 text-sm md:text-base"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* University Info */}
      <section className="bg-spotify-black rounded-2xl p-8 text-white text-center shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Universidad de La Guajira</h3>
        <div className="space-y-3 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium">Facultad de Ingenierías - Programa de Ingeniería de Sistemas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold text-lg">Asignatura</p>
              <p className="text-base opacity-90">Ingeniería de Software II</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold text-lg">Docente</p>
              <p className="text-base opacity-90">Jhon Jairo Suarez Bonilla</p>
              <p className="text-base opacity-55">jjsuarez@uniguajira.edu.co</p>
            </div>
          </div>
          <p className="mt-6 text-sm opacity-80 italic">
            Proyecto académico desarrollado como parte de la evaluación de modelos de calidad de software aplicados a Spotify
          </p>
        </div>
      </section>
    </div>
  )
}