document.getElementById('actionRoll').addEventListener('click', triggerDiceRoll);

// Initializing variables for score
let scoreCompetitorOne = 0;
let scoreCompetitorTwo = 0;
const targetScore = 30; 

//Dice roll event 
function triggerDiceRoll() {
  const rollResults = rollTheDice();
  updateDiceImages(rollResults);
  updateScores(rollResults);
  checkForWinner();
}

// Rolls dice for both competitors and returns their values
function rollTheDice() {
  return {
    rollCompetitorOne: Math.floor(Math.random() * 6) + 1,
    rollCompetitorTwo: Math.floor(Math.random() * 6) + 1
  };
}

// Updates the dice images on the page
function updateDiceImages({ rollCompetitorOne, rollCompetitorTwo }) {
  document.getElementById('diceImageOne').src = `dice${rollCompetitorOne}.png`;
  document.getElementById('diceImageTwo').src = `dice${rollCompetitorTwo}.png`;
}

// Updates scores based on the current dice roll
function updateScores({ rollCompetitorOne, rollCompetitorTwo }) {
  const differenceInScore = Math.abs(rollCompetitorOne - rollCompetitorTwo);
  if (rollCompetitorOne > rollCompetitorTwo) {
    scoreCompetitorOne += differenceInScore;
  } else if (rollCompetitorTwo > rollCompetitorOne) {
    scoreCompetitorTwo += differenceInScore;
  }
  document.getElementById('scoreOne').innerText = scoreCompetitorOne;
  document.getElementById('scoreTwo').innerText = scoreCompetitorTwo;
}

// Checks if there's a winner and resets the game if so
function checkForWinner() {
  if (scoreCompetitorOne >= targetScore) {
    alert('Player One is the winner!');
    initializeNewGame();
  } else if (scoreCompetitorTwo >= targetScore) {
    alert('Player Two is the winner!');
    initializeNewGame();
  }
}

// Resets the game scores and potentially updates UI to reflect the reset
function initializeNewGame() {
  scoreCompetitorOne = 0;
  scoreCompetitorTwo = 0;
  document.getElementById('scoreOne').innerText = '0';
  document.getElementById('scoreTwo').innerText = '0';
  // Here, you might also reset the dice images to a default state if desired
   // Resetting dice images to the default state (dice face 1)
  document.getElementById('diceImageOne').src = 'dice1.png';
  document.getElementById('diceImageTwo').src = 'dice1.png';
}
