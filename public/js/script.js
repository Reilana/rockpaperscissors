// Score tracking - persists across rounds until the game is reset
let scorePlayer = 0;
let scoreComputer = 0;

// Cache DOM references once at load time rather than querying on every click
const rockBtn = document.querySelector("#btn-rock");
const paperBtn = document.querySelector("#btn-paper");
const scissorsBtn = document.querySelector("#btn-scissors");
const resetBtn = document.querySelector("#btn-reset");
const gameResult = document.querySelector("#game-result");   // sr-only aria-live region
const roundResult = document.querySelector("#round-result"); // visible result text
const scorePlayerSpan = document.querySelector("#score-player");
const scoreComputerSpan = document.querySelector("#score-computer");

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

  scorePlayerSpan.textContent = scorePlayer;
  scoreComputerSpan.textContent = scoreComputer;
  roundResult.textContent = result;
  gameResult.textContent = `${result}. Score: Player ${scorePlayer}, Computer ${scoreComputer}.`;

  // Lock the game once a player hits 5 wins and reveal the reset button
  if (scorePlayer === 5) {
    roundResult.textContent = "Game over — you win the match!";
    gameResult.textContent = "Game over. You win the match!";
    disableButtons();
    resetBtn.classList.remove("hidden");
  } else if (scoreComputer === 5) {
    roundResult.textContent = "Game over — the computer wins!";
    gameResult.textContent = "Game over. The computer wins!";
    disableButtons();
    resetBtn.classList.remove("hidden");
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
  scorePlayerSpan.textContent = 0;
  scoreComputerSpan.textContent = 0;
  roundResult.textContent = "";
  gameResult.textContent = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  resetBtn.classList.add("hidden");
}

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
resetBtn.addEventListener("click", resetGame);
