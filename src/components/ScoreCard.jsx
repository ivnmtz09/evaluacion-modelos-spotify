export default function ScoreCard({ answers, weight = 10 }) {
  const valid = answers.filter((v) => v !== null)
  const avg = valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0
  const normalized = avg ? (avg / 4) * 10 : 0
  const weighted = (normalized / 10) * weight

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-spotify-green">
      <h3 className="text-xl font-bold text-spotify-black mb-4">Resultados de la Evaluación</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-spotify-gray-light rounded-lg">
          <p className="text-sm text-spotify-gray-dark mb-1">Promedio (1-4)</p>
          <p className="text-2xl font-bold text-spotify-green">{avg.toFixed(2)}</p>
        </div>

        <div className="text-center p-4 bg-spotify-gray-light rounded-lg">
          <p className="text-sm text-spotify-gray-dark mb-1">Normalizado (0-10)</p>
          <p className="text-2xl font-bold text-spotify-green">{normalized.toFixed(2)}</p>
        </div>

        <div className="text-center p-4 bg-spotify-green text-white rounded-lg">
          <p className="text-sm opacity-90 mb-1">Puntos Factor (peso {weight})</p>
          <p className="text-2xl font-bold">{weighted.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-spotify-gray-dark">
          Preguntas respondidas: {valid.length} de {answers.length}
        </p>
      </div>
    </div>
  )
}
