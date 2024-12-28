function zigzagLevelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    let leftToRight = true; // Determines the order of traversal
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            // Insert into current level based on the traversal direction
            if (leftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }
            
            // Add child nodes to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        // Add the current level to the result and toggle the direction
        result.push(currentLevel);
        leftToRight = !leftToRight;
    }
    
    return result;
}

// Define a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Create a binary tree: [3, 9, 20, null, null, 15, 7]
const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(zigzagLevelOrder(root));
// Output: [[3], [20, 9], [15, 7]]
