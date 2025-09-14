export default function Team() {
  const teamMembers = [
    {
      name: "Juan Carlos Añez Ahumada",
      avatar: "JC",
    },
    {
      name: "Jesus Manuel Arias Deluque",
      avatar: "JM",
    },
    {
      name: "Ivan Jesus Martínez Molina",
      avatar: "IJ",
    },
    {
      name: "Sebastián David Ramos Jaraba",
      avatar: "SD",
    },
    {
      name: "Stiven David Silva Toro",
      avatar: "ST",
    },
  ]

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

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 bg-spotify-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {member.avatar}
            </div>
            <h3 className="text-xl font-bold text-spotify-black mb-2">{member.name}</h3>
            <p className="text-spotify-green font-semibold mb-3">{member.role}</p>
            <p className="text-spotify-gray-dark text-sm leading-relaxed">{member.description}</p>
          </div>
        ))}
      </div>

      {/* University Info */}
      <section className="bg-spotify-green rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Universidad de La Guajira</h3>
        <div className="space-y-2 max-w-3xl mx-auto">
          <p className="text-lg opacity-90">Facultad de Ingenierías - Programa de Ingeniería de Sistemas</p>
          <p className="text-base opacity-80">
            <strong>Asignatura:</strong> Ingeniería de Software II
          </p>
          <p className="text-base opacity-80">
            <strong>Docente:</strong> Jhon Jairo Suarez Bonilla
          </p>
          <p className="mt-4 opacity-75 text-sm">
            Proyecto académico desarrollado como parte de la evaluación de modelos de calidad de software aplicados a
            Spotify
          </p>
        </div>
      </section>
    </div>
  )
}
