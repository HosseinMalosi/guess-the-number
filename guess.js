"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector("#check").addEventListener("click", function () {
  const guess = document.querySelector("#guess").value;

  //when fild is empty
  if (!guess) {
    document.querySelector("#message").textContent = "😒 No Number";
  } /*when guess is correct */ else if (guess == secretNumber) {
    document.querySelector("#message").textContent = " Correct Number ";
    document.querySelector("body").style.backgroundColor = "#4AB051";
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore").textContent = highscore;
    }
  } /*when guess is wrong */ else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector("#message").textContent = "💥 You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  score = 20;
  document.querySelector("#score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#secret_number").textContent = "?";
  document.querySelector("#message").textContent = "Start Guessing ...";
  document.querySelector("body").style.backgroundColor = "#333333";
});
