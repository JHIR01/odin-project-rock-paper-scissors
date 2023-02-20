console.log("Hello world!");

// getComputerChoice() - This will randomly return either a 'rock', 'paper' or 'scissors'. 
//      - This is how the computer will play the game.

let getComputerChoice = () => {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

console.log(getComputerChoice());