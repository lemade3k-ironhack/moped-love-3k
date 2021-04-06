let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";

let background = new Background();
let driverX = 20, driverY = 375 - 150;
let driver = new Driver();
let barries = new Barri();

let speed = 2;
let intervalId = 0;
let isGameOver = false;

function initGame() {
  background.animate(speed);
  barries.animate(speed);
  driver.animate(driverX, driverY);

  if (barries.checkCollisions(driverX, driverY)) {
    location.href = "game-over.html";
  } else {
    intervalId = requestAnimationFrame(initGame);
  }
}

// event listeners for the drivers movements
document.addEventListener("keydown", (event) => {
  let driverH = 150;
  switch (event.code) {
    case "ArrowUp":
      if (driverY - 10 > 275 - driverH) driverY -= 10;
      break;
    case "ArrowDown":
      if (driverY + 10 < 575 - driverH) driverY += 10;
      break;
    case "ArrowRight":
      if (driverX < 300) {
        driverX += 10;
        speed += 0.2;
      }
      break;
    case "ArrowLeft":
      if (driverX > 20) {
        driverX -= 10;
        speed -= 0.2;
      }
      break;
  }
});

window.addEventListener("load", initGame);
