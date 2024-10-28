function compressString(str) {
  if (str.length === 0) return "";

  let compressed = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }

  // Add the last character and count
  compressed += str[str.length - 1] + count;

  return compressed;
}

// Example usage:
console.log(compressString("aaabbccc")); // Output: "a3b2c3"
