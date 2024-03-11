const choices = document.querySelectorAll('.choice');
const computerDiv = document.querySelector('.computer img');
const playerDiv = document.querySelector('.player img');
const resultDiv = document.querySelector('.result');
const computerScoreDiv = document.getElementById('computer-score');
const playerScoreDiv = document.getElementById('player-score');

const choicesArray = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('data-choice');
        const computerChoice = choicesArray[Math.trunc(Math.random() * choicesArray.length)];

        playerDiv.src = `${playerChoice}.png`;
        computerDiv.src = `${computerChoice}.png`;

        const result = determineWinner(playerChoice, computerChoice);
        updateScore(result);

        resultDiv.textContent = result;

        if (playerScore >= 20) {
            announceWinner('Player');
        } else if (computerScore >= 20) {
            announceWinner('Computer');
        }
    });
});

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You won!';
    } else {
        return 'Computer won';
    }
}

function updateScore(result) {
    if (result === 'You won!') {
        playerScore++;
    } else if (result === 'Computer won') {
        computerScore++;
    }

    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function announceWinner(winnerName) {
    alert(`${winnerName} is the winner!`);
    resetGame();
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    playerScoreDiv.textContent = '0';
    computerScoreDiv.textContent = '0';
    playerDiv.src = ''; // Reset player image
    computerDiv.src = ''; // Reset computer image
    resultDiv.textContent = '';
}
