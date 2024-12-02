function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => ".".repeat(n));

  const isSafe = (row, col, queens) => {
    for (let [r, c] of queens) {
      if (c === col || r - c === row - col || r + c === row + col) {
        return false;
      }
    }
    return true;
  };

  const backtrack = (row, queens) => {
    if (row === n) {
      solutions.push(
        board.map(
          (row, r) =>
            row.substring(0, queens[r][1]) +
            "Q" +
            row.substring(queens[r][1] + 1)
        )
      );
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, queens)) {
        queens.push([row, col]);
        board[row] = ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
        backtrack(row + 1, queens);
        queens.pop();
      }
    }
  };

  backtrack(0, []);
  return solutions;
}

// Example usage:
console.log(solveNQueens(4));
