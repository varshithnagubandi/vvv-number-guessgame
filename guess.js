let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
let guessCount = 0; // Initialize guess counter

function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  guessCount++; // Increment guess count on each attempt

  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "green";
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "green";
  } else if (guessedNumber === randomNumber) {
    gameResult.textContent = `Congratulations! You got it right in ${guessCount} guesses.`;
    gameResult.style.backgroundColor = "green";
  } else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "green";
  }
}
