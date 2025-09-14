import React from "react";

export default function McCallPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-800">Modelo McCall</h1>
      <p className="text-gray-600">
        El modelo McCall evalúa la calidad en tres capacidades: <b>Operación</b>, 
        <b>Transición</b> y <b>Revisión</b>, a través de factores como corrección, confiabilidad,
        usabilidad, seguridad, portabilidad, reusabilidad, interoperabilidad, 
        mantenimiento, flexibilidad y facilidad de prueba.
      </p>

      {/* Cuestionario */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Cuestionario</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Métrica</th>
                <th className="border px-4 py-2">Descripción</th>
                <th className="border px-4 py-2">Pregunta</th>
                <th className="border px-4 py-2">Puntaje Esperado</th>
                <th className="border px-4 py-2">Puntaje Obtenido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Compleción de funciones</td>
                <td className="border px-4 py-2">Grado en que se implementan funciones requeridas</td>
                <td className="border px-4 py-2">¿Spotify cumple las funciones básicas de reproducción?</td>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Complejidad</td>
                <td className="border px-4 py-2">Complejidad del sistema</td>
                <td className="border px-4 py-2">¿La navegación es sencilla?</td>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">3</td>
              </tr>
              {/* ... resto de métricas */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación entre Factores y Métricas */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Relación entre Factores y Métricas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Métrica</th>
                <th className="border px-4 py-2">Operación</th>
                <th className="border px-4 py-2">Transición</th>
                <th className="border px-4 py-2">Revisión</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Compleción funciones</td>
                <td className="border px-4 py-2">Corrección</td>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Portabilidad</td>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">Portabilidad</td>
                <td className="border px-4 py-2"></td>
              </tr>
              {/* ... resto */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Resultados */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Resultados de la Evaluación</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Capacidad</th>
                <th className="border px-4 py-2">Puntaje Global</th>
                <th className="border px-4 py-2">Factor</th>
                <th className="border px-4 py-2">Puntaje Factor</th>
                <th className="border px-4 py-2">Puntaje Obtenido</th>
                <th className="border px-4 py-2">Puntaje Capacidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className="border px-4 py-2">Operación (40)</td>
                <td rowSpan="4" className="border px-4 py-2">40</td>
                <td className="border px-4 py-2">Corrección</td>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">9</td>
                <td rowSpan="4" className="border px-4 py-2">36</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Confiabilidad</td>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">9</td>
              </tr>
              {/* ... resto de factores */}
            </tbody>
            <tfoot className="bg-gray-100 font-semibold">
              <tr>
                <td colSpan="5" className="border px-4 py-2 text-right">Puntaje Total</td>
                <td className="border px-4 py-2">≈ 82 / 100</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
}
