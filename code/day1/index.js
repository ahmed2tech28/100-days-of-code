let arr = [1, 2, 3, 4, 5, 2, 4, 5, 5, 2, 4, 5, 1, 2, 3, 4];

// Solution 1
arr = [...new Set(arr)];
console.log(arr);

// Solution 2
arr = arr
  .map((item, i, arr) => {
    return arr.indexOf(item) === i ? item : null;
  })
  .filter((item) => item != null);
console.log(arr);
