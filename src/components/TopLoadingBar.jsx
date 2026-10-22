import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

/**
 * TopLoadingBar - Barra de carga superior (estilo YouTube / GitHub / Spotify)
 * Se activa automáticamente en cada cambio de ruta con curvas spring y brillo neón.
 */
export default function TopLoadingBar() {
  const location = useLocation()
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const timers = useRef([])

  const clearAllTimers = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
  }

  useEffect(() => {
    clearAllTimers()

    // Paso 1: Iniciar carga
    setIsVisible(true)
    setProgress(20)

    // Paso 2: Aceleración intermedia
    timers.current.push(
      setTimeout(() => {
        setProgress(65)
      }, 70)
    )

    // Paso 3: Casi completo
    timers.current.push(
      setTimeout(() => {
        setProgress(88)
      }, 180)
    )

    // Paso 4: Completar al 100%
    timers.current.push(
      setTimeout(() => {
        setProgress(100)
      }, 280)
    )

    // Paso 5: Desvanecer y ocultar
    timers.current.push(
      setTimeout(() => {
        setIsVisible(false)
      }, 480)
    )

    // Paso 6: Resetear progreso para la siguiente navegación
    timers.current.push(
      setTimeout(() => {
        setProgress(0)
      }, 680)
    )

    return () => clearAllTimers()
  }, [location.pathname, location.search])

  if (!isVisible && progress === 0) return null

  return (
    <div
      role="progressbar"
      aria-label="Cargando página"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3px] overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 200ms ease-out",
      }}
    >
      {/* Barra de progreso con gradiente Spotify y aceleración spring */}
      <div
        className="h-full relative will-change-transform bg-gradient-to-r from-spotify-green-dark via-spotify-green to-spotify-green-light"
        style={{
          width: `${progress}%`,
          transition: "width 240ms cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 0 12px rgba(29, 185, 84, 0.8)",
        }}
      >
        {/* Peg / Brillo incandescente en la punta derecha de la barra */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 h-full pointer-events-none opacity-90"
          style={{
            boxShadow: "0 0 14px 2px #1ed760, 0 0 6px 1px #1db954",
            transform: "rotate(2deg) translateY(-1px)",
          }}
        />
      </div>
    </div>
  )
}
