let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";

let houses = new Image();
houses.src = '../img/houses.png';

let road = new Image();
road.src = '../img/road.png';
let roadX = 0, roadY = 265; 

let trees = new Image();
trees.src = '../img/trees.png';
let treeX = 0, treeY = -10;

let driver = new Image();
driver.src = `../img/${location.search.substring(1)}.png`;
let driverX = 20, driverY = 300;

let trash = new Image();
trash.src = '../img/trash.png';
let trashX = 400, trashY = 440;

let poli = new Image();
poli.src = '../img/pozilei.png';
let poliX = 700, poliY = 260;


function drawElements() {
  ctx.drawImage(houses, 0, 0)
  ctx.drawImage(road, roadX, roadY)
  ctx.drawImage(trees, treeX, treeY)
  ctx.drawImage(driver, driverX, driverY)
  ctx.drawImage(trash, trashX, trashY)
  ctx.drawImage(poli, poliX, poliY)
}

window.addEventListener('load', () => {
  drawElements();
});