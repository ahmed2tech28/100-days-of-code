function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(9))