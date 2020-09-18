import Quiz from "./quiz";
import Questions from "./questions";
const submitEl = document.querySelector("#submit");

const startElement = document.querySelector("#start");

const questionsclass = new Questions();

const quiz = new Quiz({
  questions: questionsclass.questions,
  questionsConainer: document.querySelector(".card-container"),
  resultContainer: document.querySelector("#result"),
});

startElement.addEventListener("click", (e) => {
  quiz.init();
  e.target.classList.add("hide");
  submitEl.classList.remove("hide");
});

submitEl.addEventListener("click", (e) => {
  e.target.classList.add("hide");
  startElement.textContent = "Try Again";
  startElement.classList.toggle("hide");
  quiz.collectUserAnswers();
});
