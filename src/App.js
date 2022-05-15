import Navbar from "./components/Navbar";
import Flashcard from "./components/Flashcard";
import Quiz from "./pages/Quiz";
import Welcome from "./pages/Welcome";
// import Question from "./components/Question";

const App = () => {
  const pageToDisplay = {
    welcome: true,
    quiz: false,
    flashSheet: false,
  };

  const filterQuestions = (tag, questions) => {
    let filteredQuestions = questions.filter((question) => {
      return question.tags.includes(tag);
    });
    console.log(filteredQuestions);
    return filteredQuestions;
  };
  return (
    <>
      <Navbar filterQuestions={filterQuestions} />
      {pageToDisplay.welcome ? (
        <Welcome />
      ) : pageToDisplay.quiz ? (
        <Quiz />
      ) : (
        <Flashcard />
      )}
    </>
  );
};

export default App;
