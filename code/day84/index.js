function exist(board, word) {
  if (!board || board.length === 0 || board[0].length === 0) return false;

  const rows = board.length;
  const cols = board[0].length;

  // Helper function for DFS
  function dfs(row, col, index) {
    // If all characters in the word are matched
    if (index === word.length) return true;

    // Check boundaries and character match
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // Temporarily mark the cell as visited
    const temp = board[row][col];
    board[row][col] = "#";

    // Explore all possible directions: up, down, left, right
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    // Restore the cell value
    board[row][col] = temp;

    return found;
  }

  // Start DFS from every cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE")); // true
console.log(exist(board, "ABCB")); // false
