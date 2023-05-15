import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./QuizResult.css";

const QuizResult = () => {
  const location = useLocation();
  const { score, timeTaken } = location.state;

  return (
    <div className="quiz-result-container">
      <h2>Quiz Result</h2>
      <div className="fireworks">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>

        <div className="firework"></div>
      </div>
      <img
        className="boyImage"
        src="https://static.vecteezy.com/system/resources/previews/006/634/891/original/cartoon-a-boy-waving-hand-free-vector.jpg"
        alt=""
      />
      <h2>Karma Point Earn: {score * 10}</h2>

      <h2>Time Taken: {timeTaken} seconds</h2>
      <Link to={`/`}>
        <button>Home</button>
      </Link>

      <div className="fireworks">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
      </div>
    </div>
  );
};

export default QuizResult;
