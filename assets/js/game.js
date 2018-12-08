
//  random target point goal
var randomTargetPointGoal = Math.floor(Math.random() * 10);
//alert(randomTargetPointGoal);


// user point
var userPoint = 0;

$("#targetPoint").text(randomTargetPointGoal);
$("#yourPoint").text(userPoint);









$(document).ready(function() {
    $("img").on('click', function(event) {
        var imagePoint = parseInt($(this).attr('value'));
        userPoint += imagePoint;

        if( userPoint === randomTargetPointGoal) {
            alert("Congrats, you win!");
        }
        else if (userPoint > randomTargetPointGoal) {
            alert("Game over. You lose!");
        }

        $("#yourPoint").text(userPoint);

        





    });




});







