class Background {
  constructor() {
    this.houses = new Image();
    this.houses.src = "../img/houses.png";
    this.housesX = 0;

    this.road = new Image();
    this.road.src = "../img/road.png";
    this.roadX = 0;

    this.trees = new Image();
    this.trees.src = "../img/trees.png";
    this.treesX = 0;
  }

  /*
    animateHouses(<num>)
    animate background image in a given speed

    returns nothing
  */
  animateHouses(speed = 0.5) {
    ctx.drawImage(this.houses, this.housesX, 0);
    ctx.drawImage(this.houses, this.housesX + this.houses.width, 0);
    this.housesX -= speed;

    if (this.housesX + this.houses.width < 0) this.housesX = 0;
  }

  /*
    animateRoad(<num>)
    animate foreground image in a given speed

    returns nothing
  */
  animateRoad(speed = 1) {
    ctx.drawImage(this.road, this.roadX, 0);
    ctx.drawImage(this.road, this.roadX + this.road.width, 0);
    this.roadX -= speed;

    if (this.roadX + this.road.width < 0) this.roadX = 0;
  }

  /*
    animateTrees(<num>)
    animate background image in a given speed

    returns nothing
  */
  animateTrees(speed = 1) {
    ctx.drawImage(this.trees, this.treesX, 0);
    ctx.drawImage(this.trees, this.treesX + this.trees.width, 0);
    this.treesX -= speed;

    if (this.treesX + this.trees.width < 0) this.treesX = 0;
  }

  /*
    animate(<num>)
    animate collection of images in a given speed

    returns nothing
  */
  animate(speed = 1) {
    this.animateHouses(speed / 2);
    this.animateRoad(speed);
    this.animateTrees(speed);
  }
}
