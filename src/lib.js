// Array of words the user will guess
const WORDS = [
  "variable",
  "array",
  "modulus",
  "object",
  "function",
  "string",
  "boolean",
];

function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const LOSING_MESSAGE = "GAME OVER";
export const WINNING_MESSAGE = "YOU WON!!!🏆 ";

export function getRandomWord() {
  // Get a random index between '0' and '7'
  // Access the word at that index in the WORDS array
  return WORDS[getRandomInt(0, WORDS.length)];
}
