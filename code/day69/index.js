class MedianFinder {
  constructor() {
    // Min-heap for the larger half of the numbers
    this.minHeap = [];
    // Max-heap for the smaller half of the numbers (simulated by storing negatives)
    this.maxHeap = [];
  }

  addNum(num) {
    // Insert into maxHeap (smaller half)
    this._addToHeap(this.maxHeap, -num);

    // Ensure every element in maxHeap is <= every element in minHeap
    if (this.minHeap.length > 0 && -this.maxHeap[0] > this.minHeap[0]) {
      this._addToHeap(this.minHeap, -this._extractTop(this.maxHeap));
    }

    // Balance the heaps' sizes so that maxHeap >= minHeap in size
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this._addToHeap(this.minHeap, -this._extractTop(this.maxHeap));
    }
  }

  findMedian() {
    // If odd number of elements, median is top of maxHeap
    if (this.maxHeap.length > this.minHeap.length) {
      return -this.maxHeap[0];
    }
    // If even number of elements, median is the average of tops of both heaps
    return (-this.maxHeap[0] + this.minHeap[0]) / 2;
  }

  // Helper to insert into a heap (using array and maintaining heap order)
  _addToHeap(heap, value) {
    heap.push(value);
    heap.sort((a, b) => a - b); // Min-heap sort order
  }

  // Helper to extract the top (root) of the heap
  _extractTop(heap) {
    return heap.shift();
  }
}

// Example usage:
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(10);
console.log(medianFinder.findMedian()); // Output: 5.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 3
