var number = 30;
var intervalId;
var numCorrect = 0;
var numIncorrect = 0;

$("#stop").on("click", stop);
$(".begin").on("click", run);

function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
   $("#quiz").css("display", "block");

    }

function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").text(number);


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $("#quiz").css("display", "none");
        $("#timesUp").css("display", "block");
        
      }
    }

//  The stop function
    function stop() {


      clearInterval(intervalId);
    }

   
    $("#eight").on("click", correct);
    $("#nine").on("click", incorrect);
    $("#one").on("click", incorrect);
    $("#ten").on("click", incorrect);

    function correct() {
        $("#quiz").css("display", "none");
        $("#completed").css("display", "block");
        $("#correct").text("Correct: " + numCorrect +1);
        $("#incorrect").text("Inorrect: " + numIncorrect +0);
    }

    function incorrect() {
        $("#quiz").css("display", "none");
        $("#incompleted").css("display", "block");
        $("#correct2").text("Correct: " + numCorrect +0);
        $("#incorrect2").text("Inorrect: " + numIncorrect +1);
    }