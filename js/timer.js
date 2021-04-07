class Timer {
  constructor() {
    this.timerId = 0;
    window.timer = 0;

    this.levels = ["Novice", "Passable", "Speeder", "Formel 750", "Insane"];
    this.level = this.levels[0];
  }

  start() {
    this.timerId = setInterval(() => window.timer++, 1000);
  }

  updateBoard(speed) {
    return `Time: ${this.printTime()} - Speed: ${Math.floor(speed * 10)}Km/H - Level: ${this.level}`;
  }

  animate(speed) {
    ctx.fillStyle = "#000";
    ctx.fillRect(canvas.width / 2 - 200, 0, 400, 25);
    ctx.font = "19px calibri";
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.fillText(this.updateBoard(speed), canvas.width / 2, 18);
  }

  // ToDo: refactor
  updateLevel(speed) {
    if (window.timer == 40) {
      speed += 0.04;
      this.level = this.levels[4];
    } else if (window.timer == 30) {
      speed += 0.04;
      this.level = this.levels[3];
    } else if (window.timer == 20) {
      speed += 0.03;
      this.level = this.levels[2];
    } else if (window.timer == 10) {
      speed += 0.03;
      this.level = this.levels[1];
    }
    return speed;
  }

  getMinutes() {
    return Math.floor(window.timer / 60);
  }

  getSeconds() {
    return Math.floor(window.timer % 60);
  }

  twoDigitsNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  printTime() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }

  printTimeResume() {
    return `${this.getMinutes()} minutes and ${this.getSeconds()} seconds`;
  }

  printLevelResume() {
    return this.level;
  }
}
