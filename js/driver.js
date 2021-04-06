class Driver {
  constructor() {
    this.driver = new Image();
    this.driver.src = `../img/${location.search.substring(1)}.png`;
  }

  animate(x, y) {
    ctx.drawImage(this.driver, x, y);
  }
}
