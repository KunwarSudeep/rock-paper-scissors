const scores = {
  wins: 0,
  loses: 0,
  tie: 0,
};

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
  const yourMove = condition;
  let result;

  if (computerMove === yourMove) {
    result = "Tie.";
  } else if (
    (yourMove === "rock" && computerMove === "scissors") ||
    (yourMove === "paper" && computerMove === "rock") ||
    (yourMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win";
  } else {
    result = "You loose";
  }

  if (result === "You win") {
    scores.wins += 1;
  } else if (result === "You loose") {
    scores.loses += 1;
  } else {
    scores.tie += 1;
  }

  alert(`You picked ${yourMove}. Computer picked ${computerMove}. ${result}
    Win: ${scores.wins}, Lose: ${scores.loses}, Tie: ${scores.tie}`);
}

function reset() {
  scores.wins = 0;
  scores.loses = 0;
  scores.tie = 0;
}
