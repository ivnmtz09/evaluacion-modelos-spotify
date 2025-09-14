"use client"

export default function QuestionList({ questions, answers, setAnswers }) {
  const handleAnswer = (index, value) => {
    const copy = [...answers]
    copy[index] = value
    setAnswers(copy)
  }

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-spotify-green">
          <p className="font-semibold text-spotify-black mb-4">
            {i + 1}. {q}
          </p>
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((val) => (
              <button
                key={val}
                onClick={() => handleAnswer(i, val)}
                className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-200 ${
                  answers[i] === val
                    ? "bg-spotify-green text-white border-spotify-green shadow-lg scale-105"
                    : "bg-white text-spotify-gray-dark border-spotify-gray hover:border-spotify-green hover:text-spotify-green"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
          <div className="mt-2 text-xs text-spotify-gray flex justify-between">
            <span>1 = Malo</span>
            <span>4 = Excelente</span>
          </div>
        </div>
      ))}
    </div>
  )
}
