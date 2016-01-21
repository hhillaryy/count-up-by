
describe("countUpBy", function() {
  it("counts by 1 until a given number", function() {
    expect(countUpBy(1,10)).to.equal([1,2,3,4,5,6,7,8,9,10]);
  });
});
