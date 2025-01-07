// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// my solution
export const findOdd = (xs: number[]): number => {
  // Create an object to count occurrences of each number
  const count: Record<number, number> = {};

  // Count occurrences of each number
  xs.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  // Find and return the number with an odd count
  for (const num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num); // Convert string key to number
    }
  }

  console.log(count);
  throw new Error("No number with an odd count found");
};
