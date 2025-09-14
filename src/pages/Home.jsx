import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Evaluación de Modelos de Calidad — Spotify
      </h1>
      <p className="text-gray-600">
        En este proyecto se aplicaron los modelos de calidad de software <b>McCall, Boehm y FURPS</b> 
        sobre la aplicación <b>Spotify</b> (versiones Web y Móvil), con el objetivo de evaluar la 
        <i>completitud de las funciones</i> y obtener métricas cuantitativas.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Modelo</th>
              <th className="border px-4 py-2">Spotify Web</th>
              <th className="border px-4 py-2">Spotify Móvil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-medium">McCall</td>
              <td className="border px-4 py-2">8.21 / 10</td>
              <td className="border px-4 py-2">10 / 10</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Boehm</td>
              <td className="border px-4 py-2">7.5 / 10</td>
              <td className="border px-4 py-2">9.38 / 10</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">FURPS</td>
              <td className="border px-4 py-2">9.17 / 10</td>
              <td className="border px-4 py-2">10 / 10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-4">
        <Link
          to="/mccall"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ver McCall
        </Link>
        <Link
          to="/boehm"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ver Boehm
        </Link>
        <Link
          to="/furps"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ver FURPS
        </Link>
        <Link
          to="/conclusiones"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Conclusiones
        </Link>
      </div>
    </div>
  );
}
