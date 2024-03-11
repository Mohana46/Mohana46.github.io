const players = [
  {
    name: "Player 1",
    score: 0,
    currentScore: 0,
    turnCount: 0,
  },
  {
    name: "Player 2",
    score: 0,
    currentScore: 0,
    turnCount: 0,
  },
];

const diceEl = document.querySelector(".dice");
diceEl.classList.add('hidden');

let playing = true; // New variable to control gameplay

const rollDice = () => {
  if (!playing) return; // Don't roll if not playing

  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  const diceImage = `dice-${randomNumber}.png`;
  diceEl.classList.remove('hidden');
  diceEl.src = diceImage;

  if (players[currentPlayer].turnCount < 3) {
    players[currentPlayer].currentScore += randomNumber;
    players[currentPlayer].turnCount++;
  } else {
    players[currentPlayer].score += players[currentPlayer].currentScore;
    players[currentPlayer].currentScore = 0;
    players[currentPlayer].turnCount = 0;

    updateScores();
    checkWinner();
    switchPlayer();
  }

  updateScores();
};

const updateScores = () => {
  document.querySelector("#name--0").textContent = players[0].name;
  document.querySelector("#score--0").textContent = players[0].score;
  document.querySelector("#current--0").textContent = players[0].currentScore;

  document.querySelector("#name--1").textContent = players[1].name;
  document.querySelector("#score--1").textContent = players[1].score;
  document.querySelector("#current--1").textContent = players[1].currentScore;
};

const switchPlayer = () => {
  currentPlayer = (currentPlayer + 1) % 2;
  diceEl.classList.add('hidden');
  updateCurrentBackground();
};

const updateCurrentBackground = () => {
  const playerElements = [document.querySelector('.player--0'), document.querySelector('.player--1')];
  playerElements[currentPlayer].classList.add('player--active');
  playerElements[(currentPlayer + 1) % 2].classList.remove('player--active');
};

const resetGame = () => {
  players[0].score = 0;
  players[0].currentScore = 0;
  players[0].turnCount = 0;

  players[1].score = 0;
  players[1].currentScore = 0;
  players[1].turnCount = 0;

  currentPlayer = 0;
  diceEl.classList.add('hidden');
  updateScores();
  updateCurrentBackground();
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  playing=true;
  
};

let currentPlayer = 0;

const checkWinner = () => {
  if (players[0].score >= 50 || players[1].score >= 50) {
    const winnerIndex = players[0].score >= 50 ? 0 : 1;

    const winnerElement = document.querySelector(`.player--${winnerIndex}`);
    winnerElement.classList.add('player--winner');

    playing = false; // Set playing to false after a winner is announced
  }
};

document.querySelector(".btn--roll").addEventListener("click", rollDice);
document.querySelector(".btn--new").addEventListener("click", resetGame);
