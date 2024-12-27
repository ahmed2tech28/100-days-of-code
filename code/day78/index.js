function countInversions(arr) {
  let tempArr = new Array(arr.length);
  return mergeSortAndCount(arr, tempArr, 0, arr.length - 1);
}

function mergeSortAndCount(arr, tempArr, left, right) {
  let invCount = 0;
  if (left < right) {
    let mid = Math.floor((left + right) / 2);

    invCount += mergeSortAndCount(arr, tempArr, left, mid);
    invCount += mergeSortAndCount(arr, tempArr, mid + 1, right);

    invCount += mergeAndCount(arr, tempArr, left, mid, right);
  }
  return invCount;
}

function mergeAndCount(arr, tempArr, left, mid, right) {
  let i = left; // Starting index for left subarray
  let j = mid + 1; // Starting index for right subarray
  let k = left; // Starting index to be sorted
  let invCount = 0;

  // Merge the two subarrays
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      tempArr[k++] = arr[i++];
    } else {
      tempArr[k++] = arr[j++];
      invCount += mid - i + 1; // All remaining elements in the left subarray are greater than arr[j]
    }
  }

  // Copy the remaining elements of left subarray, if any
  while (i <= mid) {
    tempArr[k++] = arr[i++];
  }

  // Copy the remaining elements of right subarray, if any
  while (j <= right) {
    tempArr[k++] = arr[j++];
  }

  // Copy the sorted subarray into the original array
  for (let i = left; i <= right; i++) {
    arr[i] = tempArr[i];
  }

  return invCount;
}

// Example usage:
let arr = [2, 4, 1, 3, 5];
console.log("Number of inversions:", countInversions(arr)); // Output: 3
