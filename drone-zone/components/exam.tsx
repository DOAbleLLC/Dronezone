"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
];

export const ExamPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Timer for the entire quiz (60 seconds)
  const [finished, setFinished] = useState(false);

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !finished) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleQuizCompletion(); // End the quiz when time runs out
    }
  }, [timeLeft, finished]);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(""); // Reset answer for the next question
    } else {
      handleQuizCompletion(); // End the quiz after the last question
    }
  };

  const handleQuizCompletion = () => {
    setFinished(true);
  };

  return (
    <div className="container mx-auto p-4">
      {!finished ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Quiz</h1>
          <div className="text-xl mb-2">
            Time Left: <span className="font-bold">{timeLeft} seconds</span>
          </div>
          <div className="question-container my-4">
            <h2 className="text-lg font-semibold">
              {questionsData[currentQuestion].question}
            </h2>
            <div className="options-container mt-2">
              {questionsData[currentQuestion].options.map((option, index) => (
                <label key={index} className="block mt-2">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Submit Answer
            </button>
          </div>
        </>
      ) : (
        <div className="result-container">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-lg mt-2">Your score: {score} / {questionsData.length}</p>
        </div>
      )}
    </div>
  );
};
