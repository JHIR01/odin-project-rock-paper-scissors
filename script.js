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

// playRoundValue() - This function will return a true or false value if the user won that round.

let playRoundValue = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return false;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return true;
    }
    if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissor') {
        return false;
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper') {
        return true;
    }
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return false;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return true;
    }
    // This is a case where the player and the computer make the same move.
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return false;
    }
}

// getPlayerTurn() - This function will get the player's move for the round and return it
let getPlayerTurn = () => {
    let tempMove = prompt("Please enter in your move.: ");
    return tempMove;
}

// game() - This function will call the playRound function inside and play 5 rounds a game
//      - This will also keep score and report a winner or a loser at the end.

let game = () => {
    let roundResult = '';
    let playerPoints = 0;
    let computerPoints = 0;
    let playerTurn = '';
    let computerTurn = '';
    for (i = 0; i < 5; i++) {
        computerTurn = getComputerChoice();
        playerTurn = getPlayerTurn();
        roundResult = playRoundValue(playerTurn, computerTurn);
        if (roundResult === true) {
            playerPoints++;
        } else if (roundResult === false) {
            computerPoints++;
        } else if (roundResult === false) {
            computerPoints++;
            playerPoints++;
        }
    }
    if (playerPoints > computerPoints) {
        console.log("Player wins!: " + playerPoints + " to " + computerPoints);
    } else {
        console.log("Computer wins!: " + playerPoints + " to " + computerPoints);
    }
}

game();