function findTwoSum(nums, target) {
  // Define two pointers
  let left = 0;
  let right = nums.length - 1;

  // Loop until the pointers cross
  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return [nums[left], nums[right]]; // Return the indices if the sum matches the target
    } else if (currentSum < target) {
      left++; // Move the left pointer to the right
    } else {
      right--; // Move the right pointer to the left
    }
  }

  return null; // Return null if no such pair is found
}

const nums = [1, 2, 3, 4, 6];
const target = 8;
console.log(findTwoSum(nums, target)); // Output: [2, 6] (2 + 6 = 8)
