function Player(player, turn) {
  this.playerLabel = player;
  this.turn = turn;
  // this.diceRoll = 0;
  this.turnScore = 0;
  this.playerScore = 0;

}

// Player.prototype.roll = function(clickDiceRoll) {
//   this.turnScore = this.turnScore + clickDiceRoll;
//   return this.turnScore;
// }

Player.prototype.turnSwitch = function() {
  console.log(this.turn);
  if (this.turn === true) {
    this.turn = false;
    // console.log(this.turn + " after " + this.playerLabel);
    return this.turn;
  }
  else {
    this.turn = true;
    // console.log(this.turn + " after "  + this.playerLabel);
    return this.turn;
  }
}

Player.prototype.calculateTurnScore = function(clickDiceRoll) {
  this.turnScore = this.turnScore + clickDiceRoll;
  return this.turnScore;
}

Player.prototype.calculatePlayerScore = function() {
  this.playerScore = this.turnScore + this.playerScore;
  return this.playerScore;
}

function add(a, b) {
  return a + b;
}

// User interface Logic //
$(document).ready(function() {

  var player1 = new Player("Player 1", true);
  var player2 = new Player("Player 2", false);

  $("#dice").click(function() {
    var clickDiceRoll =  (Math.floor((Math.random() *6) + 1))
    $("#yourRoll").text(clickDiceRoll);

    if (clickDiceRoll === 1) {
      player1.turnSwitch();
      player2.turnSwitch();
      player1.turnScore = 0;
      player2.turnScore = 0;
    }

    else {
      if (player1.turn === true) {
        player1.calculateTurnScore(clickDiceRoll);
      }
      else {
        player2.calculateTurnScore(clickDiceRoll);
      }
    }
    var currentScore1 = player1.turnScore;
    var currentScore2 = player2.turnScore;
    if (player1.turn === true) {
      $("#thisTurnScore").text(currentScore1);
    }
    else {
      $("#thisTurnScore").text(currentScore2);
    }
  });

  $("#hold").click(function() {
    player1.calculatePlayerScore();
    player2.calculatePlayerScore();
    player1.turnSwitch();
    player1.turnScore = 0;
    player2.turnScore = 0;
    $("#player1score").text(player1.playerScore);
    $("#player2score").text(player2.playerScore);
    if (player1.playerScore >= 100) {
      $("#winner").text("Player 1")
      $("#gameview").hide("slow");
      $("#winview").fadeIn("slow");
    }
    else if (player2.playerScore >= 100) {
      $("#winner").text("Player 2")
      $("#gameview").hide("slow");
      $("#winview").fadeIn("slow");
    }
  });


});
