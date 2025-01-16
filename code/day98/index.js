function rotateMatrix(matrix) {
    const n = matrix.length;
  
    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        // Swap matrix[i][j] with matrix[j][i]
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  
    return matrix;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Original Matrix:");
  console.log(matrix);
  
  const rotatedMatrix = rotateMatrix(matrix);
  
  console.log("Rotated Matrix 90 degrees clockwise:");
  console.log(rotatedMatrix);
  