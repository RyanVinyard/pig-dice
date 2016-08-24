
var player1Turn = [];
var player1Score = [];






$(document).ready(function() {
var turnEnd = false;

  $("#dice").click(function() {
  var clickDiceRoll =  (Math.floor((Math.random() *6) + 1))
  turnEnd = false;

  if (clickDiceRoll === 1) {
    alert("u fucked ur turn is over");
    turnEnd = true;

  }

  else {
    player1Turn.push(clickDiceRoll);
    alert(player1Turn);
  }
  console.log(turnEnd);
  console.log(player1Turn);
  })



  $("#hold").click(function() {
    turnEnd = true
    console.log(turnEnd);
    console.log(player1Turn);
  });

  if (turnEnd === true) {
    alert("sup");
  //   player1Score.concat(player1Turn);
  //   console.log(player1Score);
  }

  });
