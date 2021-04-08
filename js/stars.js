class Star {
  constructor() {
    this.star = new Image();
    this.star.src = "../img/star.png";

    this.roadMin = 275;
    this.roadMax = 575;

    this.gapX = this.random(360, canvas.width);
    this.stars = [
      {
        x: canvas.width + this.gapX,
        y: this.random(this.roadMin - 50, this.roadMax - 50),
      },
      {
        x: 2 * canvas.width + this.gapX,
        y: this.random(this.roadMin - 50, this.roadMax - 50),
      },
    ];

    this.driverW = 190;
    this.driverH = 150;
  }

  /*
    isCollision(<num>, <num>)
    detect a collision of the driver with a star

    returns <bolean>
  */
  isCollision(driverX, driverY) {
    let collission = false;
    this.stars.forEach((star) => {
      if (
        driverX < star.x + this.star.width &&
        driverX + this.driverW > star.x &&
        driverY < star.y + this.star.height &&
        driverY + this.driverH > star.y
      ) {
        collission = true;
      }
    });
    return collission;
  }

  /*
    animate(<num>, <num>, <num>)
    animate a star in the canvas with the given speed
    redraw star at random position after collision is detected or
    if star is out of canvas. Return how many stars where hit.

    return <num>
  */
  animate(speed = 1, driverX, driverY) {
    let hitStar = false;
    let newStar = {
      x: 2 * canvas.width + this.gapX,
      y: this.random(this.roadMin - 50, this.roadMax - 50),
    };

    this.stars.forEach((star, i) => {
      ctx.drawImage(this.star, star.x, star.y);
      star.x -= speed;

      if (this.isCollision(driverX, driverY)) {
        this.stars[i] = newStar;
        hitStar = true;
      } else if (star.x + this.star.width < 0) {
        this.stars[i] = newStar;
      }
    });
    return hitStar;
  }

  /* 
    random(<num>, <num>)
    returns a random number between given min and max

    return <num>
  */
  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
