class Driver {
  constructor() {
    this.character = location.search.substring(1) || 'driver1' 
    this.driver = new Image();
    this.driver.src = `../img/${this.character}.png`;
  }

  /*
    animate(<num>, <num>)
    animate the driver image on a given position

    returns nothing
  */
  animate(x, y) {
    ctx.drawImage(this.driver, x, y);
  }
}
