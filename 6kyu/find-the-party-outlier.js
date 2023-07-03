//Problem: You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

const findOutliers = (ints) => {
  let even = ints.filter((n) => n % 2 === 0);
  let odd = ints.filter((n) => n % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
};

//Other solutions:
function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.find(even);
}
