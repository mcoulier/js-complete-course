(()=>{

    let userChoice;

    document.getElementById("rock").addEventListener("click", () => {
        userChoice = "rock";
        playGame();
    })

    document.getElementById("paper").addEventListener("click", () => {
        userChoice = "paper";
        playGame();
    })

    document.getElementById("scissors").addEventListener("click", () => {
        userChoice = "scissors";
        playGame();
    })

    function playGame() {
        var result = "";

        let computerChoice = Math.random();

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        console.log(userChoice,computerChoice)

        if (userChoice === computerChoice) {
            result = "tie";
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                result = "Rock wins"
            } else if (computerChoice === "paper") {
                result = "Paper wins";
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                result = "Scissors win"
            } else if (computerChoice === "rock") {
                result = "Paper wins";
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                result = "Rock wins"
            } else if (computerChoice === "paper") {
                result = "Scissors win";
            }
        }
        document.getElementById("outcome").value = result;
    }
})();