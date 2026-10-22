import { useState, useRef, useEffect } from "react"
import { 
  Smartphone, 
  Monitor, 
  Play, 
  Pause, 
  Volume2, 
  Wifi, 
  Battery, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Disc3,
  HardDrive,
  Cpu,
  Radio
} from "lucide-react"
import { useScrollParallax } from "../hooks/useScrollParallax"

const MODEL_DATA = {
  mccall: {
    name: "McCall (1977)",
    score: "97 / 100",
    badge: "Excelente (+15% vs Web)",
    desc: "Plataforma nativa sobresale en Operación (40/40) y Transición (30/30).",
    factors: [
      { name: "Operación", val: "40 / 40", pct: 100 },
      { name: "Transición", val: "30 / 30", pct: 100 },
      { name: "Revisión", val: "27 / 30", pct: 90 },
    ],
  },
  boehm: {
    name: "Boehm (1978)",
    score: "97% (31/32)",
    badge: "Excelente (+16% vs Web)",
    desc: "Mantenibilidad y Flexibilidad alcanzan puntuación perfecta del 100%.",
    factors: [
      { name: "Utilidad", val: "15 / 16", pct: 93.7 },
      { name: "Mantenibilidad", val: "8 / 8", pct: 100 },
      { name: "Flexibilidad", val: "8 / 8", pct: 100 },
    ],
  },
  furps: {
    name: "FURPS (1992)",
    score: "98% (54/55)",
    badge: "Excelente (+20% vs Web)",
    desc: "Puntuación de 100% en 4 de las 5 dimensiones del modelo Robert Grady.",
    factors: [
      { name: "Funcionalidad", val: "12 / 12", pct: 100 },
      { name: "Usabilidad", val: "7 / 7", pct: 100 },
      { name: "Fiabilidad", val: "12 / 12", pct: 100 },
      { name: "Rendimiento", val: "11 / 12", pct: 91.6 },
      { name: "Soporte", val: "12 / 12", pct: 100 },
    ],
  },
}

const COMPARISON_FEATURES = [
  {
    id: "offline",
    title: "Modo Offline & Caché Cifrada",
    icon: HardDrive,
    mobile: { score: "4 / 4", tag: "Nativo", desc: "Descarga de canciones en almacenamiento seguro local." },
    web: { score: "1 / 4", tag: "Limitado", desc: "Sandbox del navegador sin acceso al sistema de archivos." }
  },
  {
    id: "hardware",
    title: "Aceleración por Hardware & GPU",
    icon: Cpu,
    mobile: { score: "4 / 4", tag: "Óptimo", desc: "Decodificación directa por chip de audio y GPU móvil." },
    web: { score: "3 / 4", tag: "Estándar", desc: "Intermediado por el motor JavaScript del navegador." }
  },
  {
    id: "recovery",
    title: "Tolerancia a Cortes de Red",
    icon: Radio,
    mobile: { score: "4 / 4", tag: "Robusto", desc: "Buffer predictivo continuo de hasta 3 pistas en caché." },
    web: { score: "3 / 4", tag: "Medio", desc: "Reconexión con microinterrupciones en buffer de audio." }
  },
  {
    id: "ergonomics",
    title: "Ergonomía & Microgestos",
    icon: Smartphone,
    mobile: { score: "4 / 4", tag: "Fluido", desc: "Gestos swipe, widgets dinámicos y audio en segundo plano." },
    web: { score: "3 / 4", tag: "Básico", desc: "Navegación tradicional dependiente de pestaña activa." }
  }
]

export default function InteractiveDeviceShowcase() {
  const { scrollY, prefersReduced } = useScrollParallax()
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeModel, setActiveModel] = useState("mccall")
  const [activeFeature, setActiveFeature] = useState(COMPARISON_FEATURES[0])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50 })
  const phoneRef = useRef(null)

  // Cursor 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (prefersReduced) return
    const rect = phoneRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Max tilt angles: -12 to +12 degrees
    const rotateY = ((x - centerX) / centerX) * 12
    const rotateX = -((y - centerY) / centerY) * 12

    const glareX = Math.round((x / rect.width) * 100)
    const glareY = Math.round((y / rect.height) * 100)

    setTilt({ rx: rotateX, ry: rotateY, glareX, glareY })
  }

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50 })
  }

  // Section spotlight cursor tracking
  const handleSectionMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    })
  }

  const currentModel = MODEL_DATA[activeModel]

  return (
    <section 
      aria-label="Comparativa Interactiva de Plataformas"
      onMouseMove={handleSectionMouseMove}
      className="card-interactive rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden my-12"
      style={{
        backgroundImage: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 185, 84, 0.08), transparent 70%)`,
      }}
    >
      {/* Encabezado de la sección */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-spotify-green-light bg-spotify-green/10 border border-spotify-green/30 px-3.5 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-spotify-green" />
            Experiencia Móvil vs Web Interactiva
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Laboratorio de Simulación & Rendimiento
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-1 max-w-2xl">
            Mueve el cursor sobre el teléfono para interactuar con la perspectiva 3D, probar la reproducción y auditar la brecha de calidad entre la aplicación móvil (97.3%) y el cliente web (80.3%).
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono font-bold text-spotify-green-light bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
          <Disc3 className={`w-4 h-4 ${isPlaying ? "animate-spin" : ""}`} />
          <span>Simulador de Audio Activo</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* 
          ========================================================================
          DISPOSITIVO SMARTPHONE 3D CON INCLINACIÓN POR CURSOR (TILT 3D)
          ========================================================================
        */}
        <div 
          className="lg:col-span-5 flex justify-center perspective-[1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={phoneRef}
        >
          <div 
            style={{
              transform: prefersReduced 
                ? "none" 
                : `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.02, 1.02, 1.02)`,
              transition: "transform 150ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
            className="w-full max-w-[320px] sm:max-w-[340px] bg-[#0c0e12] rounded-[48px] p-3.5 border-[4px] border-[#2c3038] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(29,185,84,0.3)] relative select-none"
          >
            {/* Brillo especular dinámico que sigue al cursor */}
            <div 
              aria-hidden="true"
              className="absolute inset-0 rounded-[44px] pointer-events-none z-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.12), transparent 50%)`,
              }}
            />

            {/* Pantalla del teléfono */}
            <div className="bg-[#121418] rounded-[38px] p-5 pt-3 pb-6 flex flex-col justify-between h-[580px] border border-white/5 relative overflow-hidden">
              
              {/* Barra superior del teléfono (Dynamic Island / Notch & Status) */}
              <div>
                <div className="flex justify-between items-center text-[11px] font-mono font-bold text-gray-400 px-2 pt-1 mb-3">
                  <span>12:00</span>
                  {/* Dynamic Island */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto flex items-center justify-end px-2 gap-1.5 shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-spotify-green animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Wifi className="w-3 h-3 text-spotify-green-light" />
                    <Battery className="w-3.5 h-3.5 text-spotify-green-light" />
                  </div>
                </div>

                {/* Header de la App móvil */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-spotify-green/20 flex items-center justify-center text-spotify-green font-black text-xs">
                      S
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Auditoría Spotify Móvil</p>
                      <p className="text-xs font-black text-white">Score: 97.3% Prom.</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-spotify-green/20 text-spotify-green-light text-[10px] font-bold">
                    PRO
                  </span>
                </div>
              </div>

              {/* Selector de Modelos interactivo dentro del teléfono */}
              <div className="space-y-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">
                  Toca un modelo para auditarlo en vivo:
                </p>
                <div className="grid grid-cols-3 gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                  {Object.keys(MODEL_DATA).map((key) => {
                    const isSelected = activeModel === key
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveModel(key)}
                        className={`py-1.5 px-2 rounded-lg text-center text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? "bg-spotify-green text-black shadow-glow-green-sm"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {key.toUpperCase()}
                      </button>
                    )
                  })}
                </div>

                {/* Scorecard proyectado en pantalla del teléfono */}
                <div className="bg-black/60 rounded-2xl p-3.5 border border-white/10 space-y-2.5 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-300">{currentModel.name}</span>
                    <span className="text-base font-black text-spotify-green-light font-mono">
                      {currentModel.score}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {currentModel.factors.map((f, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-medium text-gray-300">
                          <span>{f.name}</span>
                          <span className="font-bold text-white font-mono">{f.val}</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                          <div 
                            style={{ width: `${f.pct}%` }} 
                            className="h-full bg-gradient-to-r from-spotify-green to-emerald-400 rounded-full transition-all duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mini Reproductor de Audio Interactivo */}
              <div className="bg-black/80 rounded-2xl p-3.5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spotify-green to-emerald-800 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Disc3 className={`w-5 h-5 ${isPlaying ? "animate-spin" : ""}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">Spotify Mobile Engine</p>
                    <p className="text-[10px] text-gray-400 truncate">Audio Lossless • 320 kbps</p>
                  </div>
                  {/* Botón interactivo Play/Pause */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-9 h-9 rounded-full bg-spotify-green hover:bg-spotify-green-light text-black flex items-center justify-center shadow-glow-green-sm transition-transform active:scale-95"
                    title={isPlaying ? "Pausar simulación" : "Reanudar simulación"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                  </button>
                </div>

                {/* Ecualizador animado */}
                <div className="flex items-end justify-between h-5 px-2 gap-1">
                  {[45, 90, 60, 80, 100, 70, 50, 85, 65, 95, 40, 75, 55, 85].map((val, idx) => (
                    <div
                      key={idx}
                      style={{
                        height: isPlaying ? `${val}%` : "15%",
                        transition: "height 200ms ease-in-out",
                      }}
                      className="w-1 bg-spotify-green-light rounded-full"
                    />
                  ))}
                </div>

                {/* Scrubber de audio */}
                <div className="space-y-1">
                  <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-spotify-green ${isPlaying ? "w-2/3" : "w-1/3"} transition-all duration-500`}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-gray-400">
                    <span>{isPlaying ? "01:45" : "00:00"}</span>
                    <span>03:30</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 
          ========================================================================
          COMPARADOR DE CARACTERÍSTICAS REACTIVO AL CURSOR
          ========================================================================
        */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-spotify-green-light uppercase tracking-wider">
              Análisis Comparativo por Factor
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              ¿Por qué Spotify Móvil (97.3%) supera a Spotify Web (80.3%)?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pasa el cursor por cada dimensión para inspeccionar los factores técnicos y arquitectónicos que fundamentan la diferencia de puntuación:
            </p>
          </div>

          {/* Lista de características interactivas */}
          <div className="space-y-3">
            {COMPARISON_FEATURES.map((item) => {
              const isSelected = activeFeature.id === item.id
              const ItemIcon = item.icon

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveFeature(item)}
                  onClick={() => setActiveFeature(item)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] border-spotify-green/60 shadow-glow-green-sm -translate-y-0.5"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? "bg-spotify-green text-black" 
                          : "bg-white/5 text-gray-300"
                      }`}>
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {isSelected ? item.mobile.desc : "Haz clic o pasa el cursor para comparar"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs shrink-0 self-end sm:self-auto">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                        <Monitor className="w-3.5 h-3.5 text-gray-400" />
                        <span>Web:</span>
                        <strong className="text-white font-mono">{item.web.score}</strong>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-spotify-green/15 border border-spotify-green/30 text-spotify-green-light">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Móvil:</span>
                        <strong className="font-mono">{item.mobile.score}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Panel expandido al seleccionar */}
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs animate-fade-in">
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="flex items-center justify-between text-gray-400 font-bold">
                          <span>Spotify Web Player</span>
                          <span className="text-amber-400">{item.web.tag}</span>
                        </div>
                        <p className="text-gray-300 text-[11px] leading-relaxed">{item.web.desc}</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-spotify-green/10 border border-spotify-green/20 space-y-1">
                        <div className="flex items-center justify-between text-spotify-green-light font-bold">
                          <span>Spotify Móvil Nativo</span>
                          <span className="text-spotify-green-light">★ {item.mobile.tag}</span>
                        </div>
                        <p className="text-gray-200 text-[11px] leading-relaxed">{item.mobile.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Resumen final */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-spotify-green/15 via-emerald-950/40 to-transparent border border-spotify-green/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-spotify-green-light shrink-0" />
              <p className="text-xs sm:text-sm text-gray-200">
                La arquitectura nativa móvil reduce la fricción operativa y garantiza el cumplimiento estricto de las 5 dimensiones FURPS.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-spotify-green-light px-2.5 py-1 rounded-full bg-spotify-green/20 shrink-0">
              Gap: +17%
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
