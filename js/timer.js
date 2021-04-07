class Timer {
  constructor() {
    this.timerId = 0
    window.timer = 0
  }
 
  start() {
    this.timerId = setInterval(() => window.timer++, 1000)
  }
 
  animate() {
    this.drawTimerBoard()
    ctx.fillText(`Time: ${this.printTime()}`, canvas.width /2, 16);
  }

  drawTimerBoard() {
    ctx.fillStyle = '#000'
    ctx.fillRect(canvas.width/2 - 75, 0, 150, 25);
    ctx.fillStyle = "black"; 
    ctx.font = '19px calibri'
    ctx.textAlign = "center";
    ctx.fillStyle = '#fff'
  }

  getMinutes() {
    return Math.floor(window.timer / 60)
  }
 
  getSeconds() {
    return Math.floor(window.timer % 60)
  }

  twoDigitsNumber(number) {
    return (number < 10) ? `0${number}` : `${number}`
  }

  printTime() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min} : ${sec}`
  }

  printTimeResume(){
    return `${this.getMinutes()} minutes and ${this.getSeconds()} seconds`
  }
}