function alienOrder(words) {
  const graph = new Map();
  const inDegree = new Map();

  // Initialize graph and in-degree map
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) graph.set(char, []);
      if (!inDegree.has(char)) inDegree.set(char, 0);
    }
  }

  // Build the graph
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    // Find the first differing character
    const minLength = Math.min(word1.length, word2.length);
    let foundDifference = false;
    for (let j = 0; j < minLength; j++) {
      const char1 = word1[j];
      const char2 = word2[j];

      if (char1 !== char2) {
        graph.get(char1).push(char2);
        inDegree.set(char2, inDegree.get(char2) + 1);
        foundDifference = true;
        break;
      }
    }

    // If no difference and word1 is longer than word2, the order is invalid
    if (!foundDifference && word1.length > word2.length) {
      return "";
    }
  }

  // Topological Sort (Kahn's Algorithm)
  const queue = [];
  for (const [char, degree] of inDegree) {
    if (degree === 0) queue.push(char);
  }

  const result = [];
  while (queue.length > 0) {
    const char = queue.shift();
    result.push(char);

    for (const neighbor of graph.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  // If result doesn't include all characters, there is a cycle
  if (result.length !== graph.size) return "";

  return result.join("");
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words)); // Output: "wertf"
