import React from "react";

export default function FurpsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-800">Modelo FURPS</h1>
      <p className="text-gray-600">
        El modelo FURPS evalúa la calidad en 5 factores: <b>Funcionalidad</b>, 
        <b>Usabilidad</b>, <b>Fiabilidad</b>, <b>Rendimiento</b> y <b>Soporte</b>.
      </p>

      {/* Evaluación */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Evaluación</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Característica</th>
                <th className="border px-4 py-2">Factor</th>
                <th className="border px-4 py-2">Valoración (1-4)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Características y capacidades</td>
                <td className="border px-4 py-2">Funcionalidad</td>
                <td className="border px-4 py-2">4</td>
              </tr>
              {/* ... resto */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Resultados de la Valoración</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Característica</th>
                <th className="border px-4 py-2">Puntaje Esperado</th>
                <th className="border px-4 py-2">Puntaje Obtenido</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Funcionalidad</td>
                <td className="border px-4 py-2">30</td>
                <td className="border px-4 py-2">28</td>
                <td className="border px-4 py-2">93%</td>
              </tr>
              {/* ... resto */}
            </tbody>
          </table>
        </div>
      </section>

      <p className="text-gray-700">
        Spotify Móvil obtuvo un 10/10 en funcionalidad, mientras que Spotify Web alcanzó 9.17/10.
      </p>
    </div>
  );
}
