function playCraps() {
    /*this is a function to play craps in the game.html
    for craps, sum of 11 or 7 loses, even doubles wins, and everything else is a push
    Brian Parsons
    bparsons82589@uat.edu
    10/19/2023*/
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die1);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //check for 7 or 11 meaning loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameRes").innerHTML = "Better luck next time twinkle toes. You failed to beat Toph!";
    } //check for doubles and even for the win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML = "Congradulations! You are triumphant against Toph!";
    } //neither win nor loss so a push
    else {
        document.getElementById("gameRes").innerHTML = "You didnt win or lose";
    }

}