import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import allQuestions from "../utility/questions";
import vars from "../utility/vars";
import Loader from "../components/Loader";
import Button from "@mui/material/Button";

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [variant, setVariant] = useState("contained");

  useEffect(() => {
    let tempQuestions = vars.filterForQuizQuestions(
      "solutions_architect_associate",
      allQuestions
    );
    console.log(tempQuestions);
    setQuestions(tempQuestions);
    setLoading(false);
  }, []);

  const styleSheet = {
    buttons: { ml: `35px`, mt: "15px" },
  };

  return (
    <>
      <p>Apply Filters:</p>
      <Button sx={styleSheet.buttons} variant="outlined">
        Easy
      </Button>
      <Button sx={styleSheet.buttons} variant="outlined">
        Medium
      </Button>
      <Button sx={styleSheet.buttons} variant="outlined">
        Hard
      </Button>
      {loading ? (
        <Loader />
      ) : (
        questions.map((question, index) => {
          return <Question key={index} question={question} />;
        })
      )}
    </>
  );
};

export default Quiz;
