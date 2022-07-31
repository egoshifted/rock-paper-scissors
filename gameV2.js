// Create a line break
const br = document.createElement("br");

// Define player selection variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Define play area
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
    playArea.textContent = "You chose rock";
    playerSelection = "rock";
}

// Outputs "You chose paper" to the play area
paper.addEventListener("click", paperSelection);

function paperSelection() {
    playArea.textContent = "You chose paper";
    playerSelection = "paper";
}

// Outputs "You chose scissors" to the play area
scissors.addEventListener("click", scissorsSelection);

function scissorsSelection() {
    playArea.textContent = "You chose scissors";
    playerSelection = "scissors";
}

// Starts the game after user makes a choice
choiceMade.addEventListener("click", playRound)


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

    let computerSelection = randomChoice();
    playArea.insertAdjacentText("beforeend",`The computer chose ${computerSelection}`);
    console.log(`You chose ${playerSelection}`);
    console.log(`The computer chose ${computerSelection}`);
    
    compareTheChoice();
          

    function compareTheChoice() {
        const draw = "It's a draw!";
        const win = "You Win!";
        const lose = "Computer Wins!"
        
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            console.log("It's a draw!");
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", draw)
            drawScore += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log('Computer wins!');
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", lose)
            computerScore += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log('You win!');
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", win)
            userScore += 1;
        } else if (playerSelection === '1' && computerSelection === 'rock') {
            console.log('You win!');
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", win)
            userScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            console.log("It's a draw!");
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", draw)
            drawScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log("Computer wins!");
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", lose)
            computerScore += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log('Computer Wins!');
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", lose)
            computerScore += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log('You win!');
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", win)
            userScore += 1;
        } else {
            console.log("It's a draw!");
            playArea.appendChild(br)
            playArea.insertAdjacentText("beforeend", draw) 
            drawScore += 1;
        }
        
        

    }



}