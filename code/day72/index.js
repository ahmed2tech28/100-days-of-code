function findMajorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Step 1: Find a candidate
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Step 2: Verify the candidate
  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return count > Math.floor(nums.length / 2) ? candidate : null;
}
