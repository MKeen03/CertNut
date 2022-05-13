import React from "react";
import questions from "../utility/questions";
import Question from "../components/Question";

const Quiz = () => {
  return (
    <>
      {questions.map((question, index) => {
        return <Question />;
      })}
    </>
  );
};

export default Quiz;
