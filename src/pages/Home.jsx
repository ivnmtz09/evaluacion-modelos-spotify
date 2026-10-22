import { useState, useId } from "react"
import { Link } from "react-router-dom"
import { 
  BarChart3, 
  TrendingUp, 
  ClipboardList, 
  FileText, 
  Music, 
  Target, 
  Users, 
  Award, 
  ExternalLink, 
  Scale, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  RefreshCw,
  Info
} from "lucide-react"
import HomeHeroPipeline from "../components/HomeHeroPipeline"
import InteractiveDeviceShowcase from "../components/InteractiveDeviceShowcase"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all") // 'all', 'web', 'mobile'
  const [isLoadingAudit, setIsLoadingAudit] = useState(false)

  const handleRefreshSimulation = () => {
    setIsLoadingAudit(true)
    setTimeout(() => {
      setIsLoadingAudit(false)
    }, 450)
  }

  return (
    <div className="space-y-16 animate-fade-in text-white">
      
      {/* 
        ========================================================================
        PILAR 4 & HERO: HomeHeroPipeline con Parallax y Pipeline de Calidad
        ========================================================================
      */}
      <HomeHeroPipeline />

      {/* 
        ========================================================================
        LABORATORIO INTERACTIVO: SMARTPHONE 3D CON INCLINACIÓN POR CURSOR
        Simulador de audio, tabs interactivas de modelos y comparador de plataformas
        ========================================================================
      */}
      <InteractiveDeviceShowcase />

      {/* 
        ========================================================================
        PRESENTACIÓN DE SPOTIFY: BANNER Y OBJETIVOS CON ALTO CONTRASTE
        ========================================================================
      */}
      <section 
        aria-label="Presentación de Spotify"
        className="card-interactive rounded-3xl p-6 md:p-10 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img 
                src="spotify-banner.jpg" 
                alt="Spotify Interface Banner" 
                className="w-full h-auto object-cover transform transition-transform duration-350 ease-spring group-hover:scale-105" 
              />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Objeto de Estudio Multidisciplinar
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
              Auditoría de Calidad sobre el Gigante del Audio Digital
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
              En este proyecto de investigación se aplicaron formalmente los modelos de calidad de software{" "}
              <strong className="text-white font-semibold">McCall (1977)</strong>,{" "}
              <strong className="text-white font-semibold">Boehm (1978)</strong> y{" "}
              <strong className="text-white font-semibold">FURPS (1992)</strong> sobre la plataforma{" "}
              <span className="text-spotify-green-light font-bold">Spotify</span> (versiones Web y Móvil), 
              con el propósito de evaluar la completitud de las funciones, tolerancia a fallos, eficiencia y portabilidad.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a 
                href="https://open.spotify.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="spotify-button text-xs font-bold shadow-md"
              >
                <span>Acceder a Spotify Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.spotify.com/download/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="spotify-button-secondary text-xs font-bold"
              >
                <span>Descargar Apps Móviles</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FICHA TÉCNICA DEL SOFTWARE A EVALUAR (DARK SPOTIFY TABLE)
        ========================================================================
      */}
      <section 
        aria-label="Ficha Técnica del Software a Evaluar"
        className="card-interactive rounded-3xl p-6 md:p-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light shadow-sm">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">
                Ficha Técnica
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Software a Evaluar
              </h3>
            </div>
          </div>
          <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono font-medium">
            Rúbrica: Ingeniería de Software II
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="spotify-table">
            <thead>
              <tr>
                <th className="w-1/3">Aspecto Institucional</th>
                <th className="w-2/3">Información y Especificación Técnica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-white">Nombre del Software</td>
                <td className="font-medium text-gray-300">Spotify - Servicio de Streaming Musical y Podcasts</td>
              </tr>
              <tr>
                <td className="font-bold text-white">Repositorio & Ecosistema</td>
                <td>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 font-medium">Plataforma propietaria de Spotify Technology S.A.</span>
                    <a 
                      href="https://developer.spotify.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-spotify-green-light hover:underline font-semibold text-xs ml-1"
                    >
                      <span>Portal Dev</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-bold text-white">Descripción Funcional</td>
                <td className="text-gray-300 leading-relaxed">
                  Servicio de streaming digital que otorga acceso en tiempo real a más de 100 millones de pistas de audio, pódcasts y contenido multimedia. Cuenta con modelo Freemium con inserción publicitaria y nivel Premium con audio lossless y modo offline.
                </td>
              </tr>
              <tr>
                <td className="font-bold text-white">Licencia de Uso</td>
                <td className="text-gray-300">
                  Licencia propietaria de usuario final (EULA) — Términos y condiciones para reproducción individual sin fines de retransmisión comercial.
                </td>
              </tr>
              <tr>
                <td className="font-bold text-white">Área de Aplicación</td>
                <td>
                  <span className="inline-block bg-spotify-green/15 text-spotify-green-light text-xs font-semibold px-3 py-1 rounded-full border border-spotify-green/30">
                    Entretenimiento Digital • Streaming de Audio & Multimedia Concurrente
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-bold text-white">Puntos de Acceso Auditados</td>
                <td>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://open.spotify.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 hover:bg-spotify-green/20 hover:text-spotify-green-light px-3 py-1.5 rounded-lg transition-all duration-150 border border-white/10"
                    >
                      <Monitor className="w-3.5 h-3.5 text-spotify-green-light" />
                      <span>Web Player: open.spotify.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://www.spotify.com/download/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 hover:bg-spotify-green/20 hover:text-spotify-green-light px-3 py-1.5 rounded-lg transition-all duration-150 border border-white/10"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-spotify-green-light" />
                      <span>Apps Móviles: spotify.com/download</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 
        ========================================================================
        ESCALA DE VALORACIONES ESTANDARIZADA
        ========================================================================
      */}
      <section 
        aria-label="Escala de Valoraciones y Rúbrica"
        className="card-interactive rounded-3xl p-6 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-spotify-green-light bg-spotify-green/10 border border-spotify-green/30 px-3.5 py-1 rounded-full">
              <Scale className="w-3.5 h-3.5" />
              Rúbrica de Cuantificación
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Escala de Valoraciones Estandarizada
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Para unificar el criterio de los tres modelos (McCall, Boehm y FURPS), se aplicó una escala Likert discreta de 4 niveles que luego se normaliza a escala centesimal (0 - 100):
            </p>
          </div>

          {/* Grid de 4 tarjetas con delay escalonado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            {/* Nivel 4 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-spotify-green/40 hover:border-spotify-green hover:bg-white/[0.04] transition-all duration-200 ease-spring group card-interactive">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-spotify-green/20 text-spotify-green-light">
                  Nivel 4
                </span>
                <span className="text-3xl font-black text-spotify-green-light font-mono">4.0</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-spotify-green-light transition-colors">
                EXCELENTE
              </h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Cumple a cabalidad con el criterio evaluado sin fricción ni fallos perceptibles. Rendimiento óptimo continuo.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-spotify-green-light">
                <span>Rango: 90 - 100%</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Nivel 3 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-white/[0.04] transition-all duration-200 ease-spring group card-interactive">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  Nivel 3
                </span>
                <span className="text-3xl font-black text-emerald-400 font-mono">3.0</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                BUENO
              </h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Satisface el requerimiento con estabilidad adecuada, presentando variaciones mínimas no críticas.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Rango: 75 - 89%</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Nivel 2 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-amber-500/30 hover:border-amber-400 hover:bg-white/[0.04] transition-all duration-200 ease-spring group card-interactive">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">
                  Nivel 2
                </span>
                <span className="text-3xl font-black text-amber-400 font-mono">2.0</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                REGULAR
              </h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                El criterio se cumple de manera parcial o dependiente de configuraciones específicas del navegador o red.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>Rango: 50 - 74%</span>
                <Info className="w-4 h-4" />
              </div>
            </div>

            {/* Nivel 1 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-red-500/30 hover:border-red-400 hover:bg-white/[0.04] transition-all duration-200 ease-spring group card-interactive">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400">
                  Nivel 1
                </span>
                <span className="text-3xl font-black text-red-400 font-mono">1.0</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                MALO
              </h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                No satisface el estándar o evidencia anomalías que impiden la operabilidad esperada por el usuario.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-red-400">
                <span>Rango: 0 - 49%</span>
                <Info className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        RESULTADOS COMPARATIVOS DE MODELOS
        ========================================================================
      */}
      <section 
        aria-label="Resultados Comparativos de la Evaluación"
        className="card-interactive rounded-3xl p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-spotify-green/15 border border-spotify-green/30 flex items-center justify-center text-spotify-green-light shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-spotify-green-light">
                Síntesis Cuantitativa
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Resultados Comparativos de Modelos
              </h3>
            </div>
          </div>

          {/* Controles interactivos de simulación */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefreshSimulation}
              disabled={isLoadingAudit}
              title="Simular recálculo y transición de estados"
              className="p-2 rounded-xl text-gray-300 hover:text-spotify-green-light hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              <RefreshCw className={`w-4 h-4 ${isLoadingAudit ? "animate-spin text-spotify-green-light" : ""}`} />
            </button>

            <div 
              role="tablist" 
              aria-label="Filtro de plataformas"
              className="inline-flex bg-black/40 p-1 rounded-xl text-xs font-semibold border border-white/10"
            >
              <button
                role="tab"
                aria-selected={activeTab === "all"}
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeTab === "all" ? "bg-spotify-green text-black font-bold shadow-sm" : "text-gray-400 hover:text-white"
                }`}
              >
                Global
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "web"}
                onClick={() => setActiveTab("web")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeTab === "web" ? "bg-spotify-green text-black font-bold shadow-sm" : "text-gray-400 hover:text-white"
                }`}
              >
                Web
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "mobile"}
                onClick={() => setActiveTab("mobile")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeTab === "mobile" ? "bg-spotify-green text-black font-bold shadow-sm" : "text-gray-400 hover:text-white"
                }`}
              >
                Móvil
              </button>
            </div>
          </div>
        </div>

        {/* Estado de Carga Shimmer */}
        {isLoadingAudit ? (
          <div className="space-y-4 py-6" aria-busy="true" aria-live="polite">
            <div className="h-12 bg-white/5 rounded-xl skeleton-shimmer w-full" />
            <div className="h-16 bg-white/[0.03] rounded-xl skeleton-shimmer w-full" />
            <div className="h-16 bg-white/5 rounded-xl skeleton-shimmer w-full" />
            <div className="h-16 bg-white/[0.03] rounded-xl skeleton-shimmer w-full" />
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="spotify-table">
                <thead>
                  <tr>
                    <th>Modelo de Calidad</th>
                    <th>Spotify Web</th>
                    <th>Spotify Móvil</th>
                    <th>Promedio Ponderado</th>
                    <th>Veredicto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-spotify-green-light" />
                        <span className="font-bold text-white">McCall (1977)</span>
                      </div>
                    </td>
                    <td className="text-center font-semibold text-gray-300">82 / 100</td>
                    <td className="text-center font-bold text-spotify-green-light font-mono">97 / 100</td>
                    <td className="text-center font-black text-white text-base font-mono">89.5 / 100</td>
                    <td className="text-center">
                      <span className="inline-block px-3 py-1 bg-spotify-green/15 text-spotify-green-light text-xs font-bold rounded-full border border-spotify-green/30">
                        Excelente (+15% Móvil)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-spotify-green-light" />
                        <span className="font-bold text-white">Boehm (1978)</span>
                      </div>
                    </td>
                    <td className="text-center font-semibold text-gray-300">81 (26/32)</td>
                    <td className="text-center font-bold text-spotify-green-light font-mono">97 (31/32)</td>
                    <td className="text-center font-black text-white text-base font-mono">89 (57/64)</td>
                    <td className="text-center">
                      <span className="inline-block px-3 py-1 bg-spotify-green/15 text-spotify-green-light text-xs font-bold rounded-full border border-spotify-green/30">
                        Excelente (+16% Móvil)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-2">
                        <ClipboardList className="w-4 h-4 text-spotify-green-light" />
                        <span className="font-bold text-white">FURPS (1992)</span>
                      </div>
                    </td>
                    <td className="text-center font-semibold text-gray-300">78 (43/55)</td>
                    <td className="text-center font-bold text-spotify-green-light font-mono">98 (54/55)</td>
                    <td className="text-center font-black text-white text-base font-mono">88 (97/110)</td>
                    <td className="text-center">
                      <span className="inline-block px-3 py-1 bg-spotify-green/15 text-spotify-green-light text-xs font-bold rounded-full border border-spotify-green/30">
                        Excelente (+20% Móvil)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Barras de comparación visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-white">Spotify Web Player</span>
                  </div>
                  <span className="font-black text-gray-300 font-mono">80.3% Promedio</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                  <div 
                    style={{ width: "80.3%" }} 
                    className="h-full bg-gray-500 rounded-full transition-all duration-600 ease-spring"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  Desempeño consistente con limitaciones atribuibles a la sandbox del navegador web.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-spotify-green/10 border border-spotify-green/30 space-y-3 shadow-glow-green-sm">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-spotify-green-light" />
                    <span className="font-bold text-white">Spotify Móvil (iOS / Android)</span>
                  </div>
                  <span className="font-black text-spotify-green-light font-mono">97.3% Promedio</span>
                </div>
                <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                  <div 
                    style={{ width: "97.3%" }} 
                    className="h-full bg-gradient-to-r from-spotify-green to-emerald-400 rounded-full transition-all duration-600 ease-spring"
                  />
                </div>
                <p className="text-xs text-gray-300">
                  Sobresale por su persistencia local, aceleración por GPU y baja latencia de reproducción.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 
        ========================================================================
        EXPLORAR MODELOS DE EVALUACIÓN (CONTRASTE CRISTALINO 100% VISIBLE)
        ========================================================================
      */}
      <section aria-label="Navegación por Modelos" className="space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-spotify-green-light bg-spotify-green/10 border border-spotify-green/30 px-3.5 py-1 rounded-full">
            <Target className="w-3.5 h-3.5" />
            Exploración Metodológica
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Auditar Cada Modelo en Detalle
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Ingresa a los cuestionarios, métricas normalizadas y desgloses de factores de cada estándar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* Card McCall */}
          <Link 
            to="/mccall" 
            className="group card-interactive rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green group-hover:scale-110 group-hover:bg-spotify-green group-hover:text-black transition-all duration-200 ease-spring">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-gray-400">Año 1977</span>
                <h4 className="text-xl font-bold text-white group-hover:text-spotify-green-light transition-colors">
                  Modelo McCall
                </h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  3 capacidades operativas y 11 factores cualitativos con foco en la satisfacción del usuario final.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-spotify-green-light">
              <span>89.5% Global</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card Boehm */}
          <Link 
            to="/boehm" 
            className="group card-interactive rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green group-hover:scale-110 group-hover:bg-spotify-green group-hover:text-black transition-all duration-200 ease-spring">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-gray-400">Año 1978</span>
                <h4 className="text-xl font-bold text-white group-hover:text-spotify-green-light transition-colors">
                  Modelo Boehm
                </h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Jerarquía en 3 niveles de calidad y 7 características primitivas de mantenibilidad y utilidad.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-spotify-green-light">
              <span>89.0% Global</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card FURPS */}
          <Link 
            to="/furps" 
            className="group card-interactive rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-spotify-green group-hover:scale-110 group-hover:bg-spotify-green group-hover:text-black transition-all duration-200 ease-spring">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-gray-400">Año 1992</span>
                <h4 className="text-xl font-bold text-white group-hover:text-spotify-green-light transition-colors">
                  Modelo FURPS
                </h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  5 dimensiones corporativas creadas por Robert Grady para evaluar rendimiento y confiabilidad.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-spotify-green-light">
              <span>88.0% Global</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card Conclusiones */}
          <Link 
            to="/conclusiones" 
            className="group card-interactive rounded-3xl p-6 border border-spotify-green/40 shadow-glow-green-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-spotify-green/20 border border-spotify-green/40 flex items-center justify-center text-spotify-green group-hover:scale-110 group-hover:bg-spotify-green group-hover:text-black transition-all duration-200 ease-spring">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-spotify-green-light">Veredicto Final</span>
                <h4 className="text-xl font-bold text-white group-hover:text-spotify-green-light transition-colors">
                  Conclusiones
                </h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Matriz unificada de hallazgos, brechas cualitativas y recomendaciones de ingeniería.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-spotify-green-light">
              <span>Informe Completo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </Link>

        </div>
      </section>

      {/* 
        ========================================================================
        ¿POR QUÉ EVALUAR SPOTIFY? (JUSTIFICACIÓN ACADÉMICA)
        ========================================================================
      */}
      <section 
        aria-label="Justificación de la Evaluación de Spotify"
        className="card-interactive rounded-3xl p-8 md:p-14 relative overflow-hidden"
      >
        <div className="text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-spotify-green-light bg-spotify-green/10 border border-spotify-green/30 px-3.5 py-1 rounded-full">
            <Users className="w-3.5 h-3.5" />
            Justificación Académica
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            ¿Por qué auditar la calidad de software en Spotify?
          </h3>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg font-normal">
            Spotify representa uno de los paradigmas contemporáneos más complejos de transmisión distribuida de audio, gestión de licencias DRM en streaming y sincronización en tiempo real. Someterlo a modelos canónicos de calidad de software permite corroborar cómo las teorías de ingeniería aplican a arquitecturas masivas de escala mundial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-spotify-green/40 transition-all duration-200 ease-spring card-interactive text-center">
              <div className="bg-spotify-green/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-spotify-green/30">
                <Users className="w-7 h-7 text-spotify-green-light" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Millones de Usuarios</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Más de 600 millones de oyentes activos exigen tolerancia extrema a fallos y concurrencia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-spotify-green/40 transition-all duration-200 ease-spring card-interactive text-center">
              <div className="bg-spotify-green/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-spotify-green/30">
                <Target className="w-7 h-7 text-spotify-green-light" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Sistema Complejo</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Microservicios acoplados con CDN distribuida y codecs dinámicos (AAC, Ogg Vorbis).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-spotify-green/40 transition-all duration-200 ease-spring card-interactive text-center">
              <div className="bg-spotify-green/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-spotify-green/30">
                <Award className="w-7 h-7 text-spotify-green-light" />
              </div>
              <h4 className="font-bold text-lg text-white mb-2">Calidad Premium</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Métricas rigurosas de disponibilidad con SLA superiores al 99.9% de uptime global.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
