"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KataTwo = exports.Kata = void 0;
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.
//
//My Solution:
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.disemvowel = function (str) {
        return str
            .split("")
            .filter(function (l) { return !l.match(/[aeiouAEIOU]/); })
            .join("");
    };
    return Kata;
}());
exports.Kata = Kata;
//Most Clever
var KataTwo = /** @class */ (function () {
    function KataTwo() {
    }
    KataTwo.disemvowel = function (str) {
        return str.replace(/[aeiou]/gi, "");
    };
    return KataTwo;
}());
exports.KataTwo = KataTwo;
