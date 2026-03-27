// Score tracking - persists across rounds until the game is reset
let scorePlayer = 0;
let scoreComputer = 0;

// Cache DOM references once at load time rather than querying on every click
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const resetBtn = document.querySelector("#reset");

// Compares both choices and returns a result string
// The returned string is also used by handleClick to detect wins/losses via startsWith
function playRound(playerSelection, computerSelection) {
  let playerInput = playerSelection.toLowerCase();
  let computerInput = computerSelection.toLowerCase();

  if (playerInput === computerInput) {
    return "It's a tie!";
  } else if (playerInput === "rock" && computerInput === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerInput === "paper" && computerInput === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerInput === "scissors" && computerInput === "paper") {
    return "You win! Scissors beats Paper";
  } else {
    return "You lose";
  }
}

// Returns a random choice for the computer each round
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Called on every button click — plays a round, updates the score display,
// and ends the match when either player reaches 5 wins
function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  if (result.startsWith("You win")) {
    scorePlayer++;
  } else if (result.startsWith("You lose")) {
    scoreComputer++;
  }

  resultsDiv.textContent = `${result} (Player: ${scorePlayer} - Computer: ${scoreComputer})`;

  // Lock the game once a player hits 5 wins and reveal the reset button
  if (scorePlayer === 5) {
    resultsDiv.textContent = "GAME OVER! YOU WIN THE MATCH!";
    disableButtons();
    resetBtn.style.display = "block";
  } else if (scoreComputer === 5) {
    resultsDiv.textContent = "GAME OVER! THE COMPUTER WINS!";
    disableButtons();
    resetBtn.style.display = "block";
  }
}

// Prevents the player from clicking after the match has ended
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Resets scores, clears the display, and re-enables buttons for a new match
function resetGame() {
  scorePlayer = 0;
  scoreComputer = 0;
  resultsDiv.textContent = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  resetBtn.style.display = "none";
}

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
resetBtn.addEventListener("click", resetGame);
