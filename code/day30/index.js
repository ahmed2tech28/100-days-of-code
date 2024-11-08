// Write a function that removes duplicates from a sorted array in-place, returning the new length of the array.

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let uniqueIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }

  return uniqueIndex + 1;
}

let arr = [1, 2, 3, 4, 5, 6, 6, 7];
let newLength = removeDuplicates(arr);
console.log("New length:", newLength);
console.log("Array after duplicates removed:", arr.slice(0, newLength));
