function maxScore(cards) {
  const memo = new Map(); // To store intermediate results for memoization

  function helper(left, right) {
    // Base case: If no cards are left
    if (left > right) return 0;

    // Create a unique key for the current state
    const key = `${left}-${right}`;
    if (memo.has(key)) return memo.get(key);

    // Choose the left card or the right card
    const pickLeft =
      cards[left] +
      Math.min(helper(left + 2, right), helper(left + 1, right - 1));
    const pickRight =
      cards[right] +
      Math.min(helper(left + 1, right - 1), helper(left, right - 2));

    // Store the result in the memo and return the maximum score
    const result = Math.max(pickLeft, pickRight);
    memo.set(key, result);
    return result;
  }

  return helper(0, cards.length - 1);
}

// Example usage
const cards = [1, 5, 3, 7, 3, 2];
console.log(maxScore(cards)); // Output: Maximum score achievable
