import { Link } from "react-router-dom"
import { FileText, BookOpen, Cpu, ExternalLink } from "lucide-react"

export default function Referencias() {
  const documentos = [
    {
      nombre: "Plantilla modelos",
      archivo: "Plantilla_modelos.pdf",
      desc: "Plantilla formal de evaluación y matrices de ponderación de calidad."
    },
    {
      nombre: "Plantilla modelo ejemplo",
      archivo: "Plantilla_modelo_ejemplo.pdf",
      desc: "Ejemplo guiado de aplicación de cuestionario con métricas normalizadas."
    },
    {
      nombre: "Modelos de calidad del software, un estado del arte",
      archivo: "Modelos_de_calidad_del_software_un_estado_del_arte.pdf",
      desc: "Estudio comparativo de los modelos ISO, McCall, Boehm, FURPS y Dromey."
    },
    {
      nombre: "LEM - Capítulo Completo",
      archivo: "LEM-Capitulo_Completo.pdf",
      desc: "Marco teórico sobre evaluación de software y métricas de completitud."
    },
  ]

  return (
    <div className="space-y-12 animate-fade-in text-white">
      {/* Encabezado con Jerarquía Tipográfica Clara */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Marco Teórico & Fuentes
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Referencias Bibliográficas
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Fuentes académicas, normativas internacionales y documentos primarios utilizados en el análisis y evaluación de{" "}
          <strong className="text-spotify-green-light font-semibold">Spotify</strong> con los modelos de calidad de software.
        </p>
      </div>

      {/* Fuentes externas */}
      <section className="card-interactive rounded-3xl p-6 md:p-10 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Literatura Primaria</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Normativas y Fuentes Consultadas
            </h2>
          </div>
        </div>

        <ul className="space-y-4 text-gray-300 text-sm md:text-base">
          <li className="p-4 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="font-bold text-white block mb-1">ISO/IEC 25010:2011</span>
            <span>Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models.</span>
          </li>
          <li className="p-4 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="font-bold text-white block mb-1">Boehm, B. W. (1978)</span>
            <span><em>Characteristics of Software Quality</em>. TRW Series of Software Technology, North-Holland Publishing Company.</span>
          </li>
          <li className="p-4 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="font-bold text-white block mb-1">McCall, J. A., Richards, P. K., & Walters, G. F. (1977)</span>
            <span><em>Factors in Software Quality</em>. Volumes I, II, and III. US Department of Commerce, National Technical Information Service.</span>
          </li>
          <li className="p-4 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="font-bold text-white block mb-1">Grady, R. B. (1992)</span>
            <span><em>Practical Software Metrics for Project Management and Process Improvement</em>. Hewlett-Packard Professional Books, Prentice Hall.</span>
          </li>
          <li className="p-4 rounded-2xl bg-black/40 border border-white/10 card-interactive">
            <span className="font-bold text-white block mb-1">Documentación Oficial de Spotify</span>
            <div className="flex items-center gap-2 mt-1">
              <span>Spotify Technology S.A. Arquitectura, SDKs y APIs:</span>
              <a
                href="https://developer.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spotify-green-light font-bold inline-flex items-center gap-1 hover:underline text-xs"
              >
                <span>developer.spotify.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </li>
        </ul>
      </section>

      {/* Herramientas IA */}
      <section className="card-interactive rounded-3xl p-6 md:p-10 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">Tecnología de Apoyo</span>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Herramientas de Inteligencia Artificial
            </h2>
          </div>
        </div>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Para el desarrollo de la investigación y estructuración gráfica se emplearon herramientas de IA generativa y maquetación asistida:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 card-interactive space-y-2">
            <span className="text-xs font-mono font-bold text-spotify-green-light">LLM & Redacción Técnica</span>
            <h4 className="font-bold text-white">OpenAI — ChatGPT</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Asistencia en el análisis comparativo, redacción de justificaciones académicas y verificación de consistencia métrica.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 card-interactive space-y-2">
            <span className="text-xs font-mono font-bold text-spotify-green-light">Frontend Prototyping</span>
            <h4 className="font-bold text-white">Vercel — V0</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ajuste inicial de patrones visuales y componentes accesibles en React y TailwindCSS.
            </p>
          </div>
        </div>
      </section>

      {/* Documentos PDF */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-white tracking-tight">
            Documentos y Guías PDF
          </h2>
          <p className="text-gray-400 text-sm">
            Visualiza los documentos de soporte directamente en el visor integrado:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentos.map((doc, idx) => (
            <div
              key={doc.archivo}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="card-interactive rounded-3xl p-6 md:p-8 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green group-hover:bg-spotify-green group-hover:text-black transition-all duration-200 ease-spring group-hover:scale-110">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-spotify-green-light">PDF Document</span>
                  <h3 className="font-bold text-lg text-white group-hover:text-spotify-green-light transition-colors mt-1">
                    {doc.nombre}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/visor/${encodeURIComponent(doc.archivo)}`}
                  className="spotify-button text-xs font-bold w-full text-center"
                >
                  Abrir en Visor
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
