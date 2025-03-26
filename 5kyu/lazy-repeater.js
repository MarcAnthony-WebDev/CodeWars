"use strict";
// The makeLooper() function (or make_looper in your language) takes a string 
// (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters 
// of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.
//
// For example:
//
// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLooper = void 0;
function makeLooper(str) {
    var index = 0;
    return function () {
        var char = str[index];
        index = (index + 1) % str.length;
        return char;
    };
}
exports.makeLooper = makeLooper;
var looper = makeLooper('abcdefg');
console.log(looper());
console.log(looper());
console.log(looper());
console.log(looper());
console.log(looper());
