function findAllPalindromicSubstrings(s) {
  const result = [];

  // Helper function to expand around the center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result.push(s.substring(left, right + 1));
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (single character center)
    expandAroundCenter(i, i);

    // Check for even-length palindromes (two-character center)
    expandAroundCenter(i, i + 1);
  }

  return result;
}

// Example usage:
const input = "abba";
const palindromicSubstrings = findAllPalindromicSubstrings(input);
console.log(palindromicSubstrings);
