function reverseWords(line) {
  const words = line.trim().split(" ");
  const revWords = words.map((word) => word.split("").reverse().join(""));
  return revWords.join(" ");
}

const line = "Hellow World, I am Muhammad Ahmed Ali";
const lineWithRev = reverseWords(line);
console.log(lineWithRev);
