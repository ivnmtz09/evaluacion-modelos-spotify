import { useEffect, useRef } from "react"
import { useLocation, useNavigationType } from "react-router-dom"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

/**
 * Enhanced Scroll Restoration for React Router (HashRouter / BrowserRouter).
 * - Restores exact scroll position on back/forward browser navigation (POP).
 * - Smoothly or instantly scrolls to top on new link clicks (PUSH / REPLACE).
 * - Manages history.scrollRestoration = 'manual' to prevent browser interference.
 */
export default function ScrollRestoration() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const prefersReduced = usePrefersReducedMotion()
  const scrollPositions = useRef(new Map())

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  // Save scroll position before leaving current route
  useEffect(() => {
    const handleScroll = () => {
      const key = location.key || location.pathname
      scrollPositions.current.set(key, window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location])

  // Handle route navigation
  useEffect(() => {
    const key = location.key || location.pathname

    if (navigationType === "POP") {
      // User pressed back or forward: restore saved position
      const savedY = scrollPositions.current.get(key)
      if (savedY !== undefined) {
        window.scrollTo({
          top: savedY,
          left: 0,
          behavior: prefersReduced ? "auto" : "instant",
        })
        return
      }
    }

    // New navigation (PUSH/REPLACE): Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReduced ? "auto" : "instant",
    })
  }, [location.pathname, location.search, navigationType, prefersReduced])

  return null
}
