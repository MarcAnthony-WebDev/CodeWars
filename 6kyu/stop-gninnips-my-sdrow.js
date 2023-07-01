//Problem: write a function where you will recieve a string and you will have to reverse the words that have 5 or more letters
//ex: "Hey fellow warriors" => "Hey wollef sroirraw"
//ex: "This is a test" => "This is a test"
//ex: "This is another test" => "This is rehtona test"
//ex: "You are almost to the last test" => "You are tsomla to the last test"
//ex: "Just kidding there is still one more" => "Just gniddik ereht is llits one more"
//ex: "Seriously this is the last one" => "ylsuoireS this is the last one"

//My solution:
const spinWords = (str) =>
  str
    .split(' ')
    .map((word) =>
      word.length >= 5 ? word.split('').reverse().join('') : word
    )
    .join(' ');
