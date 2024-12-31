class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to serialize a binary tree to a string
function serialize(root) {
  const result = [];

  function dfs(node) {
    if (!node) {
      result.push("null"); // Use 'null' to denote null nodes
      return;
    }
    result.push(node.value);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result.join(","); // Join the array into a comma-separated string
}

// Function to deserialize a string back to a binary tree
function deserialize(data) {
  if (!data) return null;

  const values = data.split(","); // Convert the string back to an array
  let index = 0;

  function buildTree() {
    if (values[index] === "null") {
      index++;
      return null;
    }
    const node = new TreeNode(parseInt(values[index]));
    index++;
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }

  return buildTree();
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serialized = serialize(root);
console.log("Serialized Tree:", serialized);

const deserialized = deserialize(serialized);
console.log("Deserialized Tree Root:", deserialized);
