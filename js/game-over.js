
function printTime() {
  document.querySelector('.level').innerText = `You reached Level: ${window.localStorage.getItem('level')}`
  document.querySelector('.time-played').innerText = window.localStorage.getItem('time');
}

window.addEventListener("load", printTime);