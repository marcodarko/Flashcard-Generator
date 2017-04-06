var fs = require('fs');


// this function is called by the constructor to check if the cloze
// appears in the full text, if it does it returns true, else tells the user that
// it doesn't appear in the full text and returns false

function checkInput(cloze, text){

	// console.log("cloze: "+cloze);
	// console.log("text: "+text);

	cloze= cloze.trim();
	text= text.trim();

	// after trimming full text to the same length of cloze
	// both should be the same
	text= text.substring(0, cloze.length);

	// console.log("1: "+cloze);
	// console.log("2: "+text);

// check to see if cloze and full text trim are the same
	if (cloze === text){
		// if cloze appears in the beginning of the full text
	return true;	
	}
	else{
		// if it doesn't...
	console.log("Cloze does not appear in Full Text");
	return false;
	}
};



function ClozeCard ( cloze, text ){

// if checkInput returns true proceed
	if ( checkInput(cloze, text)){


		this.fullText = text;
		this.cloze= cloze;


		// upon calling this method 
		this.logCard= function(){

			fs.appendFile("cards.txt","Cloze Card: "+ this.fullText+", ", function(error){

				if(error){
					console.log("Error writting file");
				}

				console.log("Cloze card created!");

			});
		};
	};
	
};


//exports the function to any file that requires it
module.exports = ClozeCard;


