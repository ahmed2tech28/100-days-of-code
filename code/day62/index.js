function longestPalindromicSubstring(s) {
  if (s.length === 0) return "";

  let start = 0,
    maxLength = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // Length of the palindrome
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i); // Odd-length palindromes
    let len2 = expandAroundCenter(i, i + 1); // Even-length palindromes
    let len = Math.max(len1, len2);

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}

// Example usage:
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"
