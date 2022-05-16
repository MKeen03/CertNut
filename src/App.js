import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";
import Welcome from "./pages/Welcome";
import { useState } from "react";
import Flashsheet from "./pages/Flashsheet";

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
      {pageToDisplay === "welcome" ? (
        <Welcome />
      ) : pageToDisplay === "quiz" ? (
        <Quiz filteredQuizQuestions={filteredQuizQuestions} />
      ) : (
        <Flashsheet filteredFlashcardQuestions={filteredFlashcardQuestions} />
      )}
    </>
  );
};

export default App;
