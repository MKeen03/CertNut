import * as React from "react";
import vars from "../utility/vars";
import questions from "../utility/questions";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { createTheme, ThemeProvider, } from '@mui/material/styles';

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
          backgroundColor: "#eec8af",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {question.question}
      </FrontSide>
      <BackSide style={{ backgroundColor: "#ffcf8b" }}>
        {question.answers[0].answer}
      </BackSide>
    </Flippy>
  );
};

export default Flashcard;
