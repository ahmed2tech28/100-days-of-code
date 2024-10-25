function findPeakElement(nums) {
  const n = nums.length;

  function binarySearch(left, right) {
    if (left === right) {
      return left;
    }

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return binarySearch(left, mid);
    } else {
      return binarySearch(mid + 1, right);
    }
  }

  return binarySearch(0, n - 1);
}

const arr = [1, 3, 20, 4, 1, 0];
console.log(findPeakElement(arr));
