var BasicCard = function (frontText, backText) {
	this.type = "BasicCard";
	this.front = frontText;
	this.back = backText;
	this.showFront = function () {
		console.log(this.front);
	}
	this.showBack = function () {
		console.log(this.back);
	}
}

module.exports = BasicCard;