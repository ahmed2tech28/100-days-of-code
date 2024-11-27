function maxProduct(nums) {
  if (nums.length === 0) return 0;

  // Initialize variables
  let maxProduct = nums[0]; // Maximum product so far
  let minProduct = nums[0]; // Minimum product so far (to handle negative numbers)
  let result = nums[0]; // Final result

  // Iterate through the array
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
      // Swap max and min when the current number is negative
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    // Update max and min products
    maxProduct = Math.max(num, maxProduct * num);
    minProduct = Math.min(num, minProduct * num);

    // Update the result with the maximum product found so far
    result = Math.max(result, maxProduct);
  }

  return result;
}

// Example usage
const nums = [2, 3, -2, 4];
console.log(maxProduct(nums)); // Output: 6
