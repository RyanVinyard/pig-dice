

function add(a, b) {
  return a + b;
}

// User interface logic
$(document).ready(function() {
  var player1Turn = [];
  var player1Score = [];
  var player2Turn = [];
  var player2Score = [];
  var turnPlayer1 = true;
  var turnPlayer2 = false;

  $("#dice").click(function() {

  console.log(turnPlayer1 + "player1");
  console.log(turnPlayer2 + "player2");

  var clickDiceRoll =  (Math.floor((Math.random() *6) + 1))

  $("#yourRoll").text(clickDiceRoll);

  if (clickDiceRoll === 1) {
    player1Turn = [];
    player2Turn = [];

    if (turnPlayer1 === true) {
      turnPlayer1 = false;
      turnPlayer2 = true;
    }
    else {
      turnPlayer2 = false;
      turnPlayer1 = true;
    }
  }

  else {
    if (turnPlayer1 === true) {
      player1Turn.push(clickDiceRoll);
    }
    else {
      player2Turn.push(clickDiceRoll);
    }
  }

  var currentScore1 = player1Turn.reduce(add, 0);
  var currentScore2 = player2Turn.reduce(add, 0);

  if (turnPlayer1 === true) {
    $("#thisTurnScore").text(currentScore1);
  }
  else {
    $("#thisTurnScore").text(currentScore2);
  }

  $("#hold").click(function() {
    debugger;
    console.log("player1Score" + player1Score);
        console.log("player2Score" + player2Score);
    player1Score = player1Score.concat(player1Turn);
    player2Score = player2Score.concat(player2Turn);
    player1Turn = [];
    player2Turn = [];
    if (turnPlayer1 === true) {
      turnPlayer1 = false;
      turnPlayer2 = true;
    }
    else {
      turnPlayer2 = false;
      turnPlayer1 = true;
    }
      $("#player1score").text(player1Score.reduce(add, 0));
      $("#player2score").text(player2Score.reduce(add, 0));
    });
  });
});


function random() {
  var clickDiceRoll =  (Math.floor((Math.random() *6) + 1));
  return clickDiceRoll;
}
