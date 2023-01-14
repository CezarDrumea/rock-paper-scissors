function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  switch(randomInt) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case 'rock':
      if (computerSelection === 'Rock') {
        outcome = 'draw';
        return alert('It\'s a draw!');
      } else if (computerSelection === 'Paper') {
        outcome = 'lose';
        return alert('You lost the match!');
      } else {
        outcome = 'win';
        return alert('You won the match!');
      }
    case 'paper':
      if (computerSelection === 'Paper') {
        outcome = 'draw';
        return alert('It\'s a draw!');
      } else if (computerSelection === 'Scissors') {
        outcome = 'lose';
        return alert('You lost the match!');
      } else {
        outcome = 'win';
        return alert('You won the match!');
      }
    case 'scissors':
      if (computerSelection === 'Scissors') {
        outcome = 'draw';
        return alert('It\'s a draw!');
      } else if (computerSelection === 'Rock') {
        outcome = 'lose';
        return alert('You lost the match!');
      } else {
        outcome = 'win';
        return alert('You won the match!');
      }
  }
}

let outcome;
let countOfWins = 0;
const numberOfRounds = parseInt(prompt('Enter the number of rounds', ''));
let playerSelection;
let computerSelection;
let toHalfGame = 0;

for (let i = 0; i < numberOfRounds; i++, toHalfGame++) {
  playerSelection = prompt('Enter your selection and make sure you spell it correctly', '').toLowerCase();
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if (outcome === 'win') {
    countOfWins++;
  } else if (outcome === 'lose') {
    countOfWins--;
  } else {
    countOfWins += 0.5;
  }
  if (toHalfGame >= numberOfRounds / 2) {
    if (countOfWins > numberOfRounds / 2) {
      alert('YOU WON THE GAME!!!');
    } else if (countOfWins < numberOfRounds / 2) {
      alert('YOU LOST THE GAME!!!');
    } else {
      alert('YOU ARE EVENLY MATCHED. IT\'S A DRAW!!!');
    }
  }
}