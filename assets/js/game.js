
//  random target point goal
var randomTargetPointGoal = Math.floor(Math.random() * 10);
//alert(randomTargetPointGoal);


// user point
var userPoint = 0;

$("#targetPoint").text(randomTargetPointGoal);
$("#yourPoint").text(userPoint);









$(document).ready(function() {
    $("img").on('click', function(event) { // when user clicks an image
        var imagePoint = parseInt($(this).attr('value')); // parse the text value into a number
        userPoint += imagePoint; // add image point to total value

        if( userPoint === randomTargetPointGoal) { // if user total value equals random target point
            $("#yourPoint").text(userPoint); // display your point to the page
            setTimeout(function() { // wait for half a second before alerting the message
                alert("Congrats, you win!"); // alert the win message
                // userPoint = 0;
                resetGame(); // call the reset function
            }, 500);

            // $("#yourPoint").text(userPoint);
            // userPoint = 0;

            // $("#targetPoint").text(randomTargetPointGoal);
            // randomTargetPointGoal = Math.floor(Math.random() * 10);
           
            

            
            
        }
        else if (userPoint > randomTargetPointGoal) {
            $("#yourPoint").text(userPoint);
            setTimeout(function() {
                alert("Game over. You lose!");
                // userPoint = 0;
                resetGame(); // call the reset function
            }, 500);

            // randomTargetPointGoal = Math.floor(Math.random() * 10);
            // $("#targetPoint").text(randomTargetPointGoal);

            
          

        }

        $("#yourPoint").text(userPoint); // sets user value 

       

        





    });

    function resetGame() {
        randomTargetPointGoal = Math.floor(Math.random() * 10);
        userPoint = 0;
        $("#targetPoint").text(randomTargetPointGoal);
        $("#yourPoint").text(userPoint);
    }




});







