function smallestSubstringContainingAllChars(str, pattern) {
  if (str.length === 0 || pattern.length === 0) {
    return "";
  }

  // Map to store the frequency of characters in the pattern
  const charCount = new Map();
  for (const char of pattern) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let startIndex = 0;
  let charsToMatch = charCount.size;

  while (right < str.length) {
    const rightChar = str[right];
    if (charCount.has(rightChar)) {
      charCount.set(rightChar, charCount.get(rightChar) - 1);
      if (charCount.get(rightChar) === 0) {
        charsToMatch--;
      }
    }

    // When all characters are matched, try to shrink the window
    while (charsToMatch === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        startIndex = left;
      }

      const leftChar = str[left];
      if (charCount.has(leftChar)) {
        charCount.set(leftChar, charCount.get(leftChar) + 1);
        if (charCount.get(leftChar) > 0) {
          charsToMatch++;
        }
      }
      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : str.substring(startIndex, startIndex + minLength);
}

// Example usage
const str = "ADOBECODEBANC";
const pattern = "ABC";
console.log(smallestSubstringContainingAllChars(str, pattern)); // Output: "BANC"
