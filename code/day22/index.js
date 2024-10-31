function generateParentheses(n) {
    const result = [];
    
    function backtrack(current, open, close) {
      // If the current string has reached the maximum length (2 * n), add to result
      if (current.length === n * 2) {
        result.push(current);
        return;
      }
  
      // If we can add an open parenthesis, add it
      if (open < n) {
        backtrack(current + '(', open + 1, close);
      }
  
      // If we can add a close parenthesis, add it
      if (close < open) {
        backtrack(current + ')', open, close + 1);
      }
    }
  
    // Start the backtracking with an empty string, 0 open and close parentheses
    backtrack('', 0, 0);
  
    return result;
  }
  
  // Example usage
  console.log(generateParentheses(3));
  