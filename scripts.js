function game() {
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);

    return randomChoice === 0
      ? "Rock"
      : randomChoice === 1
      ? "Paper"
      : "Scissors";
  }

  function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Select Rock, Paper or Scissors");
    const playerCapitalized =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase();

    if (
      (playerCapitalized === "Rock" && computerSelection === "Scissors") ||
      (playerCapitalized === "Scissors" && computerSelection === "Paper") ||
      (playerCapitalized === "Paper" && computerSelection === "Rock")
    ) {
      playerScore++;
      console.log(`Player: ${playerScore} Com: ${computerScore}
      You Win Player: ${playerCapitalized} Com: ${computerSelection}`);
      return `You Win! ${playerCapitalized} beats ${computerSelection}`;
    } else if (
      (playerCapitalized === "Scissors" && computerSelection === "Rock") ||
      (playerCapitalized === "Rock" && computerSelection === "Paper") ||
      (playerCapitalized === "Paper" && computerSelection === "Scissors")
    ) {
      computerScore++;
      console.log(`Player: ${playerScore} Com: ${computerScore}
      You Lose Player: ${playerCapitalized} Com: ${computerSelection}`);
      return `You Lose! ${computerSelection} beats ${playerCapitalized}`;
    } else if (playerCapitalized === computerSelection) {
      console.log(`Player: ${playerScore} Com: ${computerScore}
      TIES Player: ${playerCapitalized} Com: ${computerSelection}`);
      return "TIES";
    }
    console.log(`Player: ${playerScore} Com: ${computerScore}`);
  }
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(`Final Score
  Player: ${playerScore} Com: ${computerScore}`);
}

game();
