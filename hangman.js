var inquirer = require("inquirer");
var CreateWord = require("./CreateWord.js");
var ShowLetter = require("./ShowLetter.js")
var gameWords = ["Mickey", "Minnie", "Goofy", "Donald Duck", "Pluto", "Cinderella", "Snow White"];
//var alphabet = /^[A-Za-z]/
var numberOfGuesses = 10;
//var currentWord = [];
var wrongGuess = [];

function UserInput (currentWord){
	if (numberOfGuesses >= 0){
		console.log(numberOfGuesses)
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


