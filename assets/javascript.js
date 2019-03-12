var number = 30;
var intervalId;
var numCorrect = 0;
var numIncorrect = 0;

$("#stop").on("click", stop);
$("#begin").on("click", run);

function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
   $("#start").css("display", "none")
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
        $("#quiz").css("display", "none")
        $("#timesUp").css("display", "block")
        
      }
    }

//  The stop function
    function stop() {


      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
