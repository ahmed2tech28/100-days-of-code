class TreeNode {
    constructor(value = 0, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxPathSum(root) {
    let maxSum = -Infinity;
  
    function findMaxPathSum(node) {
      if (!node) return 0;
  
      // Recursively find the max path sum for left and right subtrees
      const leftMax = Math.max(findMaxPathSum(node.left), 0);
      const rightMax = Math.max(findMaxPathSum(node.right), 0);
  
      // Calculate the local maximum path sum through the current node
      const localMax = node.value + leftMax + rightMax;
  
      // Update the global maxSum
      maxSum = Math.max(maxSum, localMax);
  
      // Return the maximum path sum going through the current node
      return node.value + Math.max(leftMax, rightMax);
    }
  
    findMaxPathSum(root);
    return maxSum;
  }
  
  // Example Usage
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(20);
  root.left.right = new TreeNode(1);
  root.right.right = new TreeNode(-25);
  root.right.right.left = new TreeNode(3);
  root.right.right.right = new TreeNode(4);
  
  console.log(maxPathSum(root)); // Output: 42
  