import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";
import Welcome from "./pages/Welcome";
import { useState } from "react";
import Flashsheet from "./pages/Flashsheet";
import { Outlet } from "react-router-dom";

const App = () => {
  const [pageToDisplay, setPageToDisplay] = useState("welcome");
  const [filteredQuizQuestions, setFilteredQuizQuestions] = useState([]);
  const [filteredFlashcardQuestions, setFilteredFlashcardQuestions] = useState(
    []
  );

  // Filter for Quiz questions
  const filterQuizQuestions = (tag, questions) => {
    let questionFilter = questions.filter((question) => {
      return question.tags.includes(tag);
    });
    setFilteredQuizQuestions(questionFilter);
  };

  // Filter for Flashcard questions
  const filterFlashcardQuestions = (tag, questions) => {
    let questionFilter = questions.filter((question) => {
      return question.tags.includes(tag) && question.flashcard !== null;
    });
    setFilteredFlashcardQuestions(questionFilter);
  };
  return (
    <>
      <Navbar
        setPageToDisplay={setPageToDisplay}
        filterQuizQuestions={filterQuizQuestions}
        filterFlashcardQuestions={filterFlashcardQuestions}
      />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default App;
