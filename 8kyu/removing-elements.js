/*Problem: Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/

//My Solution:
function removeEveryOther(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? newArr.push(arr[i]) : null;
  }
  return newArr;
}

//Best Practice:
function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

//Another solution:
function removeEveryOther(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
