var letters = ["q","w","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var win = 0;
var loss = 0;
var playerguess;
var comguess;
var gameon = true;

comguess = letters[Math.round(Math.random() * (letters.length - 1))]

document.onkeypress = function(input) {
    playerguess = input.key.toLowerCase();
    
    console.log(comguess)
}

