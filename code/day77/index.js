function findSubstring(s, words) {
  if (words.length === 0 || s.length === 0 || words[0].length === 0) {
    return [];
  }

  const wordLength = words[0].length;
  const totalWordsLength = words.length * wordLength;
  const wordCount = {};

  // Create a frequency map for words in the array
  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  const result = [];

  // Iterate over the string, considering each position as a potential starting point
  for (let i = 0; i <= s.length - totalWordsLength; i++) {
    const seenWords = {};
    let j = 0;

    // Check the substring starting at index i
    while (j < words.length) {
      const wordStart = i + j * wordLength;
      const word = s.slice(wordStart, wordStart + wordLength);

      // If the word is not part of the given words, break out of the loop
      if (!wordCount[word]) {
        break;
      }

      seenWords[word] = (seenWords[word] || 0) + 1;

      // If a word is seen more times than it should, break out of the loop
      if (seenWords[word] > wordCount[word]) {
        break;
      }

      j++;
    }

    // If we successfully found all words, add the start index to the result
    if (j === words.length) {
      result.push(i);
    }
  }

  return result;
}

// Example usage:
const s = "barfoothefoobarman";
const words = ["foo", "bar"];
console.log(findSubstring(s, words)); // Output: [0, 9]
