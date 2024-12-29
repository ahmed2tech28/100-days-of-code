function zigzagLevelOrder(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            // Add the current node's value based on the traversal direction
            if (leftToRight) {
                levelNodes.push(currentNode.val);
            } else {
                levelNodes.unshift(currentNode.val);
            }

            // Add child nodes to the queue
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        // Add this level's nodes to the result
        result.push(levelNodes);
        // Toggle direction for the next level
        leftToRight = !leftToRight;
    }

    return result;
}
