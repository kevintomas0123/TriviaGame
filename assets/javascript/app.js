// Global Vars
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Questions and Answers
    var question = ["What is the leader of the White Walkers known as?",
    " Which of the following is NOT a family in Game of Thrones?", "What is Samwell Tarly's brother called?", "Who says the famous line When you play the game of thrones you win or you die. There is no middle ground?", "During Brienne of Tarth's fight with the Hound, which body part did she bite off?",
    "Which character says the line: All men must die, but we are not men?", "Where does Arya undergo her training to become 'no-one' and part of the Faceless Men?", "What is the name of the sword that Lord Commander Mormont gives to Jon Snow?"];
    var answer = ["The Night King", "Mortensen", "Dickon", "Cersei Lannister", "Ear", "Daenerys Targaryen", "The House of Black and White", "Longclaw"];
    var firstChoice = ["The Ice King", "Stark", "Dickon", "Varys", "Ear", "Cersei Lannister", "The Great Sept Of Balor", "Longtooth"];
    var secondChoice = ["The Night King", "Tyrell", "Willyon", "Littlefinger", " Nose", "Arya Stark", "The House of Black and White", "Heartsbane"];
    var thirdChoice = ["The Undead King", "Mortensen", "Wangon", "Cersei Lannister", "Finger", "Daenerys Targaryen", "The Iron Bank Of Braavos", "Heartsclaw"];
    var fourthChoice = ["The Sun King", "Bolton", "Pensio", "Tywin Lannister", "Toe", "Margaery Tyrell", "The House of Flying Daggers", "Longclaw"];

//show and hide functions
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    // hover css
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Answer checker
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// end game checker
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

//image display
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/NightKing.png">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/Mortesen.png">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/Dickon.png">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/Cersei.png">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/ear.jpg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/Danny.png">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/House.png">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="./assets/images/LongClaw.png">');
        }
    }

 // Results Function
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

// Reset results
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});