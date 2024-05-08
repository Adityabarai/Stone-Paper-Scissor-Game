// Variables for the scores and message container
let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

// Generate the computer's choice randomly
const genComChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//  drawn game
const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Display the winner and update the scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Increase user score
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; // Increase computer score
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
    // Update the displayed scores
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;
};

// Play the game
const playGame = (userChoice) => {
    const compChoice = genComChoice();
    console.log("User:", userChoice);
    console.log("Computer:", compChoice);

    if (userChoice === compChoice) {
        // Draw
        drawGame();
    } else {
        let userWin = true;
        // the winner based on choices
        if (userChoice === "stone") {
            //  paper or scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // stone or scissors
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //  stone or paper
            userWin = compChoice === "paper" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to the choices
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
