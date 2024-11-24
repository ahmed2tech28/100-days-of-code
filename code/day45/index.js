function getSubsequences(str) {
    let subsequences = [];

    function generateSubsequences(index, currentSubsequence) {
        // Base case: if we've processed all characters
        if (index === str.length) {
            // Add the current subsequence to the result
            subsequences.push(currentSubsequence);
            return;
        }

        // Include the current character
        generateSubsequences(index + 1, currentSubsequence + str[index]);

        // Exclude the current character
        generateSubsequences(index + 1, currentSubsequence);
    }

    // Start the recursion from the first character and an empty subsequence
    generateSubsequences(0, "");
    return subsequences;
}

// Example usage:
const str = "abc";
const result = getSubsequences(str);
console.log(result);
