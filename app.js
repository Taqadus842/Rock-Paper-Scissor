let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user_score");
let computer_score = document.querySelector("#computer_score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play Again";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        user_score.innerText = ++userScore;
    } else {
        console.log("You Lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computer_score.innerText = ++compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User Choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice:", compChoice);

    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            if (compChoice === "scissors") {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            if (compChoice === "rock") {
                userWin = true;
            }
        } else if (userChoice === "scissors") {
            if (compChoice === "paper") {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
