class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findLowestCommonAncestor(root, p, q) {
  // Base case: if the root is null or matches one of the nodes (p or q), return the root
  if (!root || root === p || root === q) {
    return root;
  }

  // Recursively search in the left and right subtrees
  const left = findLowestCommonAncestor(root.left, p, q);
  const right = findLowestCommonAncestor(root.right, p, q);

  // If both left and right return non-null, this is the LCA
  if (left && right) {
    return root;
  }

  // Otherwise, return the non-null value (either left or right)
  return left || right;
}

// Example usage
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const p = root.left; // Node 5
const q = root.left.right.right; // Node 4

console.log(findLowestCommonAncestor(root, p, q).value); // Output: 5
