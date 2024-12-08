function largestRectangleArea(heights) {
  let stack = []; // Stack to store indices of the histogram bars
  let maxArea = 0; // Variable to store the maximum rectangle area
  heights.push(0); // Add a sentinel value to process all bars

  for (let i = 0; i < heights.length; i++) {
    // While the current bar is shorter than the bar at the stack's top
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      // Pop the top of the stack and calculate the area
      let height = heights[stack.pop()];
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    // Push the current index onto the stack
    stack.push(i);
  }

  return maxArea;
}

// Example usage
const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); // Output: 10
