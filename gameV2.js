// Create a line break
const br = document.createElement("br");

// Define player selection variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const welcomeMessage = document.querySelector(".welcome");

// Refreshes Page by clicking reset game
document.querySelector(".reset").addEventListener("click", function() {
    location.reload();
  });


// Define play area
const playerChoice = document.querySelector(".playerchoice");
const computerChoice = document.querySelector(".computerchoice");
const resultArea = document.querySelector(".resultarea")
const playArea = document.querySelector(".playarea");

// Registers if any of the choices have been made
const choiceMade = document.querySelector(".playerhands");

// Score Tracking
let userScore = 0;
let computerScore = 0; 
let drawScore = 0;
let playerSelection = "";

// Outputs "You chose rock" to the play area
rock.addEventListener("click", rockSelection);

function rockSelection() {
    playerChoice.textContent = "You chose rock";
    playerSelection = "rock";
}

// Outputs "You chose paper" to the play area
paper.addEventListener("click", paperSelection);

function paperSelection() {
    playerChoice.textContent = "You chose paper";
    playerSelection = "paper";
}

// Outputs "You chose scissors" to the play area
scissors.addEventListener("click", scissorsSelection);

function scissorsSelection() {
    playerChoice.textContent = "You chose scissors";
    playerSelection = "scissors";
}

// Starts the game after user makes a choice
choiceMade.addEventListener("click", playRound)


// Plays a full round of RPS 
function playRound() {
    
    // Removes the "Choose your weapon" text
    welcomeMessage.textContent = "";  
    
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

    let computerSelection = randomChoice();
    
    // Outputs the computer's choice into the play window
    computerChoice.textContent = `The computer chose ${computerSelection}`
  
    // Runs the comparison function
    compareTheChoice();

    function compareTheChoice() {
        const draw = "It's a draw!";
        const win = "You Win!";
        const lose = "Computer Wins!"
        
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            resultArea.textContent = draw;
            drawScore += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            resultArea.textContent = lose;
            computerScore += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            resultArea.textContent = win;
            userScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            resultArea.textContent = win;
            userScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            resultArea.textContent = draw;
            drawScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            resultArea.textContent = lose;
            computerScore += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            resultArea.textContent = lose;
            computerScore += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            resultArea.textContent = win;
            userScore += 1;
        } else {
            resultArea.textContent = draw;
            drawScore += 1;
        }
        
        

    }

// Outputs the current score into the results window
const results = document.querySelector(".results")
const draws = document.querySelector(".draws")
results.textContent = `You Scored ${userScore} | Computer scored ${computerScore}`
draws.textContent = `There were ${drawScore} draws`;

}