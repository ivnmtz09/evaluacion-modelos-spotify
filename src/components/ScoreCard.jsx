import React from "react";

export default function ScoreCard({ answers, weight = 10 }) {
  const valid = answers.filter((v) => v !== null);
  const avg = valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0;
  const normalized = avg ? (avg / 4) * 10 : 0;
  const weighted = (normalized / 10) * weight;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Resultados</h3>
      <p>Promedio (1..4): {avg.toFixed(2)}</p>
      <p>Normalizado (0–10): {normalized.toFixed(2)}</p>
      <p>Puntos factor (peso {weight}): {weighted.toFixed(2)}</p>
    </div>
  );
}
