// numberGuessGame.js

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to start the game
function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I've selected a random number between 1 and 100. Try to guess it!");

    let guesses = 0;

    process.stdin.on('data', (data) => {
        const guess = parseInt(data);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } else {
            guesses++;

            if (guess < randomNumber) {
                console.log("Too low. Try again!");
            } else if (guess > randomNumber) {
                console.log("Too high. Try again!");
            } else {
                console.log(`Congratulations! You've guessed the number ${randomNumber} in ${guesses} guesses.`);
                process.exit();
            }
        }
    });
}

// Start the game
startGame();
