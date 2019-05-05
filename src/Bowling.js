function Bowling() {
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
  var result = 0;
  var rollIndex = 0;
  for (var i = 0; i < 10; i++) {
    if(this.rolls[rollIndex] == 10) {
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] +
      this.rolls[rollIndex + 2];
      rollIndex += 1;
    } else if(this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] +
      this.rolls[rollIndex + 2];
      rollIndex += 2;
    } else {
      result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
      }
  }
  return result;
};

Bowling.prototype.endgame = function () {
  if (this.rolls.length < 20) {
    this.gameover = false;
  } else {
    this.gameover = true;
  }
};
