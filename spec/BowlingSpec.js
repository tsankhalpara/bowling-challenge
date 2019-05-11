describe("Bowling", function() {
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  });

  describe("roll", function() {
    it("throws error when no more rolls available", function() {
      rollMany(0,22);
      expect(bowling.roll(4)).toEqual("no more rolls available");
    });
    it("saves rolls", function() {
      rollMany(4,2);
      expect(bowling.rolls).toEqual([4,4]);
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
      expect(bowling.score()).toEqual(0);
    });
  });

  describe("roll all ones", function() {
    it("rolls 1, 20 times", function() {
      rollMany(1,20);
      expect(bowling.score()).toEqual(20);
    });
  });

  describe("roll a spare", function() {
    it("rolls 10 then add bonus roll score", function() {
      bowling.roll(4);
      bowling.roll(6);
      bowling.roll(2);
      rollMany(0,17);
      expect(bowling.score()).toEqual(14);
    });
  });

  describe("roll a strike", function() {
    it("rolls 10 then add bonus score", function() {
      bowling.roll(10);
      bowling.roll(4);
      bowling.roll(3);
      rollMany(0,16);
      expect(bowling.score()).toEqual(24);
    });
  });

  describe("perfect game", function() {
    it("rolls 10, 12 times", function() {
      rollMany(10,12);
      expect(bowling.score()).toEqual(300);
    });
  });

  var rollMany = function(number, rolls) {
    for (var i = 0; i < rolls; i++) { bowling.roll(number);}
  };
});
