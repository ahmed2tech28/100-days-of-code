function numDecodings(s) {
  if (!s || s[0] === "0") return 0; // No valid decodings if the string starts with '0'

  const n = s.length;
  const dp = new Array(n + 1).fill(0); // dp[i] = number of ways to decode the first i characters
  dp[0] = 1; // Base case: an empty string has one way to decode

  for (let i = 1; i <= n; i++) {
    // Single digit decoding
    const singleDigit = parseInt(s[i - 1]);
    if (singleDigit >= 1 && singleDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    // Two-digit decoding
    if (i > 1) {
      const twoDigit = parseInt(s.substring(i - 2, i));
      if (twoDigit >= 10 && twoDigit <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }

  return dp[n];
}

console.log(numDecodings("12")); // Output: 2 (AB, L)
console.log(numDecodings("226")); // Output: 3 (BZ, VF, BBF)
console.log(numDecodings("06")); // Output: 0 (No valid decoding)
console.log(numDecodings("11106")); // Output: 2 (AAJF, KJF)
