import React from "react";
import Flashcard from "../components/Flashcard";

const Flashsheet = (props) => {
  const questions = props.filteredFlashcardQuestions;
  return (
    <>
      {questions.map((question, index) => {
        return <Flashcard key={index} question={question} />;
      })}
    </>
  );
};

export default Flashsheet;
