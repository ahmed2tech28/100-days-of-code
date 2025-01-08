function maxCoins(nums) {
    // Add 1 to the beginning and end of the array to simplify edge cases
    const balloons = [1, ...nums.filter(n => n > 0), 1]; 
    const n = balloons.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Solve subproblems from smaller lengths to larger lengths
    for (let len = 2; len < n; len++) {
        for (let left = 0; left < n - len; left++) {
            const right = left + len;
            for (let i = left + 1; i < right; i++) {
                // Calculate the coins for bursting balloon i last in the range (left, right)
                const coins = balloons[left] * balloons[i] * balloons[right];
                dp[left][right] = Math.max(
                    dp[left][right],
                    dp[left][i] + coins + dp[i][right]
                );
            }
        }
    }

    // The result is stored in dp[0][n-1], the entire range of balloons
    return dp[0][n - 1];
}

// Example usage
const nums = [3, 1, 5, 8];
console.log(maxCoins(nums)); // Output: 167