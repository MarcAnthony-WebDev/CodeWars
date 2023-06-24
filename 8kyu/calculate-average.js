/* Problem: 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//My Solution:
const findAverage = (arr) => {
  // your code here
  if (!arr.length) return 0;
  let count = arr.reduce((acc, curr) => acc + curr);
  return count / arr.length;
};

//best practice:
var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
