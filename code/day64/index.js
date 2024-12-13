function countIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function for depth-first search (DFS)
  function dfs(r, c) {
    // Check for bounds and if the cell is water (0) or already visited (2)
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) {
      return;
    }

    // Mark the current cell as visited
    grid[r][c] = 2;

    // Explore all 4 directions
    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        // Found an unvisited island
        islandCount++;
        dfs(r, c); // Mark all connected land as visited
      }
    }
  }

  return islandCount;
}

// Example usage:
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

console.log(countIslands(grid)); // Output: 3
