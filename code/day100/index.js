class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findDuplicateSubtrees(root) {
  const map = new Map(); // To store subtree serializations and their counts
  const duplicates = []; // To store the root nodes of duplicate subtrees

  function serialize(node) {
    if (!node) return "#"; // Null nodes are represented as "#"

    // Serialize the subtree rooted at this node
    const subtree = `${node.val},${serialize(node.left)},${serialize(
      node.right
    )}`;

    // Update the map with the count of this serialization
    const count = map.get(subtree) || 0;
    if (count === 1) {
      // If the count is 1, this is the second time we encounter this serialization
      duplicates.push(node); // Add the root of this duplicate subtree to the result
    }
    map.set(subtree, count + 1);

    return subtree;
  }

  serialize(root);
  return duplicates;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(2, new TreeNode(4));
root.right.right = new TreeNode(4);

const duplicates = findDuplicateSubtrees(root);
console.log(duplicates.map((node) => node.val)); // Outputs the root values of duplicate subtrees
