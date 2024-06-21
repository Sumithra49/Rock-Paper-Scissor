let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  displayResult(playerChoice, computerChoice, result);

  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  updateScoreboard();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function displayResult(playerChoice, computerChoice, result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. You ${result}.`;
}

function updateScoreboard() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
