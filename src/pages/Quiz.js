import React from "react";
import Question from "../components/Question";

const Quiz = (props) => {
  const questions = props.filteredQuizQuestions;
  return (
    <>
      {questions.map((question, index) => {
        return <Question key={index} question={question} />;
      })}
    </>
  );
};

export default Quiz;
