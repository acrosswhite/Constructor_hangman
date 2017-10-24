var inquirer = require("inquirer");
var gameWords = ["Mickey", "Minnie", "Goofy", "Donald Duck", "Pluto", "Cinderella", "Snow White"];
var alphabet = /^[A-Za-z]/
var numberOfGuesses = 10;
//var currentWord = [];
var wrongGuess = [];

//var numberOfSpaces = startingWord.length;


function CreateWord(gameWords){
	//console.log("Starting the Game!");
	this.word = gameWords[Math.floor(Math.random()*gameWords.length)];
	this.guesses = numberOfGuesses;
	this.displayWord = new Array(this.word.length);

	for (var i = 0; i < this.word.length; i++) {
		this.displayWord[i] = "_"
		//console.log(this.displayWord)
	}

	this.display = function (){
		return this.displayWord.join(' ')
	}
	//console.log(this.word)
	//do some stuff to generate new word for guessing
	//reset value of number of guesses
}

function ShowLetter(currentWord, letterGuessed){

	var foundMatch = false;
	wrongGuess = [];
	remainingLetters = currentWord.word.length
	guess = letterGuessed.userGuess
	//change word to indexed letters
	//replace letters with _

	if (remainingLetters > 0) {
		if (guess.length !== 1){
			console.log("please enter one letter");
		}
		else if (!alphabet.test(guess)) {
			console.log("select a valid letter");
		}
		else {
			for (var j = 0; j < currentWord.length; j++) {
				if (guess === currentWord.charAt(j)){
				displayWord[j] = guess;
				remainingLetters --;
				foundMatch = true;
				console.log("Your guess" + guess + "is correct!")
				console.log(currentWord)
				}
			}
		}
		wrongGuess.push(guess);
		if (foundMatch === false) {
				console.log("incorrect guess, please try again");
				numberOfGuesses --;
			}
		if (numberOfGuesses === 0){
			console.log("you ran out of turns! GAME OVER :(");
	}
	//prompt user for guess and change display of _ to letter guessed
	//add guessed letters to guesses array
	//when all letters guessed, user wins
	//when number of guesses empty, user loses
	}
}



function UserInput (currentWord){
	if (numberOfGuesses >= 0){
		inquirer.prompt([
		{ name: "userGuess",
		message: "Guess a letter"
		}
		]).then(function(letterGuessed){
			console.log(letterGuessed)
			ShowLetter(currentWord, letterGuessed);
			UserInput(currentWord);
			})	
	}

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
		//console.log(answers)
		//console.log(JSON.stringify(answers, null, 2));
		if(answers.game){
			console.log("start")
			currentWord = new CreateWord(gameWords);
			console.log("New word to guess" + "\nYou have 10 guesses")
			console.log(currentWord.display());
			//console.log(currentWord)
			console.log("Starting the game")
			UserInput(currentWord);

			//console.log()
		}
		else {
			console.log("ok, bye!")
		}
	})


