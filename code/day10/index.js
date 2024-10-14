function findArrayMissingNumber(arr) {
  const fullArr = Array.from(
    { length: arr[arr.length - 1] },
    (item, i) => i + 1
  );
  const missings = fullArr.filter((item, i) => {
    return !arr.includes(item);
  });

  return missings;
}

let arr = [1, 2, 3, 5, 7, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20];
let missings = findArrayMissingNumber(arr);
console.log(missings);
