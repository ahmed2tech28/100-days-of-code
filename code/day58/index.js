function trapRainWater(heights) {
  if (heights.length < 3) {
    return 0; // At least 3 heights are required to trap water.
  }

  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        trappedWater += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        trappedWater += rightMax - heights[right];
      }
      right--;
    }
  }

  return trappedWater;
}
