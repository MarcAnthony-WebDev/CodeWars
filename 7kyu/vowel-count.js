/*Problem:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
Strings
Fundamentals

Suggest kata description edits
*/

//const getCount = (str) => {
//  let vowelsCount = 0;
//  for (let i = 0; i < str.length; i++) {
//    switch (str[i]) {
//      case "a":
//      case "e":
//      case "i":
//      case "o":
//      case "u":
//        vowelsCount++;
//        break;
//      default:
//        break;
//    }
//  }
//  return vowelsCount;
//};

//Best Practice:
//function getCountTwo(str) {
//  return (str.match(/[aeiou]/gi) || []).length;
//}

//Another one:
//function getCountThree(str) {
//  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
//}

console.log(getCount("aeiou"));
