class Barri {
  constructor() {
    this.trash = new Image();
    this.trash.src = "../img/trash.png";

    this.poli = new Image();
    this.poli.src = "../img/pozilei.png";

    this.demo = new Image();
    this.demo.src = "../img/demo.png"

    this.images = [this.trash, this.trash, this.trash, this.demo, this.poli];

    this.roadMin = 275;
    this.roadMax = 575;
    this.gapX = this.random(360, canvas.width);
    this.barries = [
      {
        img: this.trash,
        x: canvas.width,
        y: this.random(
          this.roadMin - this.trash.height,
          this.roadMax - this.trash.height
        ),
      },
      {
        img: this.trash,
        x: canvas.width + this.gapX,
        y: this.random(
          this.roadMin - this.trash.height,
          this.roadMax - this.trash.height
        ),
      },
      {
        img: this.trash,
        x: canvas.width + 2 * this.gapX,
        y: this.random(
          this.roadMin - this.trash.height,
          this.roadMax - this.trash.height
        ),
      },
    ];

    this.driverW = 190;
    this.driverH = 150;
  }

  /*
    isCollision(<num>, <num>)
    detect a collision of the driver with a barricade

    returns <bolean>
  */
  isCollision(driverX, driverY) {
    let collission = false;
    this.barries.forEach((bar) => {
      if (
        driverX < bar.x + bar.img.width &&
        driverX + this.driverW > bar.x &&
        driverY + 50 < bar.y + bar.img.height &&
        driverY + this.driverH > bar.y + 20
      ) {
        collission = true;
      }
    });
    return collission;
  }

  /*
    animate(<num>)
    animate a baricade in the canvas with the given speed
    redraw random baricade after baricade is out of canvas

    returns nothing
  */
  animate(speed = 1) {
    this.barries.forEach((bar, i) => {
      ctx.drawImage(bar.img, bar.x, bar.y);
      bar.x -= speed;

      if (bar.x + bar.img.width < 0) {
        let randImg = this.images[this.random(0, this.images.length)];

        this.barries[i] = {
          img: randImg,
          x: canvas.width + this.gapX,
          y: this.random(
            this.roadMin - randImg.height,
            this.roadMax - randImg.height
          ),
        };
      }
    });
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
