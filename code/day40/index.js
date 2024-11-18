function addBinaryStrings(binary1, binary2) {
  let i = binary1.length - 1;
  let j = binary2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const bit1 = i >= 0 ? parseInt(binary1[i], 10) : 0;
    const bit2 = j >= 0 ? parseInt(binary2[j], 10) : 0;

    const sum = bit1 + bit2 + carry;
    result = (sum % 2) + result; // Append the least significant bit to the result
    carry = Math.floor(sum / 2); // Determine the carry for the next iteration

    i--;
    j--;
  }

  return result;
}

// Example usage:
const binary1 = "1011";
const binary2 = "1101";
console.log(addBinaryStrings(binary1, binary2)); // Output: "11000"
