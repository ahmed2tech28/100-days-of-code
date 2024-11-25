function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  // dp[i] represents the length of LIS ending at index i
  const dp = new Array(nums.length).fill(1);

  // For each position, look back at previous elements
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // Return the maximum value in dp array
  return Math.max(...dp);
}

// Example usage:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // Output: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7])); // Output: 1
