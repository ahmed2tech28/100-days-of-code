function solveSudoku(board) {
  const SIZE = 9;

  // Helper function to check if placing a number is valid
  function isValid(board, row, col, num) {
    for (let i = 0; i < SIZE; i++) {
      // Check row, column, and 3x3 grid
      if (
        board[row][i] === num || // Check row
        board[i][col] === num || // Check column
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === num // Check 3x3 box
      ) {
        return false;
      }
    }
    return true;
  }

  // Recursive function to solve the Sudoku
  function solve() {
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num; // Place number

              if (solve()) {
                return true; // Continue solving
              }

              board[row][col] = 0; // Backtrack
            }
          }
          return false; // No solution found, backtrack
        }
      }
    }
    return true; // Solved successfully
  }

  solve();
  return board;
}

// Example usage:
const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const solvedBoard = solveSudoku(board);
console.log("Solved Sudoku:");
console.log(solvedBoard);
