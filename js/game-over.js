/*
  printHighscore()
  append the top 5 scores to game-over.html
  
  returns nothing
*/
function printHighscore() {
  let scores = JSON.parse(window.localStorage.getItem("scores"));
  let topFive = sortByTime(scores).slice(0, 5);
  let notInTopFive = true;
  let currentScoreId = Number(Object.keys(scores).pop());
  let parentElem = document.querySelector(".scores");

  // print the five best scores
  topFive.forEach((score, i) => {
    newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${score.time}</td><td>${score.level}</td>`;

    // check if current score is in top five and add class
    if (topFive[i].key == currentScoreId) {
      newRow.classList.add("current-score");
      notInTopFive = false;
    }

    parentElem.appendChild(newRow);
  });

  if (notInTopFive) youAreNotTop(scores[currentScoreId].time);
}

/* 
  youAreNotTop(<string>)
  if you are not in top five append your result to game-over.html 

  returns nothing
*/
function youAreNotTop(time) {
  let parentElem = document.querySelector(".highscores");
  let yourScore = document.createElement("p");
  yourScore.classList.add("not-top");
  yourScore.innerText = `You didn't make it to the top five with your time of ${time}. Try harder!`;

  parentElem.parentNode.appendChild(yourScore);
}

/*
  sortByTime(<Object: Objects>)
  returns a sorted array of objects
*/
function sortByTime(scores) {
  let result = [];

  // create a sortable array
  for (let key in scores) {
    result.push(scores[key]);
    scores[key]["key"] = key;
  }

  // sort the array
  result.sort((a, b) => {
    if (a.time > b.time) return -1;
    if (a.time < b.time) return 1;
    return 0;
  });
  return result;
}

window.addEventListener("load", printHighscore);
