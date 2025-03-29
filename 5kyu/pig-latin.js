"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
var pigIt = function (a) {
    return a
        .split(" ")
        .map(function (word) {
        if (word.trim() === "") {
            return "";
        }
        if (/^[!?.,]$/.test(word)) {
            return word;
        }
        return word.slice(1) + word[0] + "ay";
    })
        .join(" ");
};
exports.pigIt = pigIt;
console.log((0, exports.pigIt)("hello"));
