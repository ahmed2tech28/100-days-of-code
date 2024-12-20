function multiplyStrings(num1, num2) {
  // Handle edge cases where either number is 0
  if (num1 === "0" || num2 === "0") return "0";

  // Initialize an array to store the result of multiplication
  const result = Array(num1.length + num2.length).fill(0);

  // Reverse both numbers to facilitate calculations from the least significant digit
  const num1Reversed = num1.split("").reverse();
  const num2Reversed = num2.split("").reverse();

  // Perform multiplication digit by digit
  for (let i = 0; i < num1Reversed.length; i++) {
    for (let j = 0; j < num2Reversed.length; j++) {
      const product = num1Reversed[i] * num2Reversed[j];
      const sum = result[i + j] + product;

      result[i + j] = sum % 10; // Set the current digit
      result[i + j + 1] += Math.floor(sum / 10); // Add the carry to the next position
    }
  }

  // Remove leading zeros (if any) and reverse the array to get the final number
  while (result[result.length - 1] === 0) {
    result.pop();
  }

  return result.reverse().join("");
}

// Example Usage
console.log(multiplyStrings("123456789", "987654321")); // "121932631112635269"
console.log(multiplyStrings("123", "456")); // "56088"
console.log(multiplyStrings("0", "987654321")); // "0"
