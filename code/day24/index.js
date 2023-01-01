function checkString(str, stringToCheck) {
  return str.toLowerCase().includes(stringToCheck.toLowerCase());
}

const isSubString = checkString("Hellow", "llow");
console.log(isSubString);
