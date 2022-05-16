import { useState, useEffect } from "react";
import vars from "../utility/vars";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Flashcard = (props) => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const question = props.question;

  useEffect(() => {
    const filterForRightAnswer = (q) => {
      let tempAnswer = q.answers.filter((answer) => {
        return answer.correct === true;
      });
      setCorrectAnswer(tempAnswer[0].answer);
    };
    filterForRightAnswer(question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flippy
      flipOnClick={true}
      flipDirection="horizontal"
      style={{
        marginLeft: `${vars.drawerWidth + 40}px`,
        marginTop: "100px",
        width: "600px",
        height: "350px",
        alignItems: "center",
      }}
    >
      <FrontSide
        style={{
          backgroundColor: "#eec8af",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {question.question}
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: "#ffcf8b",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {correctAnswer}
      </BackSide>
    </Flippy>
  );
};

export default Flashcard;
