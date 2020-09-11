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
        var playerScore = 0;
        var computerScore = 0;

        let computerChoice = Math.random();

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        // checking answers
        console.log(userChoice,computerChoice)

        if (userChoice === computerChoice) {
            result = "tie";
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                result = "Player wins"
            } else if (computerChoice === "paper") {
                result = "Computer wins";
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                result = "Computer wins"
            } else if (computerChoice === "rock") {
                result = "Player wins";
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                result = "Computer wins"
            } else if (computerChoice === "paper") {
                result = "Player wins";
            }
        }
        document.getElementById("outcome").value = result;
    }
})();