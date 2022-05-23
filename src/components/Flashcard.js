import { useState, useEffect } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import flipfront from "../assets/flipfront.PNG";
import flipback from "../assets/flipback.png";

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
        width: "600px",
        height: "350px",
        alignItems: "center",
        borderRadius: "30px",
        boxShadow: 12,
        marginTop: "40px",
      }}
    >
      <FrontSide
        style={{
          backgroundImage: `url(${flipfront})`,
          backgroundColor: "#15013f",
          borderRadius: "30px",
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: "large",
          textAlign: "center",
        }}
      >
        {question.question}
      </FrontSide>
      <BackSide
        style={{
          backgroundImage: `url(${flipback})`,
          backgroundColor: "#31055a",
          borderRadius: "30px",
          color: "#31055a",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: "large",
        }}
      >
        {correctAnswer}
      </BackSide>
    </Flippy>
  );
};

export default Flashcard;
