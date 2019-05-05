describe("Bowling", function() {
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  });

  describe("roll", function() {
    it("throws error when no more rolls available", function() {
      for (var i = 0; i < 20; i++) bowling.roll(0);
      expect(bowling.roll(4)).toEqual("no more rolls available");
    });
  });


  describe("Game over", function() {
    it("returns true when the game is over", function() {
      for (var i = 0; i < 20; i++) bowling.roll(0);
      bowling.endgame();
      expect(bowling.gameover).toEqual(true);
    })
  })

  describe("gutter game", function() {
    it("rolls 0, 20 times", function() {
      for (var i = 1; i < 21; i++) { bowling.roll(0);}
      expect(bowling.score).toEqual(0);
    });
  });


});
