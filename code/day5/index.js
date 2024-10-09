function findPairs(arr, target) {
  const seen = new Set(); // To track numbers we've already visited
  const uniquePairs = new Set(); // To store unique pairs as strings to avoid duplicates

  for (let num of arr) {
    const complement = target - num;

    // If the complement is already seen, we've found a valid pair
    if (seen.has(complement)) {
      // Create a sorted pair to ensure uniqueness (e.g., [2, 3] is the same as [3, 2])
      const sortedPair = [num, complement].sort((a, b) => a - b);
      uniquePairs.add(sortedPair.toString()); // Add the pair as a string to avoid duplicates
    }

    // Mark this number as seen
    seen.add(num);
  }

  // Convert the unique pairs back from strings to arrays
  return Array.from(uniquePairs).map((pair) => pair.split(",").map(Number));
}

// Test the function
console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); // Output: [ [ 3, 7 ], [ 2, 8 ] ]
