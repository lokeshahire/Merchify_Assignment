import React from "react";
import { Link } from "react-router-dom";
import "./QuizDetail.css";

const QuizDetail = () => {
  const quizId = 123; // Replace with the actual quiz ID
  const quizTitle = "Sample Quiz"; // Replace with the actual quiz title
  const quizDescription = "This is a sample quiz for demonstration purposes."; // Replace with the actual quiz description

  return (
    <div className="quiz-detail-container">
      <h2>Quiz Detail</h2>
      <p>Title: {quizTitle}</p>
      <p>Description: {quizDescription}</p>
      <Link to={`/attempt`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default QuizDetail;
