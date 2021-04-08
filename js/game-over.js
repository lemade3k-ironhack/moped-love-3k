/*
  printHighscore()
  append the top 5 scores to game-over.html
  
  returns nothing
*/
function printHighscore() {
  let scores = JSON.parse(window.localStorage.getItem("highscores")).scores;
  let topFive = sortByTime(scores).slice(0, 5);
  let notInTopFive = true;
  let currentScoreId = scores.slice(scores.length - 1)[0].key;
  let currentTime = scores.find(score => score.key == currentScoreId).time
  let parentElem = document.querySelector(".scores");

  // print the five best scores
  topFive.forEach((score, i) => {
    newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${score.time}</td><td>${score.level}</td>`;

    // check if current score is in top five and add class
    // ToDo: refactor that you can return after condition
    if (topFive[i].key == currentScoreId) {
      console.log(newRow)
      newRow.classList.add("current-score");
      notInTopFive = false;
    }

    parentElem.appendChild(newRow);
  });

  // ToDo: refactor that you can return after condition
  if (notInTopFive) youAreNotTop(currentTime);
}

/* 
  youAreNotTop(<string>)
  if you are not in top five append result to game-over.html 

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
  sortByTime(<arr obj>)
  returns a sorted array of objects
*/
function sortByTime(scores) {
  let clonedScores = JSON.parse(JSON.stringify(scores));

  // sort the array
  clonedScores.sort((a, b) => {
    if (a.time > b.time) return -1;
    if (a.time < b.time) return 1;
    return 0;
  });
  return clonedScores;
}

window.addEventListener("load", printHighscore);
