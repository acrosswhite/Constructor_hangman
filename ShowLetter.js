var alphabet = /^[A-Za-z]/
var numberOfGuesses = 10;

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

module.exports = ShowLetter;