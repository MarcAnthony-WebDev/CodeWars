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

type CypherKey =
    | "A"
    | "a"
    | "D"
    | "d"
    | "Y"
    | "y"
    | "O"
    | "o"
    | "L"
    | "l"
    | "I"
    | "i"
    | "G"
    | "g"
    | "E"
    | "e"
    | "R"
    | "r"
    | "P"
    | "p"
    | "U"
    | "u"
    | "K"
    | "k";

type CypherMap = Record<CypherKey, string>;

const encodeMap: CypherMap = {
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

export function encode(str: string): string {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return [...str].map((char) => encodeMap[char] ?? char).join("");
}

export function decode(str: string): string {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return [...str].map((char) => encodeMap[char] ?? char).join("");
}
