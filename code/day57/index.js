class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // Stack for enqueue operations
    this.stack2 = []; // Stack for dequeue operations
  }

  // Add an element to the queue
  enqueue(value) {
    this.stack1.push(value);
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.stack2.length === 0) {
      // Transfer elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // Return the top of stack2, or undefined if both stacks are empty
    return this.stack2.pop();
  }

  // Return the front element without removing it
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // true
