function maxSubArray(nums) {
  if (!nums.length) return 0; // Handle edge case for empty array

  let maxSum = nums[0]; // Initialize the maximum sum with the first element
  let currentSum = nums[0]; // Initialize the current sum with the first element

  for (let i = 1; i < nums.length; i++) {
    // Add current number to the current sum or start a new subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (subarray: [4, -1, 2, 1])
