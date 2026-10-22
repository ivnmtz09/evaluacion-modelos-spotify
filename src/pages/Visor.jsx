import { useParams, Link } from "react-router-dom"
import { ArrowLeft, FileText } from "lucide-react"

export default function Visor() {
  const { archivo } = useParams()

  return (
    <div className="space-y-6 animate-fade-in text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 card-interactive p-6 rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Visor de Documento
            </h1>
            <p className="text-xs text-gray-400 font-mono">
              Archivo: {decodeURIComponent(archivo || "")}
            </p>
          </div>
        </div>

        <Link to="/referencias" className="spotify-button-secondary text-xs font-bold inline-flex items-center gap-1.5">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Referencias</span>
        </Link>
      </div>

      {/* Contenedor responsivo */}
      <div className="w-full card-interactive p-3 md:p-4 rounded-3xl shadow-2xl">
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10" style={{ paddingTop: "65%" }}>
          <iframe
            src={`${import.meta.env.BASE_URL}referencias/${archivo}`}
            title={archivo}
            className="absolute top-0 left-0 w-full h-full rounded-2xl bg-white"
          />
        </div>
      </div>
    </div>
  )
}
