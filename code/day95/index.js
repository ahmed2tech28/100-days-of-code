class FreqStack {
    constructor() {
      this.stack = []; // Stores the stack elements.
      this.freqMap = new Map(); // Tracks the frequency of each element.
      this.groupMap = new Map(); // Groups elements by their frequency.
      this.maxFreq = 0; // Tracks the current maximum frequency.
    }
  
    // Pushes an element onto the stack.
    push(val) {
      // Update the frequency map.
      const freq = (this.freqMap.get(val) || 0) + 1;
      this.freqMap.set(val, freq);
  
      // Update the max frequency if needed.
      this.maxFreq = Math.max(this.maxFreq, freq);
  
      // Add the element to the group map based on its frequency.
      if (!this.groupMap.has(freq)) {
        this.groupMap.set(freq, []);
      }
      this.groupMap.get(freq).push(val);
    }
  
    // Pops the most frequent element from the stack.
    pop() {
      // Get the element with the current max frequency.
      const group = this.groupMap.get(this.maxFreq);
      const val = group.pop();
  
      // If the group is empty, decrement the max frequency.
      if (group.length === 0) {
        this.groupMap.delete(this.maxFreq);
        this.maxFreq--;
      }
  
      // Update the frequency map.
      this.freqMap.set(val, this.freqMap.get(val) - 1);
      if (this.freqMap.get(val) === 0) {
        this.freqMap.delete(val);
      }
  
      return val;
    }
  }
  
  // Example usage:
  const freqStack = new FreqStack();
  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(4);
  freqStack.push(5);
  
  console.log(freqStack.pop()); // 5 (most frequent)
  console.log(freqStack.pop()); // 7 (next most frequent)
  console.log(freqStack.pop()); // 5 (next most frequent)
  console.log(freqStack.pop()); // 4
  