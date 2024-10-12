function generateChunk(arr, size) {
  let chunks = [];
  for (let i = 0; i <= arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunks.push(chunk);
  }
  return chunks;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const chunks = generateChunk(arr, 2);
console.log(chunks);
