function generatePowerSet(arr) {
  const result = [];

  // Helper function to generate subsets recursively
  function generateSubset(index, currentSubset) {
    // Base case: if index reaches the length of the array, add the subset to the result
    if (index === arr.length) {
      result.push([...currentSubset]);
      return;
    }

    // Include the current element in the subset
    currentSubset.push(arr[index]);
    generateSubset(index + 1, currentSubset);

    // Exclude the current element from the subset (backtracking)
    currentSubset.pop();
    generateSubset(index + 1, currentSubset);
  }

  generateSubset(0, []);
  return result;
}

// Example Usage
const arr = [1, 2, 3];
console.log(generatePowerSet(arr));
