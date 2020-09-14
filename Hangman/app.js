// Main Var
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.classList.add("letter-box");
  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNumber];

document.querySelector(
  ".game-info .category span"
).textContent = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let letterAndSpace = Array.from(randomValueName);

letterAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    emptySpan.classList.add("with-space");
  }

  lettersGuessContainer.appendChild(emptySpan);
});

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

let guessSpan = document.querySelectorAll(".letters-guess span");
// Handle Clicking on letter
document.addEventListener("click", (e) => {
  // Set The Choose Status
  let theStatus = false;

  if (e.target.classList.contains("letter-box")) {
    e.target.classList.add("clicked");
    let theChoseWord = Array.from(randomValueName.toLowerCase());
    // get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    theChoseWord.forEach((wordLetter, wordIndex) => {
      theStatus = true;
      if (theClickedLetter == wordLetter) {
        // loop in all guess span
        guessSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = wordLetter;
          }
        });
      }
    });

    if (theStatus !== true) {
      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);
    }
  }
});
