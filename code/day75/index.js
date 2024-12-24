class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0, 0); // Dummy head
    this.tail = new Node(0, 0); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.cache.get(key);
    if (!node) return -1;

    this._moveToHead(node); // Mark as recently used
    return node.value;
  }

  put(key, value) {
    const node = this.cache.get(key);
    if (node) {
      // Update the value and mark as recently used
      node.value = value;
      this._moveToHead(node);
    } else {
      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this._addToHead(newNode);

      if (this.cache.size > this.capacity) {
        // Remove the least recently used node
        const lru = this._removeTail();
        this.cache.delete(lru.key);
      }
    }
  }

  _addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addToHead(node);
  }

  _removeTail() {
    const node = this.tail.prev;
    this._removeNode(node);
    return node;
  }
}

const lru = new LRUCache(2);

lru.put(1, 1); // Cache: {1=1}
lru.put(2, 2); // Cache: {1=1, 2=2}
console.log(lru.get(1)); // Output: 1, Cache: {2=2, 1=1}
lru.put(3, 3); // Cache: {1=1, 3=3}, evicts key 2
console.log(lru.get(2)); // Output: -1 (not found)
lru.put(4, 4); // Cache: {3=3, 4=4}, evicts key 1
console.log(lru.get(1)); // Output: -1 (not found)
console.log(lru.get(3)); // Output: 3, Cache: {4=4, 3=3}
console.log(lru.get(4)); // Output: 4, Cache: {3=3, 4=4}
