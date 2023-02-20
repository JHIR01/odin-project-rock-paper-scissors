console.log("Hello world!");

// getComputerChoice() - This will randomly return either a 'rock', 'paper' or 'scissors'. 
//      - This is how the computer will play the game.

let getComputerChoice = () => {
    tempNum = Math.floor(Math.random() * (4 - 1) + 1);
    if (tempNum === 1) {
        return 'Rock';
    } else if (tempNum === 2) {
        return 'Paper';
    } else if (tempNum === 3) {
        return 'Scissors'
    }
}

// console.log(getComputerChoice());

// playRound() - This function will take in two arguements and return a statement on who won the game.

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return 'You lose! Paper beats rock!'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return 'You win! Paper beats rock!'
    }
    if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissor') {
        return 'You lose! scissors beats paper!'
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper') {
        return 'You win! Scissors beats paper!'
    }
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return 'You lose! Rock beats scissors!'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return 'You win! Rock beats scissors!'
    }
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Draw! You can the computer had the same item!'
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("This is the computer's choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));