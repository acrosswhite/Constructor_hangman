var numberOfGuesses = 10;

function ShowLetter(currentWord, letterGuessed){
	var alphabet = /^[A-Za-z]+$/

	this.foundMatch = false;
	this.wrongGuess = [];
	this.remainingLetters = currentWord.word.length

	this.display = currentWord.displayWord
	//change word to indexed letters
	//replace letters with _

	this.letters = function(){
		console.log("letters called")
			this.guess = letterGuessed.userGuess
		if (this.remainingLetters > 0) {
			if (this.guess.length !== 1){
				console.log("please enter one letter");
			}
			else if (!alphabet.test(this.guess)) {
				console.log("select a valid letter");
			}
			else {
				for (var j = 0; j < currentWord.word.length; j++) {
					if (this.guess === currentWord.word.charAt(j)){
					this.display[j] = this.guess;
					this.foundMatch = true;
					console.log("Your guess " + this.guess + " is correct!")
					console.log(currentWord.word)
					}
				}
			}
			this.wrongGuess.push(this.guess);
			if (this.foundMatch === false) {
					console.log("incorrect guess, please try again");
					this.numberOfGuesses --;
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
}



module.exports = ShowLetter;