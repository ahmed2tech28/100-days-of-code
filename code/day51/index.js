function isValidSudoku(board) {
  // Helper function to check if a number is valid in a specific set
  function isValidInSet(set, num) {
    if (set.has(num)) return false;
    set.add(num);
    return true;
  }

  // Check rows, columns, and 3x3 sub-boxes
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    let boxSet = new Set();

    for (let j = 0; j < 9; j++) {
      // Check rows
      if (board[i][j] !== "." && !isValidInSet(rowSet, board[i][j])) {
        return false;
      }

      // Check columns
      if (board[j][i] !== "." && !isValidInSet(colSet, board[j][i])) {
        return false;
      }

      // Check 3x3 sub-boxes
      const boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const boxCol = 3 * (i % 3) + (j % 3);
      if (
        board[boxRow][boxCol] !== "." &&
        !isValidInSet(boxSet, board[boxRow][boxCol])
      ) {
        return false;
      }
    }
  }

  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board)); // Output: true
