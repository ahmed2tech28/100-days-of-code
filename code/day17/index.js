function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeNumbers(n) {
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
      count++;
    }
  }
}

primeNumbers(100);
