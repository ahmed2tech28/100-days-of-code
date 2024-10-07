function flattenArray(arr) {
  return arr.flat(Infinity);
}

function flattenArray2(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

function flattenArray3(arr) {
  return arr
    .map((item) => (Array.isArray(item) ? flattenArray3(item) : item))
    .flat();
}

// Test the function
const nestedArray = [1, [2, [3, [4]]], 5];
// const flattened = flattenArray(nestedArray);
// console.log(flattened);

// const flattened = flattenArray2(nestedArray);
// console.log(flattened);

const flattened = flattenArray3(nestedArray);
console.log(flattened);
