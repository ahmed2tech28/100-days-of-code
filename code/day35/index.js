function findCommonElements(arr1, arr2) {
  // Convert the first array to a set for faster lookup
  const set1 = new Set(arr1);
  // Use filter to find elements in arr2 that are also in set1
  const commonElements = arr2.filter((element) => set1.has(element));
  return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
