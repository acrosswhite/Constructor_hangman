

function ShowLetter(currentWord, letterGuessed){
	var alphabet = /^[A-Za-z]+$/

	this.foundMatch = false;
	this.wrongGuess = [];
	this.remainingLetters = currentWord.word.length

	this.display = currentWord.displayWord
	//change word to indexed letters
	//replace letters with _

	this.letters = function(){

			this.guess = letterGuessed.userGuess
		if (this.remainingLetters > 0) {
			if (this.guess.length !== 1){
				console.log("\n")
				console.log("please enter one letter");
			}
			else if (!alphabet.test(this.guess)) {
				console.log("\n")
				console.log("select a valid letter");
			}
			else {
				for (var j = 0; j < currentWord.word.length; j++) {
					if (this.guess === currentWord.word.charAt(j)){
					this.display[j] = this.guess;
					this.foundMatch = true;
					console.log("\n")
					console.log("Your guess " + this.guess + " is correct!")
					console.log("\n")
					}
				}
			}
			this.wrongGuess.push(this.guess);
			if (this.foundMatch === false) {
					console.log("\n")
					//console.log("incorrect guess, please try again");
				}

	//prompt user for guess and change display of _ to letter guessed
	//add guessed letters to guesses array
	//when all letters guessed, user wins
	//when number of guesses empty, user loses
		}
	}
}



module.exports = ShowLetter;