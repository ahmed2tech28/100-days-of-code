function isValidParentheses(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // Push opening parentheses to the stack
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // Check if the stack has a matching opening parenthesis for the current closing one
      if (stack.pop() !== pairs[char]) {
        return false; // Not valid if it doesn't match
      }
    }
  }

  // If stack is empty, all parentheses were matched correctly
  return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
