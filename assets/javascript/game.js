var letters = ["q","w","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var win = 0;
var loss = 0;
var playerguess;
var playerguessarr = [];
var comguess;
var tries = 10;

comguess = letters[Math.round(Math.random() * (letters.length - 1))]
document.getElementById("remain").textContent += ("Guesses left: " + tries);

document.onkeypress = function(input) {
    playerguess = input.key.toLowerCase();
    if (tries > 0) {
        if (playerguess === comguess) {
            alert("You have guessed the right letter!");
            win++;
            tries = 10;
            document.getElementById("wins").textContent = ("Wins: " + win);
            document.getElementById("remain").textContent = ("Guesses left: 10");
            document.getElementById("guess").textContent = ("Your guesses so far:");
            document.getElementById("notif").textContent = (" ");
            comguess = letters[Math.round(Math.random() * (letters.length - 1))];
        }
        else if (playerguess != comguess) {
            document.getElementById("guess").textContent += (" " + playerguess)
            document.getElementById("notif").textContent = ("Your guess is incorrect, try again!");
            tries--;
            document.getElementById("remain").textContent = ("Guesses left: " + tries);
        }
    }
}

console.log(comguess)