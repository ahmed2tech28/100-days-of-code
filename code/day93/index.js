function longestValidParentheses(s) {
    let maxLength = 0;
    const stack = [-1]; // Initialize stack with -1 to handle edge cases.
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        // Push the index of '(' onto the stack.
        stack.push(i);
      } else {
        // Pop the top index as it matches with ')'.
        stack.pop();
        
        if (stack.length === 0) {
          // If stack is empty, push the current index.
          stack.push(i);
        } else {
          // Calculate the length of the valid substring.
          maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
        }
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  console.log(longestValidParentheses("(()")); // Output: 2
  console.log(longestValidParentheses(")()())")); // Output: 4
  console.log(longestValidParentheses("")); // Output: 0
  