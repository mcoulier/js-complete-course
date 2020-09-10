let userChoice = prompt("Rock, paper, scissors?");
let computerChoice = Math.random();

if (computerChoice < 0.34){
    computerChoice = "rock";
} else if(computerChoice <= 0.67 ){
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

const compare = function (choice1, choice2){
    if(choice1 === choice2){
        return "Tie";
    }
}