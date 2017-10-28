var inquirer = require("inquirer");
var CreateWord = require("./CreateWord.js");
var ShowLetter = require("./ShowLetter.js")
var gameWords = ["mickey", "minnie", "goofy", "pluto", "cinderella", "mulan", "elsa", "simba"];
var numberOfGuesses = 10;
var wrongGuess = [];

function UserInput (currentWord){
	if ((numberOfGuesses > 0) && (currentWord.notWon())){
		inquirer.prompt([
		{ name: "userGuess",
		message: "Guess a letter"
		}
		]).then(function(letterGuessed){
			letterEntered = new ShowLetter(currentWord, letterGuessed)
			console.log("\n")
			//console.log(letterGuessed)
			letterEntered.letters();
			console.log(currentWord.display());
			console.log("\n")
			UserInput(currentWord);
			if (letterEntered.foundMatch===false){
				numberOfGuesses--;
				console.log("Wrong Guess, try again!")
				console.log("\nNumber of Guesses left: " + numberOfGuesses + "\n")
			}
			})	
	}
	else if (numberOfGuesses = 0){
		console.log("Oh no! you lose! run node hangman.js to play again")
	}
	else if (currentWord.notWon() === false){
		console.log("You win! Amazing! play again by typing node hangman.js")
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
		if(answers.game){
			console.log("\n")
			console.log("Starting the game")
			console.log("--------------------------------")
			currentWord = new CreateWord(gameWords);
			console.log("You have a new word to guess" + "\nYou have " + numberOfGuesses + " guesses\n")
			console.log(currentWord.display());
			console.log("\n")
			UserInput(currentWord);
		}
		else {
			console.log("ok, bye!")
		}
	})


