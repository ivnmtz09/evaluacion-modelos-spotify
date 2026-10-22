export default function ScoreCard({ answers, weight = 10 }) {
  const valid = answers.filter((v) => v !== null)
  const avg = valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0
  const normalized = avg ? (avg / 4) * 10 : 0
  const weighted = (normalized / 10) * weight

  return (
    <div className="card-interactive p-6 md:p-8 rounded-3xl border-t-4 border-t-spotify-green text-white">
      <h3 className="text-xl md:text-2xl font-black text-white mb-6 tracking-tight">
        Resultados de la Evaluación
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-5 bg-black/40 rounded-2xl border border-white/10 card-interactive">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
            Promedio (1 - 4)
          </p>
          <p className="text-3xl font-black text-spotify-green-light font-mono">
            {avg.toFixed(2)}
          </p>
        </div>

        <div className="text-center p-5 bg-black/40 rounded-2xl border border-white/10 card-interactive">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
            Normalizado (0 - 10)
          </p>
          <p className="text-3xl font-black text-spotify-green-light font-mono">
            {normalized.toFixed(2)}
          </p>
        </div>

        <div className="text-center p-5 bg-gradient-to-br from-spotify-green to-emerald-600 text-white rounded-2xl shadow-glow-green-sm card-interactive">
          <p className="text-xs uppercase tracking-wider text-emerald-100 font-bold mb-1">
            Puntos Factor (peso {weight})
          </p>
          <p className="text-3xl font-black font-mono">{weighted.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <span className="inline-block px-3 py-1 bg-white/10 text-gray-300 text-xs font-semibold rounded-full border border-white/10">
          Preguntas respondidas: {valid.length} de {answers.length}
        </span>
      </div>
    </div>
  )
}
