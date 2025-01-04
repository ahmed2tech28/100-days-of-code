class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].value < this.heap[parentIndex].value) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let smallest = index;

      if (
        leftChild < length &&
        this.heap[leftChild].value < this.heap[smallest].value
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < length &&
        this.heap[rightChild].value < this.heap[smallest].value
      ) {
        smallest = rightChild;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }
}

function kthSmallest(matrix, k) {
  const n = matrix.length;
  const heap = new MinHeap();

  // Initialize the heap with the first element of each row
  for (let i = 0; i < Math.min(n, k); i++) {
    heap.insert({ value: matrix[i][0], row: i, col: 0 });
  }

  let count = 0,
    result;

  while (count < k) {
    const { value, row, col } = heap.extractMin();
    result = value;
    count++;

    // If there's a next element in the same row, add it to the heap
    if (col + 1 < matrix[row].length) {
      heap.insert({ value: matrix[row][col + 1], row, col: col + 1 });
    }
  }

  return result;
}

// Example Usage:
const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
const k = 8;

console.log(kthSmallest(matrix, k)); // Output: 13
