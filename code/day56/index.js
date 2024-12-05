function shortestPath(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Directions for moving up, down, left, right
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];

  // Check if the starting or ending point is blocked
  if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
    return -1; // No path exists
  }

  const queue = [[0, 0, 1]]; // [row, col, distance]
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [currentRow, currentCol, distance] = queue.shift();

    // If we reach the bottom-right corner, return the distance
    if (currentRow === rows - 1 && currentCol === cols - 1) {
      return distance;
    }

    for (const [dx, dy] of directions) {
      const newRow = currentRow + dx;
      const newCol = currentCol + dy;

      // Check boundaries and if the cell is unvisited and not blocked
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0 &&
        !visited[newRow][newCol]
      ) {
        queue.push([newRow, newCol, distance + 1]);
        visited[newRow][newCol] = true;
      }
    }
  }

  return -1; // No path found
}

const grid = [
  [0, 0, 1],
  [0, 0, 0],
  [1, 0, 0],
];

const result = shortestPath(grid);
console.log(result);
