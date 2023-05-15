import React from "react";
import { Link } from "react-router-dom";
import "./QuizDetail.css";

const QuizDetail = () => {
  const quizDescription = "This is a sample quiz for demonstration purposes."; // Replace with the actual quiz description

  return (
    <div className="quiz-detail-container">
      <h2>Welcome to Quiz</h2>

      <img
        className="quizImg"
        src="https://i.pinimg.com/736x/50/a4/2c/50a42c0a969d3d5a6cc04e12ce1b4dd0.jpg"
        alt=""
      />

      <h4>Description: {quizDescription}</h4>
      <ul className="quiz-detail-stats">
        <li>
          <h4>Total Questions: 5</h4>
        </li>
        <li>
          <h4>Time Limit: 60 seconds</h4>
        </li>
      </ul>
      <Link to={`/attempt`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default QuizDetail;
