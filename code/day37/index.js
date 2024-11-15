function getPermutations(str) {
  if (str.length === 0) return [""]; // Base case: an empty string has one permutation (itself)

  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];

    // Remaining string without the current character
    const remaining = str.slice(0, i) + str.slice(i + 1);

    // Get permutations of the remaining string
    const remainingPermutations = getPermutations(remaining);

    // Add the current character to each permutation of the remaining string
    for (const perm of remainingPermutations) {
      permutations.push(char + perm);
    }
  }

  return permutations;
}

// Example usage:
const result = getPermutations("abc");
console.log(result);
