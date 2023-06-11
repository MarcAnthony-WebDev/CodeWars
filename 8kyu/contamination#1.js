//My Solution

function contamination(text, char) {
  let result = '';
  if (text.length === 0 || char.length === 0) return '';
  for (let i = 0; i < text.length; i++) {
    result += char;
  }
  return result;
}

//Best Practice
function contamination(text, char) {
  return char.repeat(text.length);
}
