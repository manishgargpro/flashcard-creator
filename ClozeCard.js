var ClozeCard = function (partialText, clozeDeletion) {
	this.type = "ClozeCard";
	this.incomplete = partialText;
	this.answer = clozeDeletion;
	this.complete = function () {
		var n = this.incomplete.replace("...", this.answer);
		console.log(n);
	}
}

module.exports = ClozeCard;