function groupAnagrams(strings) {
  const anagramMap = new Map();

  strings.forEach((str) => {
    // Sort the string to generate a common key for anagrams
    const sortedKey = str.split("").sort().join("");

    // Add the string to the corresponding group in the map
    if (!anagramMap.has(sortedKey)) {
      anagramMap.set(sortedKey, []);
    }
    anagramMap.get(sortedKey).push(str);
  });

  // Convert the map values to an array
  return Array.from(anagramMap.values());
}

// Example usage
const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strings));
