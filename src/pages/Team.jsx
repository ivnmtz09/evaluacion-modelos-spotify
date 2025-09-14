import React from "react";

export default function Team() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Nuestro Equipo</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Juan Carlos Añez Ahumada</li>
        <li>Jesus Manuel Arias Deluque</li>
        <li>Ivan Jesus Martínez Molina</li>
        <li>Sebastián David Ramos Jaraba</li>
        <li>Stiven David Silva Toro</li>
      </ul>
      <p className="text-sm text-gray-600">
        Asignatura: Ingeniería de Software II <br />
        Docente: Jhon Jairo Suarez Bonilla
      </p>
    </div>
  );
}
