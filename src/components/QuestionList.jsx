import React from "react";

export default function QuestionList({ questions, answers, setAnswers }) {
  const handleAnswer = (index, value) => {
    const copy = [...answers];
    copy[index] = value;
    setAnswers(copy);
  };

  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <p className="font-medium mb-2">{i + 1}. {q}</p>
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((val) => (
              <button
                key={val}
                onClick={() => handleAnswer(i, val)}
                className={`px-3 py-1 rounded border ${
                  answers[i] === val ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
