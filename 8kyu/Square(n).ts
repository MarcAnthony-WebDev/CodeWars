// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, cumm) => acc + cumm * cumm, 0);
}

console.log(squareSum([2, 2, 3]));
console.log(squareSum([3, 4, 5])); // 50
