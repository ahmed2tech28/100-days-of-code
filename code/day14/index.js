// function compareObjects(obj1, obj2) {
//   const arr1keys = Object.keys(obj1);
//   const arr2keys = Object.keys(obj2);

//   if (arr1keys.length != arr2keys.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1keys.length; i++) {
//     if (!(arr1keys[i] == arr2keys[i])) {
//       return false;
//     }
//   }
//   for (const key of arr1keys) {
//     if (!(obj1[key] == obj2[key])) {
//       return false;
//     }
//   }

//   return true;
// }

// const obj1 = {
//   a: 1,
//   b: 2,
// };
// const obj2 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const isIdentical = compareObjects(obj1, obj2);
// console.log(isIdentical);

function deepCompareObjects(obj1, obj2) {
  // Check if both values are of type "object"
  if (
    typeof obj1 === "object" &&
    typeof obj2 === "object" &&
    obj1 !== null &&
    obj2 !== null
  ) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    // If the number of keys is different, objects are not identical
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    // Recursively compare each key and value
    for (const key of obj1Keys) {
      if (
        !obj2Keys.includes(key) ||
        !deepCompareObjects(obj1[key], obj2[key])
      ) {
        return false;
      }
    }
    return true;
  } else {
    // For non-objects (primitives), check if values are strictly equal
    return obj1 === obj2;
  }
}

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 5],
  },
};

console.log(deepCompareObjects(obj1, obj2)); // true
console.log(deepCompareObjects(obj1, obj3)); // false
