
//Possible guesses for computer
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Randomize computer guess
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//this array will hold what the user guesses
var userGuesses = [];

//This is the counter for wins and losses
var wins = 0;
var losses = 0;

//This is what we'll use to count down
var guessesLeft = 9;

//this will reset the game
var Reset = function () {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessesLeft = 9;
    userGuesses = [];
}



//this function will capture the key pressed
document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();
    console.log("Computer choice:" + computerChoice);
    console.log("User choice: " + userChoice);

//add user guesses to array
    userGuesses.push(userChoice);
    console.log("User guesses:" + userGuesses);

//decrease guesses left 
    guessesLeft--
    console.log("Guesses left: " + guessesLeft)

//search user guesses array for Computer Choice
    var answerCheck = userGuesses.find(function(element) {
        return element == computerChoice;
      });
    console.log("Answer check: " + answerCheck);

//Update wins and losses and reset game
    if (guessesLeft === 0 && computerChoice == answerCheck) {
        wins++;
        console.log("Wins: " + wins);
        Reset();
    
    } else if (guessesLeft === 0 && computerChoice !== answerCheck) {
        losses++;
        console.log("Losses: " + losses);
        Reset();
    }
    
//Add text to html
    document.getElementById("userChoice-text").textContent = "You guessed: " + userChoice;
    document.getElementById("guessesLeft-text").textContent = "You have " + guessesLeft + " guesses left.";
    document.getElementById("guessesMade-text").textContent = "Your guesses so far: " + userGuesses;
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;
}






   


    
