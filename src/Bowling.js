function Bowling() {
  this.score = 0;
  this.rolls = [];
  this.gameover = false;
};

Bowling.prototype.roll = function (number) {
  if (this.rolls.length < 20) {
  this.rolls.push(number);
} else {
  return "no more rolls available"
}
};

Bowling.prototype.score = function () {
  var result = 0
  for (var i = 0; i < 20; i++) {
    result += this.rolls[i];
  }
  this.score += result;
  return result;
};

Bowling.prototype.endgame = function () {
  if (this.rolls.length < 20) {
    this.gameover = false;
  } else {
    this.gameover = true;
  }
};
