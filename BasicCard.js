var fs = require('fs');


function BasicCard ( front, back ){

	 if (this instanceof BasicCard){ 

		 this.front = front;
		 this.back = back;

		 // upon calling this method 
		 this.logCard= function(){

			fs.appendFile("cards.txt", "Basic Card: "+this.front+" "+this.back+", ", function(error){

				if(error){
					console.log("Error writting file");
				}

				console.log("Basic card created!");

			});
		 }

	}
	else{

		return new BasicCard(front, back);

	}

};



//exports the function to any file that requires it
module.exports = BasicCard;


