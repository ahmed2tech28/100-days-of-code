function maxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount += 1;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Test cases
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
console.log(maxConsecutiveOnes([1, 1, 1, 1, 1, 1])); // Output: 6
console.log(maxConsecutiveOnes([0, 0, 0, 0, 0])); // Output: 0
console.log(maxConsecutiveOnes([1, 0, 1, 0, 1, 1])); // Output: 2
