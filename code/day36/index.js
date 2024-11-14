class StackUsingQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  // Push operation
  push(item) {
    // Add item to queue1
    this.queue1.push(item);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      throw new Error("Pop from an empty stack");
    }

    // Move all elements except the last from queue1 to queue2
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // The last item in queue1 is the top of the stack
    const poppedItem = this.queue1.shift();

    // Swap queue1 and queue2 to maintain stack order
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return poppedItem;
  }

  // Top operation
  top() {
    if (this.isEmpty()) {
      throw new Error("Top of an empty stack");
    }

    // Move all elements except the last from queue1 to queue2
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    // The last item in queue1 is the top of the stack
    const topItem = this.queue1[0];

    // Move the last item to queue2 to keep it in stack
    this.queue2.push(this.queue1.shift());

    // Swap queue1 and queue2
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return topItem;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.queue1.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.queue1.length;
  }
}

// Testing the StackUsingQueues class
const stack = new StackUsingQueues();

// Push elements onto the stack
console.log("Pushing 10, 20, 30 to stack...");
stack.push(10);
stack.push(20);
stack.push(30);

// Check top element
console.log("Top element:", stack.top()); // Should print 30

// Pop elements from the stack
console.log("Popping top element:", stack.pop()); // Should print 30
console.log("Popping next top element:", stack.pop()); // Should print 20

// Check size and top element
console.log("Current size:", stack.size()); // Should print 1
console.log("Top element after popping:", stack.top()); // Should print 10

// Final pop to empty the stack
console.log("Popping final element:", stack.pop()); // Should print 10
console.log("Is stack empty?", stack.isEmpty()); // Should print true

try {
  stack.pop(); // This should throw an error as the stack is empty
} catch (e) {
  console.log("Error:", e.message); // Expected error message
}
