import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizAttempt.css";

const QuizAttempt = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds

  useEffect(() => {
    // Fetch quiz questions from an API or define them locally
    // Update the `questions` state with the fetched questions
    const fetchedQuestions = [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris",
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Mars",
      },
      // Add more questions here...
    ];

    setQuestions(fetchedQuestions);
    setAnswers(Array(fetchedQuestions.length).fill(""));
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(countdown);
      handleSubmit();
    }

    return () => clearInterval(countdown);
  }, [timeRemaining]);

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };

  const handleSubmit = () => {
    const score = questions.reduce((totalScore, question, index) => {
      if (question.correctAnswer === answers[index]) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);

    navigate("/result", { state: { score, timeTaken: 60 - timeRemaining } });
  };

  return (
    <div className="quiz-attempt-container">
      <h2>Quiz Attempt</h2>
      <div>
        {questions.map((question, index) => (
          <div key={question.id}>
            <h3>Question {index + 1}</h3>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option) => (
                <li key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleAnswerSelection(index, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <p>Time Remaining: {timeRemaining} seconds</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizAttempt;
