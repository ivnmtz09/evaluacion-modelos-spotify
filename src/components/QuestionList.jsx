export default function QuestionList({ questions, answers, setAnswers }) {
  const handleAnswer = (index, value) => {
    const copy = [...answers]
    copy[index] = value
    setAnswers(copy)
  }

  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <div 
          key={i} 
          className="card-interactive p-6 rounded-2xl border-l-4 border-l-spotify-green text-white"
        >
          <p className="font-semibold text-white text-sm md:text-base mb-4 leading-snug">
            <span className="font-mono text-spotify-green-light font-bold mr-1.5">{i + 1}.</span> {q}
          </p>
          <div className="flex gap-2.5 sm:gap-3">
            {[1, 2, 3, 4].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleAnswer(i, val)}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 font-bold font-mono text-sm transition-all duration-200 ease-spring flex items-center justify-center ${
                  answers[i] === val
                    ? "bg-spotify-green text-black border-spotify-green shadow-glow-green-sm scale-105"
                    : "bg-black/40 text-gray-300 border-white/10 hover:border-spotify-green hover:text-spotify-green-light hover:scale-105"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-400 flex justify-between font-medium">
            <span>1 = Malo</span>
            <span>4 = Excelente</span>
          </div>
        </div>
      ))}
    </div>
  )
}
