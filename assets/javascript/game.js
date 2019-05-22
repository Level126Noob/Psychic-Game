var computerguess = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var lettersguessed = [];

    var computerChoice = computerguess[Math.floor(Math.random() * computerguess.length)];

    console.log(computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
        guesses = 9;
        lettersguessed = [];
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses: " + guesses;
    document.getElementById('lettersguessed').innerHTML = "You Guessed: " + [userGuess];}
    