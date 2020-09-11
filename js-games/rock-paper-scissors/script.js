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
        let computerChoice = Math.random();

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        if (userChoice === computerChoice) {
            return "Tie";
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                return "Rock wins"
            } else if (computerChoice === "paper") {
                return "Paper wins";
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                return "Scissors win"
            } else if (computerChoice === "rock") {
                return "Paper wins";
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "Rock wins"
            } else if (computerChoice === "paper") {
                return "Scissors win";
            }
        }
    }
    document.getElementById("outcome")
})();