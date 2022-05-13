import * as React from "react";
import vars from "../utility/vars";
import questions from "../utility/questions";
import Flippy, { FrontSide, BackSide } from "react-flippy";

let question = questions[Math.floor(Math.random() * questions.length)];

const Flashcard = () => {
  return (
    <Flippy
      flipOnHover={true}
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
          backgroundColor: "#41669d",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {question.question}
      </FrontSide>
      <BackSide style={{ backgroundColor: "#175852" }}>
        {question.answers[0].answer}
      </BackSide>
    </Flippy>
  );
};

export default Flashcard;
