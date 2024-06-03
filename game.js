let computerScore = 0;

let userScore = 0;

function playGame() {
    let a = getHumanChoice();
    const humanChoice = a.toLowerCase();

    let i = getComputerChoice();
    const computerChoice = i;


    function getHumanChoice() {
        return prompt("Enter your form of attack: Rock, Paper, or Scissor: ")
    }

    function getComputerChoice() {
        return Math.round(Math.random()*2);
    }

    function playRound(humanChoice, computerChoice) {
        if (computerChoice === 0 && humanChoice === "rock") {
            console.log("Nobody wins, you both chose Rock!");
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 0 && humanChoice === "paper") {
            console.log("You win! Paper beats Rock!");
            userScore++;
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 0 && humanChoice === "scissor") {
            console.log("You lose :( Rock beats Scissor...");
            computerScore++;
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 1 && humanChoice === "rock") {
            console.log("You lose :( Paper beats Rock...")
            computerScore++;
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 1 && humanChoice === "paper") {
            console.log("Nobody wins, you both chose Paper!")
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 1 && humanChoice === "scissor") {
            console.log("You win! Scissor beats Paper!")
            userScore++;
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 2 && humanChoice === "rock") {
            console.log("You win! Rock beats Scissor!")
            userScore++;
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 2 && humanChoice === "paper") {
            console.log("You lose :( Scissor beats Paper...")
            computerScore++;
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else if (computerChoice === 2 && humanChoice ==="scissor") {
            console.log("Nobody wins, you both chose Scissor!")
            console.log("The computer's score is ", computerScore, "and your score is ", userScore);
        } else {
            console.log("Please use one of the three choices provided...")
        }
    }

    playRound(humanChoice, computerChoice)

}

playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()

