class Timer {
  constructor() {
    this.timerId = 0;
    this.timer = 0;

    this.levels = ["Novice", "Passable", "Speeder", "Formula 750", "Insane"];
    this.level = this.levels[0];
  }

  start() {
    this.timerId = setInterval(() => this.timer++, 1000);
  }

  animate(speed, starsCount) {
    // draw top board
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(canvas.width / 2 - 250, 0, 500, 25);
    ctx.closePath();

    // fill top board with text
    ctx.beginPath();
    ctx.font = "13px amigaForeverPro2";
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.fillText(this.updateBoardText(speed, starsCount), canvas.width / 2, 18);
    ctx.closePath();

    // draw bottom board
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(canvas.width / 2 - 100, canvas.height - 25, 200, 25);
    ctx.closePath();

    // fill bottom board with text
    ctx.beginPath();
    ctx.font = "13px amigaForeverPro2";
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.fillText(
      this.updateSpeedText(speed),
      canvas.width / 2,
      canvas.height - 8
    );
    ctx.closePath();
  }

  updateLevel(speed) {
    if (this.timer == 40) {
      speed += 0.04;
      this.level = this.levels[4];
    } else if (this.timer == 30) {
      speed += 0.04;
      this.level = this.levels[3];
    } else if (this.timer == 20) {
      speed += 0.03;
      this.level = this.levels[2];
    } else if (this.timer == 10) {
      speed += 0.03;
      this.level = this.levels[1];
    }
    return speed;
  }

  updateBoardText(speed, starsCount) {
    return `Stars: ${starsCount} - Time: ${this.printTime()} - Level: ${
      this.level
    }`;
  }

  updateSpeedText(speed) {
    return `Speed: ${Math.floor(speed * 10)}Km/H`;
  }

  getMinutes() {
    return Math.floor(this.timer / 60);
  }

  getSeconds() {
    return Math.floor(this.timer % 60);
  }

  twoDigitsNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  printTime() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }

  /*
    addBonusTime(<num>)
    for every collected star add 3 bonus seconds to the timer
    
    return nothing
  */
  addBonusTime(starsCount) {
    this.timer += starsCount * 3;
  }

  /*
    scoreStore(<num>)
    get or initialize the local storage 'scores' and update it 
    with the current score
    
    return nothing
  */
  storeScore(starsCount) {
    this.addBonusTime(starsCount);
    
    let localStore = {scores: []};
    if (window.localStorage.getItem("highscores")) {
      localStore = JSON.parse(window.localStorage.getItem("highscores"));
    }

    let newScore = {
      key: Math.floor(Math.random() * 1000),
      time: this.printTime(),
      level: this.level,
    };

    console.log(localStore)
    localStore.scores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(localStore));
  }
}
