function canSegmentString(s, wordDict) {
  // Create a set for quick lookup of words
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Example usage
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(canSegmentString(s, wordDict)); // Output: true
