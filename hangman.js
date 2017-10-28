var inquirer = require("inquirer");
var CreateWord = require("./CreateWord.js");
var ShowLetter = require("./ShowLetter.js")
var gameWords = ["Mickey", "Minnie", "Goofy", "Pluto", "Cinderella", "Mulan", "Elsa", "Simba"];
var numberOfGuesses = 10;
var wrongGuess = [];

function UserInput (currentWord){
	if ((numberOfGuesses >= 0) && (currentWord.notWon())){
		console.log(numberOfGuesses)
		inquirer.prompt([
		{ name: "userGuess",
		message: "Guess a letter"
		}
		]).then(function(letterGuessed){
			letterEntered = new ShowLetter(currentWord, letterGuessed)
			console.log(letterGuessed)
			console.log(letterEntered.letters());
			console.log(currentWord.display());
			UserInput(currentWord);
			})	
	}
	else if (numberOfGuesses <= 0){
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


