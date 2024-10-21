function moveZeros(arr) {
  const nonZeroElements = arr.filter((item) => item !== 0);
  const zeroCount = arr.length - nonZeroElements.length;
  const zeros = Array(zeroCount).fill(0);
  return [...nonZeroElements, ...zeros];
}

const arr = [0, 1, 2, 3, 0, 4, 0, 5];
const result = moveZeros(arr);
console.log(result);
