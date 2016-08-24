


$(document).ready(function() {
  var turnPlayer1 = true;
  var turnPlayer2 = false;
  var player1Turn = [];
  var player1Score = [];
  var player2Turn = [];
  var player2Score = [];

  $("#dice").click(function() {
  // console.log(turnPlayer1 + "player1");
  // console.log(turnPlayer2 + "player2");
  var clickDiceRoll =  (Math.floor((Math.random() *6) + 1))


  if (clickDiceRoll === 1) {
    console.log("u fucked ur turn is over");
    if (turnPlayer1 === true) {
      player1Turn = [];
      turnPlayer1 = false;
      turnPlayer2 = true;
    }
    else {
      player2Turn = [];
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
  function add(a, b) {
    return a + b;
  }
  var currentScore1 = player1Turn.reduce(add, 0);
  var currentScore2 = player2Turn.reduce(add, 0);


  if (turnPlayer1 === true) {
    $("#yourRoll").text(clickDiceRoll);
    $("#thisTurnScore").text(currentScore1);
  }
  else {
    $("#thisTurnScore").text(currentScore2);
  }

  $("#hold").click(function() {
    if (turnPlayer1 === true && turnPlayer2 === false) {
      player1Score = player1Score.concat(player1Turn);
      player1Turn = [];
      turnPlayer1 = false;
      turnPlayer2 = true;
    }
    else {
      player2Score = player2Score.concat(player2Turn);
      player2Turn = [];
      turnPlayer2 = false;
      turnPlayer1 = true;
    }
    console.log(turnPlayer1);
      $("#player1score").text(player1Score.reduce(add, 0));
      $("#player2score").text(player2Score.reduce(add, 0));

    });
  });
});
