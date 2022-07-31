// Define player selection variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Score Tracking
let userScore = 0;
let computerScore = 0; 
let drawScore = 0;

// Plays a full round of RPS 
function playRound() {

// Generate Computer Choice
function randomChoice() {
    const choiceArray = [
        'Choice 1',
        'Choice 2',
        'Choice 3'
    ]

    const makeChoice = Math.floor(Math.random()*choiceArray.length);
    let result;
    if (makeChoice == 0) {
        result = 'rock';
    } else if (makeChoice == 1) {
        result = 'paper';
    } else  {
        result = 'scissors';
    }
    return result;
}

let playerSelection = prompt('Choose Rock, Paper, Scissors').toLowerCase();
let computerSelection = randomChoice();
console.log(`You chose ${playerSelection}`);
console.log(`The computer chose ${computerSelection}`);
compareTheChoice();
        

function compareTheChoice() {
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("It's a draw!");
        drawScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer wins!');
        computerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win!');
        userScore += 1;
    } else if (playerSelection === '1' && computerSelection === 'rock') {
        console.log('You win!');
        userScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("It's a draw!");
        drawScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("Computer wins!");
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Computer Wins!');
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win!');
        userScore += 1;
    } else {
        console.log("It's a draw!"); 
        drawScore += 1;
    }
    
    

}



}