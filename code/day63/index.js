function minEditDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store distances
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Initialize base cases
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // Cost of deleting all characters from str1
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // Cost of inserting all characters into str1
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // Characters match, no cost
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Consider all operations: insert, delete, replace
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Deletion
          dp[i][j - 1] + 1, // Insertion
          dp[i - 1][j - 1] + 1 // Replacement
        );
      }
    }
  }

  // Return the result in the bottom-right corner
  return dp[m][n];
}

// Example usage
const str1 = "kitten";
const str2 = "sitting";
console.log(
  `Minimum edit distance between "${str1}" and "${str2}":`,
  minEditDistance(str1, str2)
);
