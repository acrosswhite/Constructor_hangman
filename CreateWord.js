
var gameWords = ["Mickey", "Minnie", "Goofy", "Donald Duck", "Pluto", "Cinderella", "Snow White"];

function CreateWord(gameWords){
	this.word = gameWords[Math.floor(Math.random()*gameWords.length)];

	this.displayWord = new Array(this.word.length);

	for (var i = 0; i < this.word.length; i++) {
		this.displayWord[i] = "_"
	}
}

CreateWord.prototype.display = function (){
		return this.displayWord.join(' ')
}

CreateWord.prototype.notWon = function (){
	return this.displayWord.includes("_")
}

module.exports = CreateWord;