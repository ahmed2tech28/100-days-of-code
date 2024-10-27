function rotateMatrix(matrix) {
  // Transpose the matrix
  let transposedMatrix = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );

  // Reverse each row of the transposed matrix
  return transposedMatrix.map((row) => row.reverse());
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotated = rotateMatrix(matrix);
console.log(rotated);
