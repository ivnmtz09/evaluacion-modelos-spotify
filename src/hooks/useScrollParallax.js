import { useState, useEffect, useRef } from "react"
import { usePrefersReducedMotion } from "./usePrefersReducedMotion"

/**
 * High-performance hook for hardware-accelerated parallax scrolling.
 * Throttled to requestAnimationFrame to prevent main thread repaints.
 * Automatically deactivates if prefers-reduced-motion is requested.
 */
export function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0)
  const prefersReduced = usePrefersReducedMotion()
  const rafId = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") {
      setScrollY(0)
      return
    }

    const onScroll = () => {
      lastScrollY.current = window.scrollY
      if (!rafId.current) {
        rafId.current = window.requestAnimationFrame(() => {
          setScrollY(lastScrollY.current)
          rafId.current = null
        })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    // Initial read
    setScrollY(window.scrollY)

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current)
      }
    }
  }, [prefersReduced])

  return { scrollY: prefersReduced ? 0 : scrollY, prefersReduced }
}
