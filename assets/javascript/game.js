var letters = ["q","w","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var win = 0;
var loss = 0;
var playerguess;
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
            document.getElementById("remain").textContent = ("Guesses left: " + tries);
            document.getElementById("guess").textContent = ("Your guesses so far:");
            document.getElementById("notif").textContent = (" ");
            comguess = letters[Math.round(Math.random() * (letters.length - 1))];
            console.log(comguess)
        }
        else if (playerguess != comguess) {
            document.getElementById("guess").textContent += (" " + playerguess)
            document.getElementById("notif").textContent = ("Your guess is incorrect, try again!");
            tries--;
            document.getElementById("remain").textContent = ("Guesses left: " + tries);
        }
    }
    else if (tries === 0) {
        alert("You have run out of guesses! You lose! The letter was " + comguess);
        loss++;
        document.getElementById("loss").textContent = ("Losses: " + loss);
        document.getElementById("notif").textContent = (" ");
        document.getElementById("guess").textContent = ("Your guesses so far:");
        comguess = letters[Math.round(Math.random() * (letters.length - 1))];
        tries = 10;
        document.getElementById("remain").textContent = ("Guesses left: " + tries);
        console.log(comguess)
    }
}

console.log(comguess)