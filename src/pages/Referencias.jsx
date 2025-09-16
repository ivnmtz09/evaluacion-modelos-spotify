import { Link } from "react-router-dom"
import { FileText, BookOpen, Cpu } from "lucide-react"

export default function Referencias() {
  const documentos = [
    {
      nombre: "Plantilla modelos",
      archivo: "Plantilla_modelos.pdf",
    },
    {
      nombre: "Plantilla modelo ejemplo",
      archivo: "Plantilla_modelo_ejemplo.pdf",
    },
    {
      nombre: "Modelos de calidad del software, un estado del arte",
      archivo: "Modelos_de_calidad_del_software_un_estado_del_arte.pdf",
    },
    {
      nombre: "LEM - Capítulo Completo",
      archivo: "LEM-Capitulo_Completo.pdf",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Encabezado */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-spotify-green drop-shadow-md">
          Referencias Bibliográficas
        </h1>
        <p className="text-lg text-spotify-gray-dark max-w-3xl mx-auto">
          Fuentes, documentos y herramientas digitales utilizadas en el análisis y evaluación de{" "}
          <span className="font-semibold text-spotify-green">Spotify</span> con los modelos de calidad de software.
        </p>
      </div>

      {/* Fuentes externas */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-spotify-green">
          <BookOpen className="w-8 h-8 text-spotify-green" /> Fuentes Externas Consultadas
        </h2>
        <ul className="list-disc list-inside space-y-2 text-spotify-gray-dark text-lg leading-relaxed">
          <li>
            ISO/IEC 25010:2011 – Systems and software Quality Requirements and Evaluation (SQuaRE).
          </li>
          <li>
            Boehm, B. W. (1978). <em>Characteristics of Software Quality</em>. TRW.
          </li>
          <li>
            McCall, J. A., Richards, P. K., & Walters, G. F. (1977). <em>Factors in Software Quality</em>.
          </li>
          <li>
            Grady, R. B. (1992). <em>Practical Software Metrics for Project Management and Process Improvement</em>.
          </li>
          <li>
            Documentación oficial de{" "}
            <a
              href="https://developer.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spotify-green hover:underline"
            >
              Spotify for Developers
            </a>
          </li>
        </ul>
      </div>

      {/* Herramientas IA */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-spotify-green">
          <Cpu className="w-8 h-8 text-spotify-green" /> Herramientas de Inteligencia Artificial
        </h2>
        <p className="text-lg text-spotify-gray-dark max-w-3xl leading-relaxed">
          Para el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial:{" "}
          <span className="font-semibold text-spotify-green">ChatGPT (OpenAI)</span>, que apoyó en la generación y
          redacción de contenido técnico, y{" "}
          <span className="font-semibold text-spotify-green">V0 de Vercel</span>, empleado en la creación y ajuste de
          interfaces gráficas con React y TailwindCSS.
        </p>
        <ul className="list-disc list-inside space-y-2 text-spotify-gray-dark text-lg">
          <li>
            OpenAI. (2025). <em>ChatGPT (GPT-5)</em> [Modelo de lenguaje grande].{" "}
            <a
              href="https://chat.openai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spotify-green hover:underline"
            >
              https://chat.openai.com
            </a>
          </li>
          <li>
            Vercel. (2025). <em>V0 – AI-powered UI generation tool</em>.{" "}
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spotify-green hover:underline"
            >
              https://v0.dev
            </a>
          </li>
        </ul>
      </div>

      {/* Documentos */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-spotify-green text-center">Documentos Referenciados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {documentos.map((doc) => (
            <div
              key={doc.archivo}
              className="bg-spotify-black text-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transform transition-all duration-300"
            >
              <FileText className="w-12 h-12 text-spotify-green" />
              <h2 className="font-bold text-lg text-center">{doc.nombre}</h2>
              <Link
                to={`/visor/${encodeURIComponent(doc.archivo)}`}
                className="spotify-button"
              >
                Ver Documento
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
    