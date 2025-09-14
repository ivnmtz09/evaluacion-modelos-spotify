import React, { useState } from "react";
import QuestionList from "../components/QuestionList";
import ScoreCard from "../components/ScoreCard";

export default function ModelTemplate({ title, questions, weight = 10 }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-600">Responde con 1 = Malo … 4 = Excelente</p>

      <QuestionList questions={questions} answers={answers} setAnswers={setAnswers} />

      <ScoreCard answers={answers} weight={weight} />
    </div>
  );
}
