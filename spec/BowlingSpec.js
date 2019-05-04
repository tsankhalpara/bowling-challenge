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

});
