function Bowling() {
  this.score = 0;
  this.frame = 1;
  this.rollCount = 0;
  this.rolls = [];
  this.gameover = false;
};

Bowling.prototype.roll = function (number) {
  this.increaseRollNo(number);
  if (this.rolls.length < 22) {
  this.rolls.push(number);
} else {
  return "no more rolls available"
}
};

Bowling.prototype.totalscore = function () {
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

Bowling.prototype.increaseRollNo = function(number){
  if(number !== 10 || this.frameNo === 10){
    this.rollCount += 1;
  }
  else {
    this.rollCount += 2;
  }
};

Bowling.prototype.endgame = function () {
  if (this.frame === 11) {
    this.gameover = true;
  } else {
    this.gameover = false;
  }
};
