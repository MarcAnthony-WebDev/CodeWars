// Task: 
// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
//
// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
//
// Test examples:
//
// "EBG13 rknzcyr." -> "ROT13 example."
//
// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"



const alpha = 'abcdefghijklmnopqrstuvwxyz';

const rotate13 = [...alpha].map((c, i) => alpha[(i + 13) % 26])

function rot13(str) {
  return str
    .split('')
    .map((ch) => {
      const lower = ch.toLowerCase();
      const idx = alpha.indexOf(lower);
      if (idx <= -1) {
        return ch;
      }
      const rotated = rotate13[idx];
      return ch === lower 
      ? rotated 
      : rotated.toUpperCase();
    })
  .join('')
}

console.log(rot13('hello'))
console.log(rot13('This is rotated 13 letters forwards.'))
console.log(27 % 26);
