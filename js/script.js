// 1. Create variables to track score (Global Scope)
let scorePlayer = 0;
let scoreComputer = 0;

// 2. Create nodes (references) to the HTML elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const resetBtn = document.querySelector("#reset");

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

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  
  // Update the Results Div with the text result
  resultsDiv.textContent = result;

  // Update Scores (using your existing logic)
  if (result.startsWith("You win")) {
    scorePlayer++;
  } else if (result.startsWith("You lose")) {
    scoreComputer++;
  }

  // Update the Score Display
  resultsDiv.textContent += ` (Player: ${scorePlayer} - Computer: ${scoreComputer})`;

  // Check for a winner (First to 5)
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

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function resetGame() {
  // 1. Reset Global Scores
  scorePlayer = 0;
  scoreComputer = 0;

  // 2. Reset UI Text
  resultsDiv.textContent = "";
  
  // 3. Re-enable Buttons
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  // 4. Hide the Reset Button again
  resetBtn.style.display = "none";
}

// 3. Create click listeners for the buttons
rockBtn.addEventListener("click", () => {
  handleClick("rock");
});

paperBtn.addEventListener("click", () => {
  handleClick("paper");
});

scissorsBtn.addEventListener("click", () => {
  handleClick("scissors");
});

resetBtn.addEventListener("click", resetGame);
