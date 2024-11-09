// Write a function that reverses the digits of an integer

function reverseInteger(n) {
  const sign = n < 0 ? -1 : 1;
  const reversedNum = parseInt(
    Math.abs(n).toString().split("").reverse().join("")
  );
  return sign * reversedNum;
}

console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-456)); // Output: -654
console.log(reverseInteger(1200)); // Output: 21
