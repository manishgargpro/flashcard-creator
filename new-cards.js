var inquirer = require("inquirer");

var BasicCard = require("BasicCard.js");

var ClozeCard = require("ClozeCard.js");

var cardArr = [];

var createCard = function () {
	inquirer.prompt([
		{
			"name": "cardType",
			"message": "Which kind of card?",
			"type": "list",
			"choices": ["Basic Card", "Cloze Card"]
		},
		{
			"name": "text1",
			"message": "Enter question:"
		},
		{
			"name": "text2",
			"message": "Enter answer:"
		},
		{
			"name": "createMore",
			"message": "Create more cards?",
			"type": "confirm"
		}
	]).then(function(answers){
		if (answers.cardType == "Basic Card") {
			var newCard = new BasicCard(answers.text1, answers.text2);
			cardArr.push(newCard);
		} else if (answers.cardType == "Cloze Card") {
			var newCard = new ClozeCard(answers.text1, answers.text2);
			cardArr.push(newCard);
		}
		if (answers.createMore) {
			createCard();
		} else {
			console.log(cardArr);
		}
	});
}

createCard();