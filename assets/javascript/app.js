
$(document).ready(function () {

	//global variables

	var time = 10;
	var intervalId;
	var questions = [ 
		{
			"question": "What is the square root of 225?",
			"answer": [15, 25, 22.5, 10],
			"correct": "0"	
		},
		{
			"question": "Which country gifted the Statue of Liberty to the United States?",
			"answer": ["England", "France", "China", "Brazil"],
			"correct": "1"	
		},
		{
			"question": "Where is Petra?",
			"answer": ["Israel", "Greece", "Jordan", "Egypt"],
			"correct": "2"	
		}
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
				currentQuestion + [i];
				// console.log(currentQuestion + [i]);

			for (var j = 0; j < questions[i].answer.length; j++) {
				
				$("#questions").append("<input type='radio' class='input" + [i] + "' name='q" + [i] + "' value='" + j + "'>" + questions[i].answer[j] + "<br>");	
		
			}	

		};

	};

	function correctAnswer() {
		$("input").on("click", function() {
			var answer1 = ($( "input[name='q0']:checked" ).val());
			var answer2 = ($( "input[name='q1']:checked" ).val());
			var answer3 = ($( "input[name='q2']:checked" ).val());
			if(answer1 == questions[0].correct || answer2 == questions[1].correct || answer3 == questions[2].correct ){
				win++;
				console.log("you got it");
			}	
			else if(answer1 != questions[0].correct || answer2 != questions[1].correct || answer3 != questions[2].correct ) {
				loss++;
				console.log("you lose");
			}	
			else {
				console.log("please select answer");
			}										
		console.log(win);
		console.log(loss);
		});	
	}; 

	function radioCSS() {
		$(".input0").css("padding", "10%");
	}


	// runTime();
	displayQuestion();
	correctAnswer();
	radioCSS();	

});







