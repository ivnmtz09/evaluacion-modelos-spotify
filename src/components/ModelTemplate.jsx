"use client"

import { useState } from "react"
import QuestionList from "./QuestionList"
import ScoreCard from "./ScoreCard"

export default function ModelTemplate({ title, questions, weight = 10 }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-spotify-black">{title}</h1>
        <p className="text-lg text-spotify-gray-dark">
          Responde con <span className="font-semibold text-spotify-green">1 = Malo</span> …{" "}
          <span className="font-semibold text-spotify-green">4 = Excelente</span>
        </p>
      </div>

      {/* Questions */}
      <section className="bg-spotify-gray-light p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-spotify-black mb-6">Cuestionario de Evaluación</h2>
        <QuestionList questions={questions} answers={answers} setAnswers={setAnswers} />
      </section>

      {/* Results */}
      <section>
        <ScoreCard answers={answers} weight={weight} />
      </section>
    </div>
  )
}
