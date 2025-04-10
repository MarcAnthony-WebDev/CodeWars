export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((word) => {
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

console.log(pigIt("hello"));
