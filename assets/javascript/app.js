
//global variables

var time;
var intervalId;
var questionsObj = {
	"What is the square root of 225?": [15, 25, 22.5, 10], 
	"Which country gifted the Statue of Liberty to the United States?": ["England","France", "China", "Brazil"], 
	"Where is Petra?": ["Israel", "Greece", "Jordan", "Egypt"]
}
var win = 0;
var loss = 0;


$(document).ready(function () {

	// function with decrementing time interval 
	var time = 10;
	var split;


	function runTime() {
		intervalId = setInterval(decrement, 1000);
	};

	function decrement() {   
		time--;
		$("#timer").html(time);
		if (time === 0) {
			time = 0;
			quizOver();
			alert("Time is Up!")
		}
	};

	function quizOver () {
		clearInterval(intervalId);
	};


	// function with for loop to loop through answers and split the "," out 


	function questionAnswerDisplay() {

		for (var i = 0; i < questionsObj.length; i++) {

			$("#questions").append(questionsObj[i] + "<br>");

			// split = answersArr[i].split(",");

			// for (var j = 0; j < split.length; j++) {

			// 	$("#questions").append("<input type='radio' id='userPress'>" + split[j] + "<br>");
			

			// };		
		};	

	};

	var userClick = $("#userPress").click(function(){});



	// function answer() {
		
	// 	if (userClick == answersSplit[0]) {
	// 		console.log("you win");
	// 	}

	// 	if (answersSplit[5] == ) {
	// 		console.log("you win");
	// 	}
		
	// 	if (answersSplit[10]) {
	// 		console.log("you win");
	// 	}
		
	// };


	// runTime();
	questionAnswerDisplay();
	console.log(questionsObj[0])
	


});







