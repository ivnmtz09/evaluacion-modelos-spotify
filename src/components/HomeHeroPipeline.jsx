import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { 
  BarChart3, 
  TrendingUp, 
  ClipboardList, 
  Award, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  CheckCircle2, 
  Volume2,
  Pause,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useScrollParallax } from "../hooks/useScrollParallax"

const PIPELINE_STAGES = [
  {
    id: "scope",
    step: "01",
    label: "Alcance & Objeto",
    title: "Spotify Streaming (Web & Móvil)",
    summary: "Delimitación del ecosistema cliente-servidor a auditar: Spotify Web Player vs Aplicación Móvil nativa.",
    highlight: "2 Plataformas Analizadas",
    icon: Monitor,
    color: "from-emerald-500 to-green-600",
    metrics: [
      { label: "Catálogo", val: "+100M pistas" },
      { label: "Arquitectura", val: "Nube Distribuida" },
      { label: "Usuarios Activos", val: "+600M" }
    ],
    details: "Se evaluó la capacidad de respuesta, fidelidad de audio y gestión de estados locales en ambas variantes con el mismo catálogo de audio.",
    link: null
  },
  {
    id: "mccall",
    step: "02",
    label: "Modelo McCall",
    title: "3 Capacidades & 11 Factores",
    summary: "Descomposición jerárquica de la calidad en Operación, Transición y Revisión orientadas a la experiencia de usuario.",
    highlight: "Promedio: 89.5 / 100",
    icon: BarChart3,
    color: "from-green-500 to-emerald-600",
    metrics: [
      { label: "Spotify Web", val: "82 / 100" },
      { label: "Spotify Móvil", val: "97 / 100" },
      { label: "Foco Principal", val: "Operación & Usabilidad" }
    ],
    details: "La versión móvil sobresalió en confiabilidad y corrección de reproducción sin interrupciones bajo redes variables.",
    link: "/mccall"
  },
  {
    id: "boehm",
    step: "03",
    label: "Modelo Boehm",
    title: "Jerarquía de Características",
    summary: "Estructura multinivel que pondera Utilidad Primaria, Construcción y Portabilidad del software.",
    highlight: "Promedio: 89 (57/64)",
    icon: TrendingUp,
    color: "from-teal-500 to-emerald-500",
    metrics: [
      { label: "Spotify Web", val: "81 (26/32)" },
      { label: "Spotify Móvil", val: "97 (31/32)" },
      { label: "Foco Principal", val: "Utilidad y Mantenibilidad" }
    ],
    details: "Mide cómo el código responde a mantenimiento, eficiencia de hardware y consistencia funcional.",
    link: "/boehm"
  },
  {
    id: "furps",
    step: "04",
    label: "Modelo FURPS",
    title: "5 Dimensiones Críticas",
    summary: "Marco de Robert Grady (Hewlett-Packard): Funcionalidad, Usabilidad, Confiabilidad, Rendimiento y Soportabilidad.",
    highlight: "Promedio: 88 (97/110)",
    icon: ClipboardList,
    color: "from-emerald-400 to-teal-600",
    metrics: [
      { label: "Spotify Web", val: "78 (43/55)" },
      { label: "Spotify Móvil", val: "98 (54/55)" },
      { label: "Foco Principal", val: "Rendimiento y Soportabilidad" }
    ],
    details: "La app móvil alcanza el 98% gracias a su caché offline optimizada, sincronización rápida y aceleración por GPU.",
    link: "/furps"
  },
  {
    id: "verdict",
    step: "05",
    label: "Veredicto",
    title: "Síntesis & Decisión Comparativa",
    summary: "Consolidación de las métricas cuantitativas: la versión móvil obtiene una ventaja consistente de +16 a +20 puntos porcentuales.",
    highlight: "Puntuación Global: 88.8%",
    icon: Award,
    color: "from-green-400 to-emerald-500",
    metrics: [
      { label: "Promedio Web", val: "80.3%" },
      { label: "Promedio Móvil", val: "97.3%" },
      { label: "Brecha Cualitativa", val: "+17.0%" }
    ],
    details: "Ambas plataformas cumplen los requisitos de reproducción, pero la versión nativa móvil ofrece una robustez significativamente superior.",
    link: "/conclusiones"
  }
]

export default function HomeHeroPipeline() {
  const { scrollY, prefersReduced } = useScrollParallax()
  const [activeStageId, setActiveStageId] = useState(PIPELINE_STAGES[0].id)
  const [isPaused, setIsPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  // Auto-avance del carrusel cada 2 segundos (2000 ms), pausado si el cursor está dentro
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveStageId((prevId) => {
        const currIndex = PIPELINE_STAGES.findIndex((s) => s.id === prevId)
        const nextIndex = (currIndex + 1) % PIPELINE_STAGES.length
        return PIPELINE_STAGES[nextIndex].id
      })
      setProgressKey((k) => k + 1)
    }, 2000)

    return () => clearInterval(timer)
  }, [isPaused])

  const handleSelectStage = (id) => {
    setActiveStageId(id)
    setProgressKey((k) => k + 1)
  }

  const handlePrev = () => {
    setActiveStageId((prevId) => {
      const currIndex = PIPELINE_STAGES.findIndex((s) => s.id === prevId)
      const prevIndex = (currIndex - 1 + PIPELINE_STAGES.length) % PIPELINE_STAGES.length
      return PIPELINE_STAGES[prevIndex].id
    })
    setProgressKey((k) => k + 1)
  }

  const handleNext = () => {
    setActiveStageId((prevId) => {
      const currIndex = PIPELINE_STAGES.findIndex((s) => s.id === prevId)
      const nextIndex = (currIndex + 1) % PIPELINE_STAGES.length
      return PIPELINE_STAGES[nextIndex].id
    })
    setProgressKey((k) => k + 1)
  }

  // Parallax offsets calculados por hardware acceleration (transform: translate3d)
  const bgOrb1Y = prefersReduced ? 0 : Math.round(scrollY * -0.12)
  const bgOrb2Y = prefersReduced ? 0 : Math.round(scrollY * 0.15)
  const floatingCard1Y = prefersReduced ? 0 : Math.round(scrollY * -0.08)
  const floatingCard2Y = prefersReduced ? 0 : Math.round(scrollY * 0.1)

  const activeStage = PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0]
  const ActiveIcon = activeStage.icon

  return (
    <section 
      aria-label="Pipeline de Evaluación de Calidad de Software"
      className="relative overflow-hidden rounded-3xl bg-spotify-black border border-white/10 shadow-2xl text-white my-6"
    >
      {/* 
        CAPAS PARALLAX DE FONDO (Pilar 4: Parallax Fluido y Optimizado)
        Aceleradas por hardware mediante translate3d y will-change: transform.
      */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Patrón vectorial de bajo costo computacional (Pilar 1: Mitigación de Estaticidad) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="sound-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32 L32 0 M0 0 L32 32" stroke="#ffffff" strokeWidth="0.5" fill="none" />
              <circle cx="16" cy="16" r="1" fill="#1db954" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sound-grid)" />
        </svg>

        {/* Capa Parallax 1: Orbe esmeralda dinámico */}
        <div
          style={{
            transform: `translate3d(0, ${bgOrb1Y}px, 0)`,
            willChange: "transform",
          }}
          className="parallax-layer absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-spotify-green/25 to-transparent blur-3xl"
        />

        {/* Capa Parallax 2: Orbe mint profundo */}
        <div
          style={{
            transform: `translate3d(0, ${bgOrb2Y}px, 0)`,
            willChange: "transform",
          }}
          className="parallax-layer absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-emerald-600/20 to-transparent blur-3xl"
        />

        {/* Ondas vectoriales de audio Spotify (ambient equalizer) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-spotify-black to-transparent flex items-end justify-around px-8 opacity-20 pointer-events-none">
          {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 50, 60, 100, 75, 45, 80].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="w-1.5 bg-spotify-green rounded-t-full transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* CONTENIDO HERO CON JERARQUÍA TIPOGRÁFICA Y CONTRASTE DE COLOR */}
      <div className="relative z-10 px-6 py-12 md:px-12 lg:px-16 space-y-12">
        
        {/* Cabecera Principal */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          {/* Badge superior accesible */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-spotify-green/30 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-spotify-green-light">
              Ingeniería de Software II • Universidad de La Guajira
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Evaluación de Modelos de Calidad
            <span className="block mt-2 bg-gradient-to-r from-spotify-green via-spotify-green-light to-emerald-400 bg-clip-text text-transparent">
              Aplicado a Spotify
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Auditoría multidimensional bajo los estándares <strong className="text-white font-semibold">McCall (1977)</strong>,{" "}
            <strong className="text-white font-semibold">Boehm (1978)</strong> y <strong className="text-white font-semibold">FURPS (1992)</strong> sobre las plataformas Web y Móvil para cuantificar la completitud de funciones y estabilidad.
          </p>

          {/* Quick Metrics Bar flotante con microinteracciones */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm card-interactive">
              <Monitor className="w-4 h-4 text-spotify-green" />
              <span className="text-gray-300">Spotify Web:</span>
              <strong className="text-white font-bold">80.3% Prom.</strong>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.06] border border-emerald-500/30 px-4 py-2 rounded-xl backdrop-blur-sm card-interactive shadow-glow-green-sm">
              <Smartphone className="w-4 h-4 text-spotify-green-light" />
              <span className="text-gray-300">Spotify Móvil:</span>
              <strong className="text-spotify-green-light font-bold">97.3% Prom.</strong>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm card-interactive">
              <ShieldCheck className="w-4 h-4 text-spotify-green" />
              <span className="text-gray-300">Escala:</span>
              <strong className="text-white font-bold">Likert 1-4</strong>
            </div>
          </div>
        </div>

        {/* 
          PIPELINE CARRUSEL INTERACTIVO:
          Auto-avance cada 2s o en pausa si el cursor está dentro
        */}
        <div 
          className="space-y-6 pt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Carrusel interactivo de Fases de Evaluación del Software"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-spotify-green text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                Pipeline Metodológico
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Fases de Evaluación del Software
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Badge dinámico de estado del carrusel */}
              <div 
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 select-none ${
                  isPaused 
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/30 shadow-sm" 
                    : "bg-spotify-green/15 text-spotify-green-light border-spotify-green/30"
                }`}
                title={isPaused ? "Carrusel en pausa: el cursor está dentro del área" : "Carrusel avanzando automáticamente cada 2 segundos"}
              >
                {isPaused ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Pausado (cursor dentro)</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spotify-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-spotify-green"></span>
                    </span>
                    <span>Carrusel activo (2s)</span>
                  </>
                )}
              </div>

              {/* Controles manuales Anterior / Siguiente */}
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Fase anterior"
                  title="Fase anterior"
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-spotify-green"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-gray-400 px-2 select-none">
                  {activeStage.step} / {String(PIPELINE_STAGES.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Fase siguiente"
                  title="Fase siguiente"
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-spotify-green"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stepper / Pestañas horizontales del carrusel con progreso visual */}
          <div 
            role="tablist"
            aria-label="Etapas del pipeline de calidad"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {PIPELINE_STAGES.map((stage, idx) => {
              const isSelected = stage.id === activeStageId
              const StageIcon = stage.icon

              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${stage.id}`}
                  onClick={() => handleSelectStage(stage.id)}
                  style={{
                    animationDelay: `${idx * 75}ms`,
                  }}
                  className={`relative p-4 rounded-2xl text-left border text-sm animate-fade-in-up transition-all duration-200 ease-spring group overflow-hidden ${
                    isSelected
                      ? "bg-white/[0.12] border-spotify-green shadow-glow-green-sm -translate-y-1"
                      : "bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.07] hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-spotify-green text-spotify-black" : "bg-white/10 text-gray-300"
                    }`}>
                      {stage.step}
                    </span>
                    <StageIcon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                      isSelected ? "text-spotify-green-light" : "text-gray-400"
                    }`} />
                  </div>
                  <div className="font-semibold text-white tracking-tight truncate">
                    {stage.label}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 truncate">
                    {stage.highlight}
                  </div>

                  {/* Barra de progreso de 2s para la pestaña activa */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                      <div 
                        key={progressKey}
                        style={{
                          animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                        className="h-full bg-spotify-green animate-carousel-progress"
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* 
            INSPECTOR DE ETAPA ACTIVA DEL CARRUSEL: Re-render animado suave al cambiar etapa
            (Pilar 2: cubic-bezier(0.16, 1, 0.3, 1))
          */}
          <div 
            key={activeStage.id}
            id={`panel-${activeStage.id}`}
            role="tabpanel"
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-350 ease-spring relative overflow-hidden animate-fade-in"
          >
            {/* Elemento de iluminación sutil al hover */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-spotify-green/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Columna Izquierda: Información de la fase */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-spotify-green bg-spotify-green/10 border border-spotify-green/20 px-3 py-1 rounded-full">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  Paso {activeStage.step}: {activeStage.label}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {activeStage.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {activeStage.summary}
                </p>

                <p className="text-xs sm:text-sm text-gray-400 bg-black/30 p-3.5 rounded-xl border border-white/5">
                  <strong className="text-gray-200">Hallazgo metodológico:</strong> {activeStage.details}
                </p>

                {activeStage.link && (
                  <div className="pt-2">
                    <Link
                      to={activeStage.link}
                      className="inline-flex items-center gap-2 spotify-button text-sm font-bold shadow-glow-green-sm"
                    >
                      <span>Auditar {activeStage.label} en Detalle</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Columna Derecha: Métricas y datos de la fase */}
              <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Métricas de Evaluación
                  </span>
                  <span className="text-xs font-mono font-bold text-spotify-green bg-spotify-green/15 px-2.5 py-0.5 rounded-md">
                    {activeStage.highlight}
                  </span>
                </div>

                <div className="space-y-3">
                  {activeStage.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:border-spotify-green/30 transition-colors duration-150"
                    >
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">
                        {metric.label}
                      </span>
                      <span className="text-sm font-bold text-white font-mono">
                        {metric.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-gray-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-spotify-green shrink-0" />
                  <span>Datos validados con la rúbrica oficial de la Universidad</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 
          TARJETAS FLOTANTES PARALLAX DIFERENCIAL (Pilar 4)
          Transformadas en el eje vertical mediante translate3d a velocidades diferenciales
        */}
        <div 
          aria-hidden="true"
          className="hidden md:flex justify-between items-center pt-2 text-xs text-gray-400 pointer-events-none"
        >
          <div 
            style={{
              transform: `translate3d(0, ${floatingCard1Y}px, 0)`,
              willChange: "transform",
            }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-spotify-green" />
            <span>Aceleración por GPU activada (translate3d)</span>
          </div>

          <div 
            style={{
              transform: `translate3d(0, ${floatingCard2Y}px, 0)`,
              willChange: "transform",
            }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
          >
            <Volume2 className="w-3.5 h-3.5 text-spotify-green-light" />
            <span>Modelos: McCall 1977 • Boehm 1978 • FURPS 1992</span>
          </div>
        </div>

      </div>
    </section>
  )
}
