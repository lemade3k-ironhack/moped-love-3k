
function printTime() {
  document.querySelector('#timePlayed').innerText = window.localStorage.getItem('time');
}

window.addEventListener("load", printTime);