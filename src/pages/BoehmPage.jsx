import React from "react";

export default function BoehmPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-800">Modelo Boehm</h1>
      <p className="text-gray-600">
        El modelo de Boehm organiza la calidad en <b>características de alto nivel</b>, 
        <b>nivel intermedio</b> y <b>primitivas</b>, cada una contribuye al nivel general de calidad.
      </p>

      {/* Cuestionario */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Descripción y Cuestionario</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Característica</th>
                <th className="border px-4 py-2">Pregunta</th>
                <th className="border px-4 py-2">Puntaje Esperado</th>
                <th className="border px-4 py-2">Puntaje Obtenido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Portabilidad (Independencia)</td>
                <td className="border px-4 py-2">¿Spotify funciona en múltiples SO?</td>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">3</td>
              </tr>
              {/* ... resto */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Puntuación obtenida */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Puntuación Obtenida</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Nivel</th>
                <th className="border px-4 py-2">Promedio Nivel</th>
                <th className="border px-4 py-2">Puntaje Nivel</th>
                <th className="border px-4 py-2">Promedio Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Utilidad General</td>
                <td className="border px-4 py-2">3.5</td>
                <td className="border px-4 py-2">8.5</td>
                <td rowSpan="3" className="border px-4 py-2">≈ 75%</td>
              </tr>
              {/* ... resto */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Resultados de la Evaluación</h2>
        <p className="text-gray-700">
          Spotify Móvil logra mayor completitud (≈ 9.38/10), mientras que la versión Web se queda en (≈ 7.5/10).
        </p>
      </section>
    </div>
  );
}
