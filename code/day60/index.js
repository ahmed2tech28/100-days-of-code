function findMissingRanges(nums, lower, upper) {
    const result = [];
    
    // Helper function to format ranges
    function formatRange(start, end) {
      return start === end ? `${start}` : `${start}->${end}`;
    }
  
    // Add a virtual lower bound to nums
    nums = [lower - 1, ...nums, upper + 1];
  
    for (let i = 1; i < nums.length; i++) {
      const start = nums[i - 1] + 1;
      const end = nums[i] - 1;
      
      if (start <= end) {
        result.push(formatRange(start, end));
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [3, 5, 8, 10];
  const lower = 1;
  const upper = 12;
  console.log(findMissingRanges(nums, lower, upper)); 
  // Output: [ '1->2', '4', '6->7', '9', '11->12' ]
  