"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareSum = void 0;
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
function squareSum(numbers) {
  return numbers.reduce(function (acc, cumm) {
    return acc + cumm * cumm;
  }, 0);
}
exports.squareSum = squareSum;
console.log(squareSum([2, 2, 3]));
console.log(squareSum([3, 4, 5])); // 50
