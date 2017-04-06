var fs = require('fs');


function checkInput(cloze, text){

	// console.log("cloze: "+cloze);
	// console.log("text: "+text);

	cloze= cloze.trim();
	text= text.trim();

	text= text.substring(0, cloze.length);

	// console.log("1: "+cloze);
	// console.log("2: "+text);

	if (cloze === text){
	return true;	
	}
	else{
	console.log("Cloze does not appear in Full Text");
	return false;
	}
};



function ClozeCard ( cloze, text ){

// if checkInput returns true proceed
	if ( checkInput(cloze, text)){


		this.fullText = text;
		this.cloze= cloze;


		this.partialText = function(){

		};

		// upon calling this method 
		this.logCard= function(){

			fs.appendFile("cards.txt","Cloze Card: "+ this.fullText, function(error){

				if(error){
					console.log("Error writting file");
				}

			});
		};
	};
	
};



module.exports = ClozeCard;


