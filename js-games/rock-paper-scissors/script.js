let userChoice;
let computerChoice = Math.random();


document.getElementById("rock").addEventListener("click", ()=>{
    userChoice = "rock"
})

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
    } else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "Rock wins"
        } else if (choice2 === "paper"){
            return "Paper wins";
        }
    } else if (choice1 === "paper"){
        if (choice2 === "scissors"){
            return "Scissors win"
        } else if (choice2 === "rock"){
            return "Paper wins";
        }
    } else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "Rock wins"
        } else if (choice2 === "paper"){
            return "Scissors win";
        }
    }
}
console.log(compare(userChoice,computerChoice))