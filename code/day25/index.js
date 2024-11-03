function printPascalsTriangleStars(n) {
  const triangle = [];

  for (let i = 0; i < n; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    if (i > 0) {
      row.push(1);
    }
    triangle.push(row);
  }

  for (let i = 0; i < triangle.length; i++) {
    const starRow = triangle[i].map((num) => "*".repeat(num)).join(" ");
    console.log(starRow);
  }
}

printPascalsTriangleStars(5);
