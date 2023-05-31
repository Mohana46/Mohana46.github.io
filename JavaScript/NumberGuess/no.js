"use strict";
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number ✔🎉";
document.querySelector(".number").textContent = 6;
document.querySelector(".guess").value = 4;
console.log(document.querySelector(".guess").value);*/
/*document.querySelector(".check").addEventListener("click", function () {
 document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ";
  }
});
 */
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;

function printFunction() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔️ ";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉 ";

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".highscore").textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high 📈 ";

      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 💥";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = " Too Low 📉";

      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 💥";
    }
  }
}

function returnFunction() {
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = 10;
  document.querySelector(".highscore").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
}
