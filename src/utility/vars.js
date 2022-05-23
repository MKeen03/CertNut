const vars = {
  drawerWidth: 350,

  filterForQuizQuestions: (tag, questions) => {
    console.log(tag, questions);
    let questionFilter = questions.filter((question) => {
      return question.tags.includes(tag);
    });
    console.log(questionFilter);
    return questionFilter;
  },

  filterFlashcardQuestions: (tag, questions) => {
    let questionFilter = questions.filter((question) => {
      return question.tags.includes(tag) && question.flashcard !== null;
    });
    return questionFilter;
  },

  navigationHeader: "Welcome",
};

export default vars;
