//Problem: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

const highAndLow = (nums) => {
  return ` ${Math.max(...nums.split(' '))} ${Math.min(...nums.split(' '))}`;
};
