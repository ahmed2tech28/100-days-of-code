function partitionPalindrome(s) {
  const result = [];

  // Helper function to check if a string is a palindrome
  const isPalindrome = (str, start, end) => {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  // Backtracking function
  const backtrack = (start, currentPartition) => {
    if (start === s.length) {
      result.push([...currentPartition]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        currentPartition.push(s.slice(start, end + 1));
        backtrack(end + 1, currentPartition);
        currentPartition.pop(); // Backtrack
      }
    }
  };

  backtrack(0, []);
  return result;
}

// Example usage
const s = "aab";
console.log(partitionPalindrome(s));
