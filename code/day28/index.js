function addLargeNumbers(arr1, arr2) {
  const result = [];
  let carry = 0;

  // Make both arrays the same length by padding with zeros
  while (arr1.length < arr2.length) arr1.unshift(0);
  while (arr2.length < arr1.length) arr2.unshift(0);

  // Traverse both arrays from the end (least significant digit) to the beginning
  for (let i = arr1.length - 1; i >= 0; i--) {
    const sum = arr1[i] + arr2[i] + carry;
    result.unshift(sum % 10); // Add the last digit of sum to the result
    carry = Math.floor(sum / 10); // Update carry for the next iteration
  }

  // If there's a remaining carry, add it to the front of the result
  if (carry > 0) result.unshift(carry);

  return result;
}

// // Example usage:
// const num1 = [9, 9, 9, 9];
// const num2 = [1];
// console.log(addLargeNumbers(num1, num2)); // Output: [1, 0, 0, 0, 0]

function addLargeNumbers2(arr1, arr2) {
  let str1 = arr1.join("");
  let str2 = arr2.join("");
  let addtion = parseInt(str1) + parseInt(str2);
  return addtion
    .toString()
    .split("")
    .map((item) => parseInt(item));
}

// // Example usage:
const num1 = [9, 9, 9, 9];
const num2 = [1];
console.log(addLargeNumbers(num1, num2)); // Output: [1, 0, 0, 0, 0]
