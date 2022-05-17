import React, { useEffect, useState } from "react";
import Flashcard from "../components/Flashcard";
import allQuestions from "../utility/questions";
import vars from "../utility/vars";

const Flashsheet = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let tempQuestions = vars.filterFlashcardQuestions(
      "solutions_architect_associate",
      allQuestions
    );
    setQuestions(tempQuestions);
  }, []);
  return (
    <>
      {questions.map((question, index) => {
        return <Flashcard key={index} question={question} />;
      })}
    </>
  );
};

export default Flashsheet;
