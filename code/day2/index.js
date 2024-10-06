function checkAnagram1(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function checkAnagram2(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }
  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(checkAnagram1("Ls2", "2ls"));
console.log(checkAnagram2("Ls2", "2ls"));
