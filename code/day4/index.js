function isPalindromeNumber(num) {
  /* Normal Solution */
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

function isPalindromeNumber2(num) {
  /* Required Solution without converting to string */
  if (num < 0) return false;
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

console.log(isPalindromeNumber2(121));
console.log(isPalindromeNumber2(123));
