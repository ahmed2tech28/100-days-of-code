function solveKnightsTour(n) {
  // Initialize the chessboard
  const board = Array.from({ length: n }, () => Array(n).fill(-1));
  const solutions = [];

  // Possible knight moves
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValidMove(x, y) {
    // Check if the move is within bounds and the square is not visited
    return x >= 0 && x < n && y >= 0 && y < n && board[x][y] === -1;
  }

  function backtrack(x, y, step) {
    // Place the knight on the current square
    board[x][y] = step;

    // If all squares are visited, add this board to solutions
    if (step === n * n - 1) {
      solutions.push(board.map((row) => [...row])); // Deep copy the board
      board[x][y] = -1; // Backtrack
      return;
    }

    // Try all possible knight moves
    for (const [dx, dy] of moves) {
      const nextX = x + dx;
      const nextY = y + dy;
      if (isValidMove(nextX, nextY)) {
        backtrack(nextX, nextY, step + 1);
      }
    }

    // Backtrack: Unmark this square
    board[x][y] = -1;
  }

  // Start the tour from the top-left corner (0, 0)
  backtrack(0, 0, 0);

  return solutions;
}

// Example usage
const n = 5; // Size of the chessboard
const solutions = solveKnightsTour(n);
console.log(`Found ${solutions.length} solutions for a ${n}x${n} board.`);

// Print one solution (if it exists)
if (solutions.length > 0) {
  console.log("Example solution:");
  console.table(solutions[0]);
}
