import { lossesP, resetBtn, seconds, startBtn, winsP, wordP } from "./dom";
import { getRandomWord } from "./lib";

function init() {
  const randomWord = getRandomWord();
  console.log(randomWord);
}

startBtn.addEventListener("click", () => {
  init();
});
