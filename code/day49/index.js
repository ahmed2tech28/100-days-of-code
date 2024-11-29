function hasSubsetWithSum(arr, target) {
  const n = arr.length;

  // Create a 2D array to store results of subproblems
  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(target + 1).fill(false));

  // If the target is 0, there's always a subset (empty subset)
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (arr[i - 1] > j) {
        dp[i][j] = dp[i - 1][j]; // Exclude current element
      } else {
        // Include or exclude the current element
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
      }
    }
  }

  // The answer is stored in dp[n][target]
  return dp[n][target];
}

// Example Usage
const arr = [3, 34, 4, 12, 5, 2];
const target = 9;
console.log(hasSubsetWithSum(arr, target)); // Output: true
