import "./App.css";
import QuizDetail from "./components/QuizDetail";
import QuizAttempt from "./components/QuizAttempt";
import QuizResult from "./components/QuizResult";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuizDetail />} />
        <Route path="/attempt" element={<QuizAttempt />} />
        <Route path="/result" element={<QuizResult />}></Route>
      </Routes>
    </div>
  );
}

export default App;
