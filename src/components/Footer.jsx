import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-4 mt-6">
      <div className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Universidad de La Guajira — Ingeniería de Sistemas
      </div>
    </footer>
  );
}
