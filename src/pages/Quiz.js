import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import allQuestions from "../utility/questions";
import vars from "../utility/vars";
import Loader from "../components/Loader";

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let tempQuestions = vars.filterForQuizQuestions(
      "solutions_architect_associate",
      allQuestions
    );
    console.log(tempQuestions);
    setQuestions(tempQuestions);
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (<Loader />) : questions.map((question, index) => {
        return <Question key={index} question={question} />;
      })}
    </>
  );
};

export default Quiz;
