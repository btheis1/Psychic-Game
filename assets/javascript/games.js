

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]

document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();
    console.log(userChoice);
    console.log(computerChoice);
}
