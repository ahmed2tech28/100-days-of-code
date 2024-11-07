function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Slide the window by removing characters from the left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    // Add the current character to the set and update max length
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 ("abc")
