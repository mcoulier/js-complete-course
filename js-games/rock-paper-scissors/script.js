(()=>{
    var playerScore = 0;
    var computerScore = 0;
    let userChoice;
    var endGame = "";

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

        // checking answers
        console.log("Player: " + userChoice,"Computer: " + computerChoice)

        if (userChoice === computerChoice) {
            result = "tie";
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                result = "Player wins";
                playerScore++;
            } else if (computerChoice === "paper") {
                result = "Computer wins";
                computerScore++;
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                result = "Computer wins";
                computerScore++;
            } else if (computerChoice === "rock") {
                result = "Player wins";
                playerScore++;
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                result = "Computer wins";
                computerScore++;
            } else if (computerChoice === "paper") {
                result = "Player wins";
                playerScore++;
            }
        }

        if (computerScore === 10){
            endGame = "Player lost";
        } else if (playerScore === 10){
            endGame = "You won";
        }


        document.getElementById("outcome").value = result;
        document.getElementById("score").value = playerScore + " - " + computerScore;
        document.getElementById("userPick").innerHTML = "User: " + userChoice;
        document.getElementById("computerPick").innerHTML = "Computer: " + computerChoice;
        console.log(endGame)
    }
})();