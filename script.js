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

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log("This is the computer's choice: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// game() - This function will run the 'playRound()' function 5 times and will keep score and report a winner or loser at the end of the round

let game = () => {
    for (let i = 0; i < 5; i++) {
        let tempMove = prompt("What move are you thinking of?:")
        if (tempMove.toLowerCase() !== 'rock' || 'paper' || 'scissors'){
            tempMove = prompt("Please enter in a legal move: ");
        } else {
            return playRound(tempMove, computerSelection());
        }d
    }
}

// console.log(game());

// let tempname = prompt("What is your name? :");
// alert("Hello " + tempname + ".");

// let userMove = prompt("What move will you take?: ");
// console.log(playRound(userMove, getComputerChoice()));

// promptUser() - This function will ask the user for their move for the round. 
//      - The function will return the user's move for the round.
//      - If the user does not enter in a legal move then they will be prompted again.
let promptUser = () => {
    let tempMove = prompt("What is your move this round?: ");
    if (tempMove.toLowerCase() !== 'rock' || 'paper' || 'scissors') {
        tempMove = prompt("Please enter in a legal move: ");
    } else {
        return tempMove;
    }
}
 
console.log(promptUser());

// checkMove() - This function is a loop that won't break until the user enter in a recognizable move.
let checkMove = () => {
    let userMove = '';
    while (userMove.toLowerCase() !== 'rock' || 'paper' || 'scissors') {
        userMove = prompt("Please enter in a legal move!: ");
    }
    return userMove;
}

checkMove();