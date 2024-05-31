/*
Function that creates a random float 
number between 0,1,2 and rounds it to 
nearest integer
*/
function getComputerChoice() {
    return Math.round(Math.random()*2);
}


/*
Function prompts user to choose rock, paper, or scissors
*/
function getHumanChoice() {
    return prompt("Enter your form of attack: Rock, Paper, or Scissor: ")
}


/*
Variable that stores the input from the user
*/
let a = getHumanChoice();


/*Created a variable to store the random
integer in
*/
let i = getComputerChoice();

/*
Variable to increment +1 each time computer wins
*/
let computerScore = 0

/*
Variable to increment +1 each time user wins
*/
let userScore = 0

/*Conditional statement that assumes 0 = Rock, 1 = Paper,
and 2 = Scissor. It then compares i to a to see which input
wins based on the rule of rock, paper, scissor, shoot.
*/
if (i === 0 && a === "Rock") {
    console.log("Nobody wins, you both chose Rock!");
} else if (i === 0 && a === "Paper") {
    console.log("You win! Paper beats Rock!");
} else if (i === 0 && a === "Scissor") {
    console.log("You lose :( Rock beats Scissor...");
} else if (i === 1 && a === "Rock") {
    console.log("You lose :( Paper beats Rock...")
} else if (i === 1 && a === "Paper") {
    console.log("Nobody wins, you both chose Paper!")
} else if (i === 1 && a === "Scissor") {
    console.log("You win! Scissor beats Paper!")
} else if (i === 2 && a === "Rock") {
    console.log("You win! Rock beats Scissor!")
} else if (i === 2 && a === "Paper") {
    console.log("You lose :( Scissor beats Paper...")
} else if (i === 2 && a ==="Scissor") {
    console.log("Nobody wins, you both chose Scissor!")
}

