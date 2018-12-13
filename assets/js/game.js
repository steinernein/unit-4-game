
//  random target point goal
var randomTargetPointGoal = Math.ceil(Math.random() * 100);



// user point
var userPoint = 0;

// total wins
var totalWins = 0;

// total losses
var totalLosses = 0;


$("#targetPoint").text(randomTargetPointGoal); // display the random target point goal to the page.
$("#yourPoint").text(userPoint); // display the user point to the page.
$("#totalWins").text(totalWins); // display the total wins to the page.
$("#totalLosses").text(totalLosses); // display the total losses to the page.


$(document).ready(function() {
    $("img").on('click', function(event) { // when user clicks an image
        var imagePoint = parseInt($(this).attr('value')); // parse the text value into a number
        userPoint += imagePoint; // add image point to total value

        if( userPoint === randomTargetPointGoal) { // if user total value equals random target point
            $("#yourPoint").text(userPoint); // display your point to the page
            setTimeout(function() { // wait for half a second before alerting the message
                alert("Congrats, you win!"); // alert the win message
                
                resetGame(); // call the reset function
            }, 500);

            totalWins++; // increment totalWins by 1

            $("#totalWins").text(totalWins); // display the total wins to the page

           

            
            
        }
        else if (userPoint > randomTargetPointGoal) {
            $("#yourPoint").text(userPoint);
            setTimeout(function() {
                alert("Game over. You lose!");
                
                resetGame(); // call the reset function
            }, 500);

            totalLosses++; // increment total losses by 1
            $("#totalLosses").text(totalLosses); // display the total losses to the page

    
          

        }

        $("#yourPoint").text(userPoint); // sets user value 


    });

    function resetGame() {
        randomTargetPointGoal = Math.ceil(Math.random() * 100);
        userPoint = 0;
        $("#targetPoint").text(randomTargetPointGoal);
        $("#yourPoint").text(userPoint);
    }

});