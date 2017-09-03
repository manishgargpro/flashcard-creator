var inquirer = require("inquirer");

var fs = require("fs")

var BasicCard = require("./BasicCard.js");

var ClozeCard = require("./ClozeCard.js");

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
			fs.appendFile("card-array.json", JSON.stringify(newCard, null, 2) + "\n", function (error) {
				if (error) {console.log(error)}
			});
		} else if (answers.cardType == "Cloze Card") {
			if (answers.text1.includes("...")) {
				var newCard = new ClozeCard(answers.text1, answers.text2);
				fs.appendFile("card-array.json", JSON.stringify(newCard, null, 2) + "\n", function (error) {
					if (error) {console.log(error)}
				});
			} else {
				console.log('Error: unable to create cloze card: ' + '"' + answers.text1 + '"' + ' needs "..." in place of answer')
			}
		}
		if (answers.createMore) {
			createCard();
		} else {
			renderCards();
		}
	});
}

var renderCards = function () {
	fs.readFile("card-array.json", "utf8", function(error, data){
		if (error) {console.log(error)};
		console.log(data);
	})
}

createCard();