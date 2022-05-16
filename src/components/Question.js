import * as React from "react";
import Box from "@mui/material/Box";
import vars from "../utility/vars";
import {
  Checkbox,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Divider,
} from "@mui/material";

const Question = (props) => {
  const question = props.question;
  return (
    <Box
      sx={{
        width: 600,
        height: 350,
        backgroundColor: "lightblue",
        ml: `${vars.drawerWidth + 40}px`,
        mt: `100px`,
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      {question.tags.includes("multiple_selection") ? (
        <FormControl sx={{ margin: "15px" }}>
          <FormLabel
            sx={{ color: "black !important", marginBottom: "10px" }}
            id={question.question}
          >
            {question.question}
          </FormLabel>
          <RadioGroup
            aria-labelledby="multiple_selection_question_group"
            name="multiple_selection_question_group"
          >
            {question.answers.map((answer, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={answer.answer}
                  control={<Checkbox />}
                  label={answer.answer}
                  sx={{}}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      ) : (
        <FormControl sx={{ margin: "15px" }}>
          <FormLabel
            sx={{ color: "black !important", marginBottom: "10px" }}
            id={question.question}
          >
            {question.question}
          </FormLabel>
          <Divider />
          <RadioGroup
            aria-labelledby="multiple_choice_question_group"
            name="multiple_choice_question_group"
          >
            {question.answers.map((answer, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={answer.answer}
                  control={<Radio />}
                  label={answer.answer}
                  sx={{}}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      )}
    </Box>
  );
};

export default Question;
