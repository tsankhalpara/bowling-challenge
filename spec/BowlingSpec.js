describe("Bowling", function() {
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  });

  describe("initial score", function() {
    it("has a start score of zero", function () {
      expect(bowling.score).toEqual(0);
    });
  });

  describe("roll", function() {
    it("adds roll to score", function() {
      bowling.roll(5);
      expect(bowling.score).toEqual(5);
    });
  });

  describe("score", function() {
    it("gives you the current score", function() {
      expect(bowling.currentScore()).toEqual(bowling.score);
    });
  });

  describe("gutter game", function() {
    it("rolls 0, 20 times", function() {
      for (var i = 1; i < 21; i++) bowling.roll(0);
      expect(bowling.currentScore()).toEqual(0);
    });
  });
});
