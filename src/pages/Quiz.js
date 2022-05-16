import React from "react";
import Question from "../components/Question";

const Quiz = (props) => {
  const questions = props.filteredQuestions;
  return (
    <>
      {questions.map((question, index) => {
        return <Question question={question} />;
      })}
    </>
  );
};

export default Quiz;
