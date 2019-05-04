function Bowling() {
  this.score = 0
};

Bowling.prototype.roll = function (number) {
  this.score += number;
};

Bowling.prototype.currentScore = function () {
  return this.score;
};
