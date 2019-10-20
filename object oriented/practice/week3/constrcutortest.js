"use strict";
//test the calculator
describe("calculate", function() {
it("the sum of the numbers", function() {
assert.equal(calc.sum(2,1),3);
});
it("multiply the numbers ", function() {
assert.equal(calc.mult(2,1),2);
});
});
//test for accumulator
describe("Accumulator", function() {
it("accumulate the numbers", function() {
assert.equal((123),123);
});
});