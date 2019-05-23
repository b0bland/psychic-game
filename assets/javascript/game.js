var letters = ["q","w","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var win = 0;
var loss = 0;
var playerguess;
var comguess;
var tries = 0;

comguess = letters[Math.round(Math.random() * (letters.length - 1))]

document.onkeypress = function(input) {
    playerguess = input.key.toLowerCase();
    if (tries < 10) {
        if (playerguess === comguess) {
            alert("You have guessed the right letter!");
            win++;
            tries = 0;
            document.getElementById("wins").textContent = ("Wins: " + win);
            document.getElementById("remain").textContent = ("Guesses left: 10");
            document.getElementById("guess").textContent = ("Your guesses so far:");
            comguess = letters[Math.round(Math.random() * (letters.length - 1))];
            console.log(comguess)
        }
    }
}

console.log(comguess)