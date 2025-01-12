function divide(dividend, divisor) {
  // Handle edge cases
  if (divisor === 0) throw new Error("Division by zero is undefined");
  if (dividend === 0) return 0;

  // Determine the sign of the result
  const isNegative = dividend < 0 !== divisor < 0;

  // Work with positive values
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);

  let quotient = 0;

  // Use bitwise shifting to perform division
  while (absDividend >= absDivisor) {
    let tempDivisor = absDivisor;
    let multiple = 1;

    // Double the divisor until it exceeds the dividend
    while (absDividend >= tempDivisor << 1) {
      tempDivisor <<= 1; // Multiply by 2
      multiple <<= 1; // Multiply by 2
    }

    absDividend -= tempDivisor;
    quotient += multiple;
  }

  // Apply the sign to the quotient
  return isNegative ? -quotient : quotient;
}

console.log(divide(10, 3)); // Output: 3
console.log(divide(7, -3)); // Output: -2
console.log(divide(0, 5)); // Output: 0
console.log(divide(-10, -2)); // Output: 5
console.log(divide(1, 1)); // Output: 1
