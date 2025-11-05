"use strict";

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementsound");
const gameOverSound = document.getElementById("gameoversound");

dodger.style.bottom = "190px";

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    movementSound.play();
  }

    if (e.key === "ArrowRight") {
    moveDodgerRight();
    movementSound.play();
  }

     if (e.key === "ArrowUp") {
    moveDodgerUp();
    movementSound.play();
  }

    if (e.key === "ArrowDown") {
    moveDodgerDown();
    movementSound.play();
  }

});

//move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }

  if (left <= 0) {
    playGameOverSound();
  }
}

// move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 5}px`;
  }

  if (left >= 360) {
    playGameOverSound();
  }
}

  // move dodger up
function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 5}px`;
  }

  if (bottom >= 380) {
    playGameOverSound();
  }
}

// move dodger down
function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 5}px`;
  }

  if (bottom <= 0) {
    playGameOverSound();
  }
}

function playMovementSound() {
    movementSound.currentTime = 0;
    movementSound.play();
}

function playGameOverSound() {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
}