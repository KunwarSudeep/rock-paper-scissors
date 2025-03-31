function check() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function compare(condition) {
  const computerMove = check();
  const checking = condition;
  let result;

  if (computerMove === checking) {
    result = "Tie.";
  } else if (
    (checking === "rock" && computerMove === "scissors") ||
    (checking === "paper" && computerMove === "rock") ||
    (checking === "scissors" && computerMove === "paper")
  ) {
    result = "You win";
  } else {
    result = "Computer wins";
  }

  alert(`You picked ${checking}. Computer picked ${computerMove}. ${result}`);
}
