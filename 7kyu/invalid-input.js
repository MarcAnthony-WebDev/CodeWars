/* 
 * Error Handling is very important in coding and seems to be overlooked or not implemented properly.

#Task

Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)*/

function getCount(words) {
  if (typeof words !== "string" || !/^[a-z-A-Z]+$/.test(words)) {
    throw new Error("Input must contain valid characters");
  }
  const charsObj = {
    vowels: 0,
    consonants: 0,
  };
  const splitChars = words.trim().toLowerCase().split("");
  splitChars.forEach((letter) => {
    if (letter.match(/[aeiou]/g)) {
      charsObj.vowels++;
    } else if (letter.match(/[bcdfghjklmnpqrstvwxyz]/g)) {
      charsObj.consonants++;
    }
  });
  console.log(charsObj);
  return charsObj;
}

//This didn't really work out the way I wanted, below is the better solution.
//
function countVowelsConsonants(words) {
  let f = typeof words === "string";
  return {
    vowels: f ? words.replace(/[^aeiou]/gi, "").length : 0,
    consonants: f ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, "").length : 0,
  };
}
