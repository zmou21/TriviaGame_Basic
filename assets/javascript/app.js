
$(document).ready(function () {

	//global variables

	var time = 30;
	var intervalId;
	var questions = [
		{
			"question": "What is the capital of Chile?",
			"answer": ["Santiago", "Buenos Aires", "Mexico City", "Chile City"],
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
		},
		{
			"question": "What is the most populous city in the world?",
			"answer": ["Bejing", "Mexico City", "New York", "Tokyo"],
			"correct": "3"
		},
		{
			"question": "Who influenced the building of the Panama Canal?",
			"answer": ["Bob Barker", "Jose Martinez", "President Theodore Roosevelt", "Fidel Castro"],
			"correct": "2"
		},
		{
			"question": "Which country is the city of Abuja located?",
			"answer": ["Africa", "Nigeria", "India", "Egypt"],
			"correct": "1"
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
		// if ($("#repeat").show()) {
		// 	quizOver();
		// }
	};

	function quizOver() {
		clearInterval(intervalId);
	};

	function reset() {
		runTime();
		decrement();
	}

	// hides submit button until keyboard is pressed
	$("#button").hide();
	$("#repeat").hide();

	// function with for loop to loop through answers and split the "," out

	document.body.onkeyup = function (e) {

	if (e.keyCode == 32) {

	$("#spaceBar").hide();
	$("#wins").hide();
	$("#button").show();
	$("#repeat").hide();

	function displayQuestion() {
		for (var i = 0; i < questions.length; i++) {
			$("#questions").append("<b><h3>" + questions[i].question + "</h3></b> <br>");
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
			var answer4 = ($( "input[name='q3']:checked" ).val());
			var answer5 = ($( "input[name='q4']:checked" ).val());
			var answer6 = ($( "input[name='q5']:checked" ).val());
			if(answer1 == questions[0].correct || answer2 == questions[1].correct || answer3 == questions[2].correct || answer4 == questions[3].correct|| answer5 == questions[4].correct || answer6 == questions[5].correct){
				win++;
				console.log("you got it");
			}
			else if(answer1 != questions[0].correct || answer2 != questions[1].correct || answer3 != questions[2].correct || answer4 != questions[3].correct|| answer5 != questions[4].correct || answer6 != questions[5].correct) {
				loss++;
				console.log("you lose");
			}
			else {
				console.log("please select answer");
			}
		});
	};

	function display() {
		$("#click").on("click", function() {

			$("#questions").html("<h2> Your Score: " + win + " wins and " + loss + " losses </h2>");

			quizOver();
			$("#timer").hide();
			$("#button").hide();
			$("#repeat").show();
			console.log(win);
			console.log(loss);

		});

	}

	function playAgain() {
		$("#play").on("click", function() {
			$("#timer").show();
			displayQuestion();
			display();
			reset();
		});
	}
			runTime();
			displayQuestion();
			correctAnswer();
		}
	}

});
