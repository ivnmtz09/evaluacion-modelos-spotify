import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg text-blue-600">
          Evaluación Modelos
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link to="/equipo" className="hover:text-blue-600">Equipo</Link>
          <Link to="/mccall" className="hover:text-blue-600">McCall</Link>
          <Link to="/boehm" className="hover:text-blue-600">Boehm</Link>
          <Link to="/furps" className="hover:text-blue-600">FURPS</Link>
          <Link to="/conclusiones" className="hover:text-blue-600">Conclusiones</Link>
        </div>
      </div>
    </nav>
  );
}
