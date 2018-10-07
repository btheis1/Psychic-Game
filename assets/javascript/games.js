

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// this variable will be assigned one of the three letters
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//this array will hold what we guess
var userGuesses = [];
//This is the counter for wins and losses
var wins = 0;
var losses = 0;

//This is what we'll use to count down
var guessesLeft = 9;
//this will reset the game
var Reset = function () {
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessLeft = 9;
    wins = 0;
    losses = 0;
    userGuesses = [];
}


    
//Three functions to update guesses, update guesses left, and update guesses so far

//this function will capture the keyboard click, and it's going to eliminate the guesses left by one
document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();
    console.log("Computer choice:" + computerChoice);
    console.log("User choice: " + userChoice);

    userGuesses.push(userChoice);
    console.log("User guesses:" + userGuesses);

    guessesLeft--
    console.log("Guesses left: " + guessesLeft)

    var answerCheck = userGuesses.find(function(element) {
        return element == computerChoice;
      });
    console.log("Answer check: " + answerCheck);

    
    if (guessesLeft === 0 && computerChoice == answerCheck) {
        wins++;
        console.log("Wins: " + wins);
    
    } else if (guessesLeft === 0 && computerChoice !== answerCheck) {
        losses++;
        console.log("Losses: " + losses);
        
    }

    document.getElementById("userChoice-text").textContent = "You guessed: " + userChoice;
    document.getElementById("guessesLeft-text").textContent = "You have " + guessesLeft + " guesses left.";
    document.getElementById("guessesMade-text").textContent = "Your guesses so far: " + userGuesses;
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;
}

// if 
//this function will be called when we reset everything




   


    
