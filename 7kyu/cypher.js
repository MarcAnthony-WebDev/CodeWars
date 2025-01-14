"use strict";
// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.
// The most frequently used key is "GA-DE-RY-PO-LU-KI".
//
//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.
//
// lookup map
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
var encodeMap = {
    "A": "G",
    "a": "g",
    "D": "E",
    "d": "e",
    "Y": "R",
    "y": "r",
    "O": "P",
    "o": "p",
    "L": "U",
    "l": "u",
    "I": "K",
    "i": "k",
    "G": "A",
    "g": "a",
    "E": "D",
    "e": "e",
    "R": "Y",
    "r": "y",
    "P": "O",
    "p": "o",
    "U": "L",
    "u": "l",
    "K": "I",
    "k": "i",
};
function encode(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return __spreadArray([], str, true).map(function (char) { var _a; return (_a = encodeMap[char]) !== null && _a !== void 0 ? _a : char; }).join("");
}
exports.encode = encode;
function decode(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return __spreadArray([], str, true).map(function (char) { var _a; return (_a = encodeMap[char]) !== null && _a !== void 0 ? _a : char; }).join("");
}
exports.decode = decode;
