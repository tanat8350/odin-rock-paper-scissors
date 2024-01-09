function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection = "";

  const playerSelectionParent = document.querySelector(
    "#player-selection-parent"
  );
  const divPlayerSelect = document.querySelector(".js-player-select");

  playerSelectionParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("js-player-rock")) {
      playerSelection = "Rock";
    } else if (target.classList.contains("js-player-paper")) {
      playerSelection = "Paper";
    } else if (target.classList.contains("js-player-scissors")) {
      playerSelection = "Scissors";
    }
    divPlayerSelect.textContent = `Player selected ${playerSelection}`;
    playRound();
  });

  function resetScore() {
    playerScore = 0;
    computerScore = 0;
  }

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
    const paraScore = document.querySelector(".js-score");

    // const playerCapitalized =
    //   playerSelection.charAt(0).toUpperCase() +
    //   playerSelection.slice(1).toLowerCase();

    if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
      playerScore++;
      paraScore.textContent = `Player: ${playerScore} Com: ${computerScore}
      You Win Player: ${playerSelection} Com: ${computerSelection}`;
    } else if (
      (playerSelection === "Scissors" && computerSelection === "Rock") ||
      (playerSelection === "Rock" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Scissors")
    ) {
      computerScore++;
      paraScore.textContent = `Player: ${playerScore} Com: ${computerScore}
      You Lose Player: ${playerSelection} Com: ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      paraScore.textContent = `Player: ${playerScore} Com: ${computerScore}
      TIES Player: ${playerSelection} Com: ${computerSelection}`;
    }

    function messageWinner(winner) {
      paraScore.innerHTML = `Winner is "${winner}" <br>
      (Player ${playerScore}:${computerScore} Computer) <br>
      The Scores will be reset.`;
      resetScore();
    }

    if (playerScore === 5) {
      messageWinner("Player");
      resetScore();
    } else if (computerScore === 5) {
      messageWinner("Computer");
      resetScore();
    }
  }
}

game();
