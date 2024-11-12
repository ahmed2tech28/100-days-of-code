function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
console.log(maxProfit([1, 2, 3, 4, 5])); // Output: 4
console.log(maxProfit([2, 4, 1])); // Output: 2
