import React, { useEffect, useState } from "react";
import Flashcard from "../components/Flashcard";
import allQuestions from "../utility/questions";
import vars from "../utility/vars";
import Loader from "../components/Loader";

const Flashsheet = (props) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let tempQuestions = vars.filterFlashcardQuestions(
      "solutions_architect_associate",
      allQuestions
    );
    setQuestions(tempQuestions);
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (<Loader />) :questions.map((question, index) => {
        return <Flashcard key={index} question={question} />;
      })}
    </>
  );
};

export default Flashsheet;
