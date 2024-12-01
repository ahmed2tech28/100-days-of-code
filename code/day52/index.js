function fewestCoins(coins, amount) {
  // Initialize an array to store the minimum coins required for each amount
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 coins needed for amount 0

  // Iterate over each coin and update the dp array
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  // If dp[amount] is still Infinity, it means the amount cannot be formed
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage
const coins = [1, 2, 5]; // Coin denominations
const amount = 11; // Target amount
console.log(fewestCoins(coins, amount)); // Output: 3 (5 + 5 + 1)
