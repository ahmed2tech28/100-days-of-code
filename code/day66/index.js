function generatePermutations(array) {
  const results = [];

  function permute(arr, temp = []) {
    if (arr.length === 0) {
      results.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      permute(remaining, temp.concat(current));
    }
  }

  permute(array);
  return results;
}

// Example usage:
const array = [1, 2, 3];
const permutations = generatePermutations(array);
console.log(permutations);
