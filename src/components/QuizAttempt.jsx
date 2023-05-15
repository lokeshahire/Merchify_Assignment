import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizAttempt.css";

const QuizAttempt = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds

  useEffect(() => {
    const fetchedQuestions = [
      {
        id: 1,
        question: "Who Is Prime Minister of India ?",
        options: [
          "Narendra Modi",
          "Amit Shaha",
          "Rahul Gandhi",
          "Uddhav Thakare",
        ],
        correctAnswer: "Narendra Modi",
      },
      {
        id: 2,
        question: "Which is the capital city of India ?",
        options: ["Mumbai", "Delhi", "Pune", "Kolkata"],
        correctAnswer: "Delhi",
      },
      {
        id: 3,
        question: "The World Largest desert is ?",
        options: ["Thar", "Kalahari", "Sahara", "Sonoran"],
        correctAnswer: "Sahara",
      },
      {
        id: 4,
        question: "Mount Everest is located in ?",
        options: ["India", "Nepal", "Tibet", "China"],
        correctAnswer: "Nepal",
      },
      {
        id: 5,
        question: "The largest river in India is ?",
        options: ["Yamuna", "Kaveri", "Ganga", "Bramaputra"],
        correctAnswer: "Ganga",
      },
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

  const handleAnswerSelection = (selectedAnswer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      handleSubmit();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = () => {
    const isAnyQuestionUnanswered = answers.some((answer) => answer === "");
    if (isAnyQuestionUnanswered) {
      alert("Please answer all the questions before submitting.");
      return;
    }

    const score = questions.reduce((totalScore, question, index) => {
      if (question.correctAnswer === answers[index]) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);

    navigate("/result", { state: { score, timeTaken: 60 - timeRemaining } });
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={{ marginTop: "-0px" }} className="quiz-attempt-container">
      <h2>Quiz Attempt</h2>
      <div className="timeRemain">{timeRemaining} seconds</div>
      {currentQuestion && (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={answers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {/* <button onClick={handleNextQuestion}>Next Question</button> */}
          <div className="button-container">
            <button
              className="previous-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="next-button"
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <div>{/* <p>Time Remaining: {timeRemaining} seconds</p> */}</div>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default QuizAttempt;
