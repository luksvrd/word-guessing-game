import { startBtn, wordP } from "./dom";
import { getRandomWord } from "./lib";

// Only globally scope, if necessary for multiple functions in this file
let randomWord = "";
let wordDisplay = "";

function handleKeyDown(event) {
  manageWordDisplay(event.key);
}

function manageWordDisplay(letter) {
  // TODO: Check the key pressed against the random word
  // TODO: If the key pressed is in the random word, update the word display
  randomWord.split("").forEach((char, index) => {
    if (char === letter.toLowerCase()) {
      console.log(wordDisplay);

      wordDisplay.split()[index] = letter;

      console.log(wordDisplay);
    }
  });
}

function init() {
  randomWord = getRandomWord();
  wordDisplay = randomWord.replace(/./g, "_");

  wordP.textContent = wordDisplay;
}

startBtn.addEventListener("click", () => {
  init();
});

document.addEventListener("keydown", handleKeyDown);
