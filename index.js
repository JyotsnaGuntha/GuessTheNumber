let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
let attemptsCountElement = document.getElementById("attemptsCount");

attemptsCountElement.textContent = 0;

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
        attemptsCountElement.textContent = parseInt(attemptsCountElement.textContent) + 1;
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
        attemptsCountElement.textContent = parseInt(attemptsCountElement.textContent) + 1;
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provide a valid user input.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}
