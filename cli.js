var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');

// slice out the first two args: node and fileName, keep the rest
var args = process.argv.slice(2);

// first index will tell us what action to take
var command= args[0];

// evaluate 
switch(command){

	case "basic":

		var userBasicCard = new BasicCard(args[1], args[2]);
		// calls log method on newly created card object
		userBasicCard.logCard();
		console.log("Front: "+userBasicCard.front);
		console.log("Back: "+userBasicCard.back);
		break;

	case "cloze":

		var userClozeCard = new ClozeCard(args[1], args[2]);
		// calls log method on newly created card object
		userClozeCard.logCard();
		console.log("Full Text: "+userClozeCard.fullText);
		console.log("Cloze: "+userClozeCard.cloze);
		break;

	default:

		console.log("Error 5000X-ALPHA902.v2: invalid input");

	break;

};