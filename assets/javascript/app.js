
$(document).ready(function () {

	//global variables

	var time = 10;
	var intervalId;
	var questions = [ 
		{
			"question": "What is the square root of 225?",
			"answer": [15, 25, 22.5, 10],
			"correct": 0	
		},
		{
			"question": "Which country gifted the Statue of Liberty to the United States?",
			"answer": ["England", "France", "China", "Brazil"],
			"correct": 1	
		},
		{
			"question": "Where is Petra?",
			"answer": ["Israel", "Greece", "Jordan", "Egypt"],
			"correct": 2	
		},	
		]
	var win = 0;
	var loss = 0;
	var currentQuestion = 0;


	// function with decrementing time interval

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

	function displayQuestion() {
		for (var i = 0; i < questions.length; i++) {
			$("#questions").append(questions[i].question + "<br>");

			for (var j = 0; j < questions[i].answer.length; j++) {
				$("#questions").append("<input type='radio' name='answer' value='" + j + "'>" + questions[i].answer[j] + "<br>");	
			}	

			$("input").on("click", function() {
				if($("input[name=answer]:checked").val() == questions[i].correct){
					console.log("you got it");
				};
			});


		};
		// currentQuestion++;
		// $("input").prop("checked", true);
	};

	// function correctAnswer() {
	// 	if( $("input[name=answer]:checked").val() == questions[0].correct){
	// 		console.log("you got it");
	// 	};
	// }; == questions[currentQuestion].correct






	// runTime();
	displayQuestion();
	// console.log(questions[0].correct);


});







