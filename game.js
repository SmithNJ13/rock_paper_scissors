const prompt=require("prompt-sync") ({sigint:true});

var input = prompt ("What is your choice? ")
input = input.toLowerCase();


// This was initially going to fetch the userInput and the above code was contained in here, I understand a switch:case isn't needed now that code exists outside of this function,
// I don't have too much time left to edit it again and refactor it and since it's functional for now I'll leave it!
function userInput() {
    switch (input) {
        case "rock":
            gameSystem();
            break;
        case "paper":
            gameSystem();
            break;
        case "scissors":
            gameSystem();
            break;
        case "exit":
            break;
        default: 
            console.log("Invalid input, try again ");
            break;
    }
}

// Function that runs the simulation of userInput vs CPU input and determines who wins, this function is called after any option the user selects
function gameSystem() {
    var P = random(1,100);
    let CPU;
    if(P >= 66) {
        CPU = "rock";
    } else if (P < 66 && P > 33) {
        CPU = "paper";
    } else {
        CPU = "scissors";
    }
    console.log("Computer: " + CPU);
    if(input === CPU) {
        console.log("It is a draw.");
    } else if ((input === "rock" && CPU === "scissors") || (input === "scissors" && CPU === "paper") || (input === "paper" && CPU == "rock")) {
        console.log("You win.");
    } else {
        console.log("You lose.");
    }
}

// Function to grab a random number from 1-100. Used as a "probability" since it's easier for me to visualise a full number as a percentage. Like 66 being 66% as opposed to 0.66.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Calling userInput() function which then calls the gameSystem() function after a user makes their choice.
userInput();

module.exports = {
    userInput,
    gameSystem
}
