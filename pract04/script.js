// ==========================================
// ELEMENTS
// ==========================================

const guessInput = document.getElementById("guessInput");

const guessBtn = document.getElementById("guessBtn");

const resetBtn = document.getElementById("resetBtn");

const guessedNumbers = document.getElementById("guessedNumbers");

const guessCount = document.getElementById("guessCount");

const guessCounter = document.getElementById("guessCounter");

const message = document.getElementById("message");

const messageText = document.getElementById("messageText");

const progress = document.getElementById("progress");

const progressText = document.getElementById("progressText");

const gameCard = document.querySelector(".game-card");


// ==========================================
// GAME VARIABLES
// ==========================================

let secretNumber;

let guesses;

let gameOver;


// ==========================================
// START GAME
// ==========================================

function startGame() {

    secretNumber =
        Math.floor(Math.random() * 15) + 1;

    guesses = [];

    gameOver = false;


    guessInput.value = "";

    guessCount.textContent = "0";

    guessCounter.textContent = "0 guesses";

    progress.style.width = "0%";

    progressText.textContent = "0%";


    guessedNumbers.innerHTML = `
        <span class="empty-history">
            Your guesses will appear here
        </span>
    `;


    setMessage(
        "💡",
        "Make your first guess!",
        ""
    );


    guessBtn.disabled = false;

    gameCard.classList.remove("winner");

    guessInput.focus();

}


// ==========================================
// MESSAGE FUNCTION
// ==========================================

function setMessage(icon, text, type) {

    const iconElement =
        message.querySelector(".message-icon");

    iconElement.textContent = icon;

    messageText.textContent = text;

    message.className = "message";

    if (type !== "") {

        message.classList.add(type);

    }

}


// ==========================================
// CREATE GUESS CHIP
// ==========================================

function createGuessChip(number, type) {

    const chip = document.createElement("span");

    chip.classList.add("guess-chip");

    if (type) {

        chip.classList.add(type);

    }

    chip.textContent = number;

    guessedNumbers.appendChild(chip);

}


// ==========================================
// MAKE GUESS
// ==========================================

function makeGuess() {

    if (gameOver) {

        return;
    }


    const value = guessInput.value.trim();

    const guess = Number(value);


    // Empty input

    if (value === "") {

        setMessage(
            "⚠️",
            "Please enter a number first.",
            "error"
        );

        guessInput.focus();

        return;
    }


    // Range check

    if (guess < 1 || guess > 15) {

        setMessage(
            "🚫",
            "Enter a number between 1 and 15.",
            "error"
        );

        guessInput.select();

        return;
    }


    // Duplicate check

    if (guesses.includes(guess)) {

        setMessage(
            "🔁",
            "You already guessed this number!",
            "error"
        );

        guessInput.select();

        return;
    }


    // Add guess

    guesses.push(guess);


    // Update count

    const totalGuesses = guesses.length;

    guessCount.textContent = totalGuesses;

    guessCounter.textContent =
        totalGuesses === 1
            ? "1 guess"
            : `${totalGuesses} guesses`;


    // Remove empty message

    const emptyHistory =
        guessedNumbers.querySelector(".empty-history");

    if (emptyHistory) {

        emptyHistory.remove();

    }


    // Determine result

    let type;


    if (guess === secretNumber) {

        type = "correct";

    }

    else if (guess > secretNumber) {

        type = "high";

    }

    else {

        type = "low";

    }


    // Add chip

    createGuessChip(guess, type);


    // Update progress

    const percentage =
        Math.min((totalGuesses / 10) * 100, 100);

    progress.style.width =
        percentage + "%";

    progressText.textContent =
        Math.round(percentage) + "%";


    // Correct answer

    if (guess === secretNumber) {

        setMessage(
            "🏆",
            `Amazing! ${secretNumber} was the correct number!`,
            "success"
        );


        gameOver = true;

        guessBtn.disabled = true;

        gameCard.classList.add("winner");

        progress.style.width = "100%";

        progressText.textContent = "100%";


        return;
    }


    // Too high

    if (guess > secretNumber) {

        setMessage(
            "⬆️",
            "Your guess is too high.",
            "high"
        );

    }


    // Too low

    else {

        setMessage(
            "⬇️",
            "Your guess is too low.",
            "low"
        );

    }


    // Clear input

    guessInput.value = "";

    guessInput.focus();

}


// ==========================================
// GUESS BUTTON
// ==========================================

guessBtn.addEventListener(
    "click",
    makeGuess
);


// ==========================================
// ENTER KEY
// ==========================================

guessInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            makeGuess();

        }

    }
);


// ==========================================
// RESET BUTTON
// ==========================================

resetBtn.addEventListener(
    "click",
    startGame
);


// ==========================================
// START
// ==========================================

startGame();