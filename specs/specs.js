describe("countBy", function(){
  it("establish a positive or negative number for our program to count by", function(){
    expect(countBy(2)).to.equal(2)
  });
})
describe("countTo", function(){
  it("establish a positive or negative number for the porgram to count to", function(){
    expect(countTo(10)).to.equal(10)
  });
});
describe("counter", function(){
  it("count by the the number defined by countBy until it is less than or equal to countTo", function(){
    expect(counter(2)).to.equal(10)
  });
});
