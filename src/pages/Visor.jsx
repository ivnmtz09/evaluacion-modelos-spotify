import { useParams, Link } from "react-router-dom"

export default function Visor() {
  const { archivo } = useParams()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-spotify-green">Visor de Documento</h1>
        <Link to="/referencias" className="spotify-button-secondary">
          Volver a Referencias
        </Link>
      </div>

      {/* Contenedor responsivo */}
      <div className="w-full">
        <div className="relative w-full h-720" style={{ paddingTop: "65%" }}>
          <iframe
            src={`${import.meta.env.BASE_URL}referencias/${archivo}`}
            title={archivo}
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-gray-200"
          ></iframe>
        </div>
      </div>

      <p className="text-sm text-center text-spotify-gray-dark">
        Documento cargado: <span className="font-semibold">{decodeURIComponent(archivo)}</span>
      </p>
    </div>
  )
}
