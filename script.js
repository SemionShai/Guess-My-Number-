let secretNumber = generateRandom();
let score = 20;
let highestScore = 0;
updateScore();

function updateScore() {
  document.querySelector("#score").innerHTML = `Score: ${score}`;
}

function generateRandom() {
  return Math.floor(Math.random() * 20 + 1);
}

function updateMessage(msg) {
  document.querySelector("#message").innerHTML = msg;
}

document.querySelector("#check-btn").addEventListener("click", () => {
  let inputNumber = +document.querySelector("#number-input").value;
  console.log("secretNumber- ", secretNumber);
  console.log("inputNumber- ", inputNumber);
  if (inputNumber > secretNumber) {
    updateMessage("Too high..");
    score--;
    updateScore();
  } else if (inputNumber < secretNumber) {
    updateMessage("Too low..");
    score--;
    updateScore();
  } else {
    updateMessage("Good Job!!");
    document.querySelector("body").style.backgroundColor = "#44bd32";
    document.querySelector("#secret-number").innerHTML = secretNumber;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(
        "#highest-score"
      ).innerHTML = `Highest Score: ${highestScore}`;
    }
  }
});

document.querySelector("#try-again-btn").addEventListener("click", () => {
  score = 20;
  secretNumber = generateRandom();
  updateMessage("Start Guessing");
  document.querySelector("body").style.backgroundColor = "#2f3640";
  document.querySelector("#secret-number").innerHTML = "?";
  document.querySelector("#number-input").value = null;
});
