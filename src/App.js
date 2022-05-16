import Navbar from "./components/Navbar";
import Flashcard from "./components/Flashcard";
import Quiz from "./pages/Quiz";
import Welcome from "./pages/Welcome";
import { useState } from "react";
// import Question from "./components/Question";

const App = () => {
  const [pageToDisplay, setPageToDisplay] = useState("welcome");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const filterQuestions = (tag, questions) => {
    let questionFilter = questions.filter((question) => {
      return question.tags.includes(tag);
    });
    console.log(questionFilter);
    setFilteredQuestions(questionFilter);
  };
  return (
    <>
      <Navbar
        setPageToDisplay={setPageToDisplay}
        filterQuestions={filterQuestions}
      />
      {pageToDisplay === "welcome" ? (
        <Welcome />
      ) : pageToDisplay === "quiz" ? (
        <Quiz filteredQuestions={filteredQuestions} />
      ) : (
        <Flashcard />
      )}
    </>
  );
};

export default App;
