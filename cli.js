var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');
var inquirer = require('inquirer');

// // slice out the first two args: node and fileName, keep the rest
// var args = process.argv.slice(2);

// // first index will tell us what action to take
// var command= args[0];


inquirer.prompt([
	{
		name: 'command',
		message: 'What kind of card would you like to create?' 
	},
	{
		name: 'front',
		message: 'What goes on the FRONT of the card?' 
	},
	{
		name: 'back',
		message: 'What goes on the BACK of the card?' 
	}
	]).then(function (answers) {

//answers are stored in a answers object and the property are the name specified in name:

		var command = answers.command.trim();
		var front= answers.front.trim();
		var back = answers.back.trim();


		// evaluate command answer and choose appropiate path
		switch(command){

			case "basic":

				var userBasicCard = new BasicCard(front, back);
				// calls log method on newly created card object
				userBasicCard.logCard();
				console.log("Front: "+userBasicCard.front);
				console.log("Back: "+userBasicCard.back);
				break;

			case "cloze":
				//using the cloze constructor we created a new object
				var userClozeCard = new ClozeCard(front, back);
				// calls log method on newly created card object
				userClozeCard.logCard();
				console.log("Full Text: "+userClozeCard.fullText);
				console.log("Cloze: "+userClozeCard.cloze);
				break;

			default:
				//if command doesnt match any of the options it'll go to default error msg
				console.log("Error 5000X-ALPHA902.v2: invalid input");

			break;

		};
   

});






