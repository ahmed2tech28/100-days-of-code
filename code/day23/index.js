function findUniqueNumber(arr) {
  const count = new Map();
  for (let num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  for (let num of arr) {
    if (count.get(num) === 1) {
      return num;
    }
  }
  return null;
}

const arr = [1, 2, 3, 4, 6, 1, 2, 3, 4, 5];

const unique = findUniqueNumber(arr);
console.log(unique);
