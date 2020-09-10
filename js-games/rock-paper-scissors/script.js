var userChoice = prompt("Rock, paper, scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34){
    computerChoice = "rock";
} else if(computerChoice <= 0.67 ){
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log(computerChoice)