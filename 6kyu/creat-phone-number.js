/*Problem: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.*/

const createPhone = (numbers) => {
  let phoneNumber = '(';
  for (let i = 0; i < numbers.length; i++) {
    if (i === 2) {
      phoneNumber += numbers[i] + ') ';
    } else if (i === 5) {
      phoneNumber += numbers[i] + '-';
    } else {
      phoneNumber += numbers[i];
    }
  }
  return phoneNumber;
};

//Best Practice:
const createPhoneNumber = (numbers) => {
  return numbers.reduce(
    (phoneNum, arr) => phoneNum.replace('x', arr),
    '(xxx) xxx-xxxx'
  );
};
