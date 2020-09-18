export default class Quiz {
  constructor(config) {
    this.questions = config.questions;
    this.questionsContainer = config.questionsConainer;
    this.resultContainer = config.resultContainer;
  }
  init() {
    this.displayQuestions();
    this.resultContainer.innerHTML = "";
  }
  // display Questions functions
  displayQuestions() {
    let output = "";
    this.questions.forEach((question, questionNumber) => {
      output += `
      <div class="card border-primary">
       <div class="card-header">
        Quiz ${questionNumber + 1}
       </div>
       <div class="card-body">
        <h5 class="card-title">${question.title}</h5>
        <div class="form-group userAnswers">
          <span class="badge badge-success hide">Correct</span>
          <span class="badge badge-danger hide">Not Correct</span>
        ${this.displayAnswers(question.answers, questionNumber)}
        </div>
       </div>
     </div>
      `;
    });

    this.questionsContainer.innerHTML = output;
  }

  // display questions Answer Function
  displayAnswers(answers, questionNumber) {
    let output = "";
    let key;
    for (key in answers) {
      output += `
        <div class="custom-control custom-radio">
          <input
            type="radio" 
            id="q${questionNumber}${key}"
            name="q${questionNumber}" 
            class="custom-control-input"
            value="${key}"
          />
          <label
          for="q${questionNumber}${key}" 
          class="custom-control-label"
          >
          ${answers[key]} 
          </label>
        </div>
    `;
    }
    return output;
  }

  collectUserAnswers() {
    const userAnswers = document.querySelectorAll(".userAnswers");
    let currentAnswers = "";
    let correctAnswers = 0;

    this.questions.forEach((question, questionIndex) => {
      currentAnswers = userAnswers[questionIndex].querySelector(
        "input[type=radio]:checked"
      ).value;

      if (currentAnswers === question.correctAnswer) {
        correctAnswers += 1;
        userAnswers[questionIndex]
          .querySelector(".badge-success")
          .classList.remove("hide");
      } else {
        userAnswers[questionIndex]
          .querySelector(".badge-danger")
          .classList.remove("hide");
      }
    });

    this.displayResult(correctAnswers);
  }

  displayResult(correctAnswers) {
    this.resultContainer.innerHTML = `
    <h1 class="text-center" id='result'>${correctAnswers}/${this.questions.length}</h1>`;
  }
}
