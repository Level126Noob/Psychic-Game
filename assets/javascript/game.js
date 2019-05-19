var userguess = "Your Guesses so far"
var wins = "0"
var losses = "0"

var directionsText = document.getElementById("directions");
var userChoiceText = document.getElementById("tries");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

var computerguesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeyup = function(event) {

    var userguess = event.key;

    var computerguess = computerguesses[Math.floor(Math.random() * computerguesses.length)];
