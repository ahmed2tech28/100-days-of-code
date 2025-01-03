function countDistinctSubsequences(s) {
  const MOD = 1e9 + 7; // To avoid overflow
  const n = s.length;

  // dp[i] will store the number of distinct subsequences of s[0...i-1]
  let dp = new Array(n + 1).fill(0);

  // Set dp[0] to 1 because there's one subsequence of an empty string: the empty subsequence.
  dp[0] = 1;

  // This will store the last index of each character to handle duplicates
  let lastIndex = new Map();

  for (let i = 1; i <= n; i++) {
    // The number of subsequences of the string s[0...i-1] is double the subsequences of s[0...i-2]
    dp[i] = (2 * dp[i - 1]) % MOD;

    // If the character s[i-1] has appeared before, subtract the number of subsequences
    // before the last occurrence of s[i-1] to avoid counting duplicates.
    if (lastIndex.has(s[i - 1])) {
      dp[i] -= dp[lastIndex.get(s[i - 1]) - 1];
      dp[i] = (dp[i] + MOD) % MOD; // Handle negative values by adding MOD
    }

    // Update the last occurrence of s[i-1]
    lastIndex.set(s[i - 1], i);
  }

  // dp[n] will give the number of distinct subsequences of the string s
  return dp[n] - 1; // Subtract 1 to exclude the empty subsequence
}

// Example usage:
const str = "abc";
console.log(countDistinctSubsequences(str)); // Output: 7
