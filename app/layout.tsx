import type React from "react"
import "../src/index.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Evaluación Modelos de Calidad - Spotify</title>
        <meta
          name="description"
          content="Evaluación de modelos de calidad de software McCall, Boehm y FURPS aplicados a Spotify"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
