function maximalSquare(matrix) {
  // Check if the matrix is empty
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Initialize a DP table to store the largest square side length at each point
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  let maxSideLength = 0;

  // Iterate over the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "1") {
        // If the cell contains '1'
        if (i === 0 || j === 0) {
          // On the top row or leftmost column, the largest square is 1 if the cell is '1'
          dp[i][j] = 1;
        } else {
          // DP recurrence: min of left, top, and top-left + 1
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        // Update the maximum square size found
        maxSideLength = Math.max(maxSideLength, dp[i][j]);
      }
    }
  }

  // The area of the largest square is side length squared
  return maxSideLength * maxSideLength;
}

// Example usage:
const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalSquare(matrix)); // Output: 4
