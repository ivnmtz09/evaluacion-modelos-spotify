import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/evaluacion-modelos-spotify/", // 👈 importante para GitHub Pages
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    open: true,
  }
})

