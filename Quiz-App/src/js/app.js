import Quiz from "./quiz";
import Questions from "./questions";

const questions = new Questions();
const quiz = new Quiz();

document.querySelector("#start").addEventListener("click", () => {
  quiz.init();
});
