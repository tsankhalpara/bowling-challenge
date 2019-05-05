describe("Bowling", function() {
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  });

  describe("roll", function() {
    it("throws error when no more rolls available", function() {
      rollMany(0,20);
      expect(bowling.roll(4)).toEqual("no more rolls available");
    });
  });


  describe("Game over", function() {
    it("returns true when the game is over", function() {
      rollMany(0,20);
      bowling.endgame();
      expect(bowling.gameover).toEqual(true);
    })
  })

  describe("gutter game", function() {
    it("rolls 0, 20 times", function() {
      rollMany(0,20);
      expect(bowling.score).toEqual(0);
    });
  });

  var rollMany = function(number, rolls) {
    for (var i = 0; i < rolls; i++) { bowling.roll(number);}
  }
});
