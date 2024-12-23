class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  /**
   * Detects if a cycle exists in a linked list.
   *
   * @param {ListNode} head - The head of the linked list.
   * @return {boolean} - True if there is a cycle, false otherwise.
   */
  if (!head) return false;

  let slow = head; // Tortoise pointer
  let fast = head; // Hare pointer

  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer by 1 step
    fast = fast.next.next; // Move fast pointer by 2 steps

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle detected
}

// Create a linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Output: true

// Create a linked list without a cycle
const nodeA = new ListNode(1);
const nodeB = new ListNode(2);
const nodeC = new ListNode(3);

nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(hasCycle(nodeA)); // Output: false
