//Instructions
// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// my solution
export function alphabetPosition(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .split("")
        .map((letter) => {
        return (letter.charCodeAt(0) - 96).toString();
    })
        .join(" ");
}
