// We need a USER input of either "Rock", "Paper" or "Scissors" these are not case sensitive and will go through regardless of capital letters (or lack thereof).
// We then need the "game" to randomise it's response of either "Rock", "Paper" or "Scissors" 
// The game system then checks both the USER input and it's own input against the forumla of Rock > Scissors, Scissors > Paper, Paper > Rock
// If the USER wins their 'SCORE' increments by 1. If the Computer (CPU) wins their 'SCORE' increments by 1.
// Initial probability distribution of the CPU input is 33% for any given option (33% for Rock, Paper, Scissors) could potentally alter this and make it more random each round? ie; a 1% chance to select rock, 25% chance for scissors 74% chance for paper etc; Makes the CPU less predictable.
const 
userInput = require("./game.js"),
gameSystem = require("./game.js")

describe("Game Testing", () => {
    test("userInput exists as a function: ", () => {
        expect(userInput).toBeInstanceOf(Function)
    })

    test("gameSystem exists as a function:", () => {
        expect(gameSystem).toBeInstanceOf(Function)
    })
})
