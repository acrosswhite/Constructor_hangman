
var gameWords = ["Mickey", "Minnie", "Goofy", "Donald Duck", "Pluto", "Cinderella", "Snow White"];

function CreateWord(gameWords){
	var numberOfGuesses = 10;

	//console.log("Starting the Game!");
	this.word = gameWords[Math.floor(Math.random()*gameWords.length)];
	console.log(this.word)
	this.guesses = numberOfGuesses;
	this.displayWord = new Array(this.word.length);

	for (var i = 0; i < this.word.length; i++) {
		this.displayWord[i] = "_"
		//console.log(this.displayWord)
	}


}

CreateWord.prototype.display = function (){
		return this.displayWord.join(' ')
}

CreateWord.prototype.notWon = function (){
	return this.displayWord.includes("_")
}

module.exports = CreateWord;