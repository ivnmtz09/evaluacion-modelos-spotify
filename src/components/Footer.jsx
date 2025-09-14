export default function Footer() {
  return (
    <footer className="bg-spotify-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-spotify-gray mb-2">
            © {new Date().getFullYear()} Universidad de La Guajira — Facultad de Ingenierías
          </p>
          <p className="text-sm text-spotify-gray">Programa de Ingeniería de Sistemas | Ingeniería de Software II</p>
          <p className="text-xs text-spotify-gray opacity-75">
            Evaluación de Modelos de Calidad de Software aplicados a Spotify
          </p>
          <p className="text-xs text-spotify-gray opacity-75">Docente: Jhon Jairo Suarez Bonilla</p>
        </div>
      </div>
    </footer>
  )
}
