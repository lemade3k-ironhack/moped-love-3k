let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";

let background = new Background();
let driverX = 20, driverY = 375 - 150;
let driver = new Driver();
let barries = new Barri();
let stars = new Star();
let timer = new Timer();

let speed = 2;
let starsCount = 0;

let toogleMusicBtn = document.querySelector('#volume i')
let gameMusic = new Audio("../audio/01_Why Can't We Say.mp3")

let intervalId = 0;
let isGameOver = false;

function initGame() {
  speed = timer.updateLevel(speed);
  background.animate(speed);
  starsCount += stars.animate(speed, driverX, driverY);
  barries.animate(speed);
  driver.animate(driverX, driverY);
  timer.animate(speed, starsCount);

  if (barries.isCollision(driverX, driverY)) {
    timer.storeScore(starsCount);
    location.href = "game-over.html";
  } else {
    intervalId = requestAnimationFrame(initGame);
  }
}

function moveDriver(event) {
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
}

function toogleMusic() { 
  if (toogleMusicBtn.classList.contains('uil-volume-mute')) {
    gameMusic.pause()
    toogleMusicBtn.classList.remove('uil-volume-mute')
    toogleMusicBtn.classList.add('uil-volume-up')
  } else if (toogleMusicBtn.classList.contains('uil-volume-up')) {
    gameMusic.play()
    toogleMusicBtn.classList.remove('uil-volume-up')
    toogleMusicBtn.classList.add('uil-volume-mute')
  }
}

window.addEventListener("load", () => {
  initGame();
  timer.start();

  // event listeners for the drivers movements
  document.addEventListener("keydown", (event) => moveDriver(event));
  
  // toggle music
  gameMusic.play()
  gameMusic.loop = true
  toogleMusicBtn.addEventListener("click", toogleMusic)
});
