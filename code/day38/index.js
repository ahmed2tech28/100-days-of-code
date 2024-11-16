function sortArray(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[low] and nums[mid]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // Move the mid pointer
      mid++;
    } else {
      // Swap nums[mid] and nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

// Example usage
const array = [2, 0, 2, 1, 1, 0];
console.log(sortArray(array)); // Output: [0, 0, 1, 1, 2, 2]
