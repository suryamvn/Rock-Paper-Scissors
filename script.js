const computerScore = document.querySelector(".computer_score1");
const userScore = document.querySelector(".user_score1");
const result = document.querySelector(".summary");
var cs = 0;
var us = 0;

const computerChoice = () => {
  const val = Math.floor(Math.random() * 3);
  return val;
};

const eval = (choice) => {
  const compChoice = computerChoice();
  switch (choice) {
    case 0:
      switch (compChoice) {
        case 0:
          result.innerHTML = "It is a tie!";
          break;
        case 1:
          cs++;
          result.innerHTML = "Computer Wins!";
          break;
        case 2:
          us++;
          result.innerHTML = "You Win!";
          break;
      }
      break;
    case 1:
      switch (compChoice) {
        case 1:
          result.innerHTML = "It is a tie!";
          break;
        case 2:
          cs++;
          result.innerHTML = "Computer Wins!";
          break;
        case 0:
          us++;
          result.innerHTML = "You Win!";
          break;
      }
      break;
    case 2:
      switch (compChoice) {
        case 2:
          result.innerHTML = "It is a tie!";
          break;
        case 0:
          cs++;
          result.innerHTML = "Computer Wins!";
          break;
        case 1:
          us++;
          result.innerHTML = "You Win!";
          break;
      }
      break;
  }
  computerScore.innerHTML = `${cs}`;
  userScore.innerHTML = `${us}`;
};

// console.log();
// paper = 0, scissors =1, rock=2
