import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/evaluacion-modelos-spotify/", // necesario para GitHub Pages
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    open: true, // abre localhost automáticamente
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
})
