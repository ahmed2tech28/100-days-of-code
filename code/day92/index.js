function decodeString(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === "]") {
        // Extract the current string inside the brackets
        let currentStr = "";
        while (stack.length && stack[stack.length - 1] !== "[") {
          currentStr = stack.pop() + currentStr;
        }
  
        // Remove the opening bracket '['
        stack.pop();
  
        // Extract the number before the '['
        let num = "";
        while (stack.length && !isNaN(stack[stack.length - 1])) {
          num = stack.pop() + num;
        }
  
        // Repeat the currentStr num times and push it back onto the stack
        stack.push(currentStr.repeat(Number(num)));
      } else {
        // Push the character (or number) onto the stack
        stack.push(char);
      }
    }
  
    // Join and return the decoded string
    return stack.join("");
  }
  