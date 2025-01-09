function rob(houses) {
  if (!houses || houses.length === 0) return 0; // No houses to rob
  if (houses.length === 1) return houses[0]; // Only one house to rob

  let prev1 = 0; // Max money robbed up to the house before the last
  let prev2 = 0; // Max money robbed up to the last house

  for (let money of houses) {
    let temp = Math.max(prev1 + money, prev2); // Max of robbing current house or skipping it
    prev1 = prev2; // Update for next iteration
    prev2 = temp;
  }

  return prev2; // Maximum money robbed
}

// Example usage:
const houses = [2, 7, 9, 3, 1];
console.log(rob(houses)); // Output: 12
