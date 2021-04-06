class Barri {
  constructor() {
    this.trash = new Image();
    this.trash.src = "../img/trash.png";

    this.poli = new Image();
    this.poli.src = "../img/pozilei.png";

    this.images = [this.trash, this.trash, this.trash, this.poli];

    this.roadMin = 275;
    this.roadMax = 575;
    this.gapX = this.random(360, canvas.width);
    this.barries = [
      {
        img: this.trash,
        x: canvas.width,
        y: this.random(this.roadMin - this.trash.height, this.roadMax - this.trash.height),
      },
      {
        img: this.trash,
        x: canvas.width + this.gapX,
        y: this.random(this.roadMin - this.trash.height, this.roadMax - this.trash.height),
      },
      {
        img: this.trash,
        x: canvas.width + 2 * this.gapX,
        y: this.random(this.roadMin - this.trash.height, this.roadMax - this.trash.height),
      },
    ];

    this.driverW = 190;
    this.driverH = 150;
  }

  checkCollisions(driverX, driverY) {
    let collission = false;
    this.barries.forEach(bar => {
      if(driverX < bar.x + bar.img.width && 
         driverX + this.driverW > bar.x && 
         driverY + 50 < bar.y + bar.img.height &&
         driverY + this.driverH > bar.y + 20 ) {
           collission = true
         }
    });
    return collission;
  }

  animate(speed = 1) {
    for (let i = 0; i < this.barries.length; i++) {
      ctx.drawImage(this.barries[i].img, this.barries[i].x, this.barries[i].y);
      this.barries[i].x -= speed;
  
      if (this.barries[i].x + this.barries[i].img.width < 0) {
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
    } 
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
