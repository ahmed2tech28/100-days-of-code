function findFirstNotRepeatingChar(str) {
  let letters = str.trim().split("");
  let charCount = {};

  for (let char of letters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of letters) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

let non = findFirstNotRepeatingChar("Hellow World");
console.log(non);
