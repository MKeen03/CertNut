import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import allQuestions from "../utility/questions";
import vars from "../utility/vars";

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let tempQuestions = vars.filterForQuizQuestions(
      "solutions_architect_associate",
      allQuestions
    );
    console.log(tempQuestions);
    setQuestions(tempQuestions);
  }, []);
  return (
    <>
      {questions.map((question, index) => {
        return <Question key={index} question={question} />;
      })}
    </>
  );
};

export default Quiz;
