function slidingWindowMaximum(nums, k) {
  if (!nums || k <= 0) return [];

  const result = [];
  const deque = []; // Store indices, not values

  for (let i = 0; i < nums.length; i++) {
    // Remove indices that are out of the current window
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices of smaller elements as they are useless
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add the current index
    deque.push(i);

    // The first element in the deque is the largest for the window
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Example usage
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindowMaximum(nums, k)); // Output: [3, 3, 5, 5, 6, 7]
