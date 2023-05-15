import React from "react";
import { useLocation } from "react-router-dom";
import "./QuizResult.css";

const QuizResult = () => {
  const location = useLocation();
  const { score, timeTaken } = location.state;

  return (
    <div className="quiz-result-container">
      <h2>Quiz Result</h2>
      <p>Score: {score}</p>
      <p>Time Taken: {timeTaken} seconds</p>
    </div>
  );
};

export default QuizResult;
