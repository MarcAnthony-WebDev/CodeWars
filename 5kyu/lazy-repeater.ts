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

export function makeLooper(str: string): () => string {

  let index:number = 0;

  return ():string => {
    const char:string = str[index];
    index = (index + 1) % str.length; //will go back to zero when the numbers are the same, thus creating the loop
    return char;
  }

}

const looper = makeLooper('abcdefg')
console.log(looper())
