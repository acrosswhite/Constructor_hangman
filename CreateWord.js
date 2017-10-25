var numberOfGuesses = 10;

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

module.exports = CreateWord;