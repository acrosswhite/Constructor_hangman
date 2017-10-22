var inquirer = require("inquirer");
var gameWords = ["Mickey", "Minnie", "Goofy", "Donald Duck", "Pluto", "Cinderella", "Snow White"];
var numberOfGuesses = 10;
var currentWord = [];
var wrongGuess = [];

//var numberOfSpaces = startingWord.length;


function CreateWord(gameWords){
	console.log("Starting the Game!");
	this.word = function(){
		Math.floor(Math.random()*gameWords.length)};
	this.guesses = numberOfGuesses;
	//do some stuff to generate new word for guessing
	//reset value of number of guesses
}

function ShowLetter(currentWord){
	for (var i = 0; i < CreateWord.word.length; i++) {
		currentWord[i] = "_"
	}
	wrongGuess = [];
	remainingLetters = currentWord.length
	//change word to indexed letters
	//replace letters with _

	if (remainingLetters > 0) {
		if (guess.length !== 1){
			console.log("please enter one letter");
		}
		else if (alphabet.indexOf(guess) <= -1) {
			console.log("select a valid letter");
		}
		else {
			for (var j = 0; j < currentWord.length; j++) {
				if (guess === currentWord.charAt(j)){
				displayWord[j] = guess;
				remainingLetters --;
				foundMatch = true;
		}
		wrongGuess.push(guess);
		if (foundMatch === false) {
				console.log("incorrect guess, please try again");
				numberOfTurns --;
			}
		if (numberOfTurns === 0){
			console.log("you ran out of turns! GAME OVER :(");
	}
	//prompt user for guess and change display of _ to letter guessed
	//add guessed letters to guesses array
	//when all letters guessed, user wins
	//when number of guesses empty, user loses
}

inquirer.prompt([
	{
		name: "name",
		message: "Hello, what is your name?"
	},
	{
		name: "game",
		message: "Do you want to play a game of hangman?",
		type: "confirm",
	}
	]).then(function(answers){
		if(confirm){
			currentWord = new CreateWord(gameWords);
			ShowLetter(currentWord);

			//console.log()
		}
		else {
			console.log("ok, bye!")
		}
	})