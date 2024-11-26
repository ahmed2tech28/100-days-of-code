class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swap = null;

      if (leftChildIdx < length && this.heap[leftChildIdx] < element) {
        swap = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] <
          (swap === null ? element : this.heap[leftChildIdx])
      ) {
        swap = rightChildIdx;
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

function findKthLargest(nums, k) {
  const minHeap = new MinHeap();

  for (const num of nums) {
    minHeap.insert(num);
    if (minHeap.heap.length > k) {
      minHeap.remove();
    }
  }

  return minHeap.heap[0];
}

// Example Usage
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 5
