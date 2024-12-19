function sortColors(nums) {
  let low = 0; // Pointer for 0
  let mid = 0; // Pointer for 1
  let high = nums.length - 1; // Pointer for 2

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[low] and nums[mid]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // Move the mid pointer forward
      mid++;
    } else if (nums[mid] === 2) {
      // Swap nums[mid] and nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}

// Example Usage
const colors = [2, 0, 1, 2, 1, 0];
console.log(sortColors(colors)); // Output: [0, 0, 1, 1, 2, 2]
